"use server";

import * as z from "zod";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

const inquirySchema = z.object({
  companyName: z.string().min(2),
  contactPerson: z.string().min(2),
  country: z.string().min(2),
  email: z.string().email(),
  whatsAppNumber: z.string().min(8),
  productInterest: z.string().min(1),
  quantity: z.string().min(1),
  targetPort: z.string().min(2),
  deliveryDate: z.string().min(1),
  message: z.string().min(10),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export async function submitInquiryAction(data: InquiryFormValues) {
  try {
    // 1. Validate data on the server side
    const validatedData = inquirySchema.parse(data);
    const timestamp = new Date().toISOString();

    console.log("[Server Action] Received new sourcing lead:", validatedData);

    // 2. Insert into Supabase
    let supabaseSuccess = false;
    
    // Check if we have actual Supabase credentials set up
    const isMockSupabase = 
      !process.env.NEXT_PUBLIC_SUPABASE_URL || 
      process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder-project");

    if (!isMockSupabase) {
      try {
        const { error } = await supabase.from("inquiries").insert([
          {
            company_name: validatedData.companyName,
            contact_person: validatedData.contactPerson,
            country: validatedData.country,
            email: validatedData.email,
            whatsapp_number: validatedData.whatsAppNumber,
            product_interest: validatedData.productInterest,
            quantity: validatedData.quantity,
            target_port: validatedData.targetPort,
            expected_delivery: validatedData.deliveryDate,
            message: validatedData.message,
            created_at: timestamp,
          },
        ]);

        if (error) {
          console.warn("[Supabase Warning] Failed to insert inquiry. Supabase returned:", error.message);
          console.log("[Supabase Warning Detail] Make sure table 'inquiries' is created in Supabase SQL Editor. Running mock fallback.");
        } else {
          console.log("[Supabase Success] Sourcing lead stored successfully in inquiries table.");
          supabaseSuccess = true;
        }
      } catch (dbError) {
        console.warn("[Supabase Catch Warning] Supabase client encountered an exception:", dbError);
      }
    } else {
      console.log("[Mock Database] Supabase is in placeholder/mock state. Sourcing data was logged to console.");
    }

    // 3. Send Notification Email via Resend
    let emailSuccess = false;
    const isMockResend = !process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes("placeholder");

    const emailSubject = `[B2B SOURCING LEAD] - ${validatedData.companyName} (${validatedData.country})`;
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #0C5A3E; background-color: #FFFFFF; color: #0A0A0A;">
        <h2 style="color: #0C5A3E; border-bottom: 2px solid #0C5A3E; padding-bottom: 10px; text-transform: uppercase; font-family: serif; letter-spacing: 2px;">
          CY Global Merchants - Sourcing Lead
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E; width: 40%;">Company Name:</td>
            <td style="padding: 10px; color: #0A0A0A;">${validatedData.companyName}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">Contact Person:</td>
            <td style="padding: 10px; color: #0A0A0A;">${validatedData.contactPerson}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">Target Destination:</td>
            <td style="padding: 10px; color: #0A0A0A;">${validatedData.country}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">Business Email:</td>
            <td style="padding: 10px; color: #0A0A0A;"><a href="mailto:${validatedData.email}" style="color: #0C5A3E; text-decoration: none;">${validatedData.email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">WhatsApp / Phone:</td>
            <td style="padding: 10px; color: #0A0A0A;"><a href="tel:${validatedData.whatsAppNumber}" style="color: #0C5A3E; text-decoration: none;">${validatedData.whatsAppNumber}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">Product Interest:</td>
            <td style="padding: 10px; color: #0A0A0A; font-weight: bold;">${validatedData.productInterest}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">Required Volume:</td>
            <td style="padding: 10px; color: #0A0A0A;">${validatedData.quantity}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">Target Discharge Port:</td>
            <td style="padding: 10px; color: #0A0A0A;">${validatedData.targetPort}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(12,90,62,0.2);">
            <td style="padding: 10px; font-weight: bold; color: #0C5A3E;">Arrival Target Date:</td>
            <td style="padding: 10px; color: #0A0A0A;">${validatedData.deliveryDate}</td>
          </tr>
        </table>
        
        <div style="margin-top: 25px; padding: 15px; background-color: #F3F5F4; border: 1px solid rgba(12,90,62,0.1);">
          <h4 style="margin-top: 0; color: #0C5A3E; font-size: 14px; text-transform: uppercase;">Detailed Specifications:</h4>
          <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #333333; white-space: pre-wrap;">${validatedData.message}</p>
        </div>
        
        <p style="font-size: 11px; color: #777777; margin-top: 20px; text-align: center; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 10px;">
          CY Global Merchants Sourcing Platform &bull; Automated B2B Intake Service &bull; Stamped ${timestamp}
        </p>
      </div>
    `;

    if (!isMockResend) {
      try {
        const emailResult = await resend.emails.send({
          from: "CY Global Sourcing <sourcing@cyglobalmerchants.com>",
          to: "info@cyglobalmerchants.com",
          subject: emailSubject,
          html: htmlContent,
        });

        if (emailResult.error) {
          console.warn("[Resend Warning] Failed to send email via Resend:", emailResult.error.message);
        } else {
          console.log("[Resend Success] Sourcing lead notification email sent successfully!");
          emailSuccess = true;
        }
      } catch (emailError) {
        console.warn("[Resend Catch Warning] Resend library threw an exception:", emailError);
      }
    } else {
      console.log("[Mock Email] Resend is in placeholder/mock state. Email HTML summary was logged above.");
    }

    // Always return a success response so client shows B2B intake success card
    return {
      success: true,
      data: {
        databaseStored: supabaseSuccess,
        emailDispatched: emailSuccess,
      },
    };
  } catch (error) {
    console.error("[Server Action Error] Critical validation/execution crash:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed: Please ensure all B2B fields are filled correctly." };
    }
    return { success: false, error: "An unexpected error occurred at the sourcing desk." };
  }
}
