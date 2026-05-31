"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "./Button";

const inquirySchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  country: z.string().min(2, "Country is required"),
  email: z.string().email("Invalid email address"),
  whatsAppNumber: z.string().min(8, "Valid phone/WhatsApp number is required"),
  productInterest: z.string().min(1, "Please select a product or advisory service"),
  quantity: z.string().min(1, "Required quantity is required"),
  targetPort: z.string().min(2, "Target discharge port is required"),
  deliveryDate: z.string().min(1, "Expected delivery date is required"),
  message: z.string().min(10, "Please provide a message with at least 10 characters"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  defaultProduct?: string;
  isRealEstate?: boolean;
}

export default function InquiryForm({ defaultProduct = "", isRealEstate = false }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      productInterest: defaultProduct || (isRealEstate ? "Real Estate Advisory" : "Incense Sticks"),
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Import the dynamic server action
      const { submitInquiryAction } = await import("@/app/actions/inquiry");
      const result = await submitInquiryAction(data);
      
      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        console.error("Submission error message:", result.error);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Critical submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-subdued-gray/50 border border-luxury-gold/15 p-6 md:p-8 gold-glow relative">
      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-16 h-16 bg-luxury-gold/10 border border-luxury-gold flex items-center justify-center text-luxury-gold mb-6 rounded-none">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-premium-white mb-3">
              Quotation Request Logged
            </h3>
            <p className="font-sans text-sm text-premium-white/60 max-w-md leading-relaxed mb-8">
              Thank you for choosing CY Global Merchants. Our international procurement and logistics desk has received your sourcing specifications. We will verify availability and reply with a pro-forma quote within 12 hours.
            </p>
            <Button variant="outline" size="sm" onClick={() => setSubmitStatus("idle")}>
              Submit Another Inquiry
            </Button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="border-b border-luxury-gold/20 pb-4 mb-6">
              <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-luxury-gold">
                {isRealEstate ? "Advisory Inquiry Desk" : "B2B Export Quotation Desk"}
              </h3>
              <p className="font-sans text-xs text-premium-white/50 tracking-wider mt-1 uppercase">
                Submit specifications for immediate international review
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Global Sourcing LLC"
                  {...register("companyName")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.companyName ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.companyName && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.companyName.message}
                  </span>
                )}
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jonathan Wright"
                  {...register("contactPerson")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.contactPerson ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.contactPerson && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.contactPerson.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Country */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Target Destination Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. Germany"
                  {...register("country")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.country ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.country && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.country.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="e.g. procurement@globalsourcing.com"
                  {...register("email")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. +1 555 123 4567"
                  {...register("whatsAppNumber")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.whatsAppNumber ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.whatsAppNumber && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.whatsAppNumber.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Sourcing Interest */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Product / Sourcing Interest
                </label>
                <select
                  {...register("productInterest")}
                  className="w-full bg-primary-black border border-white/10 px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none focus:border-luxury-gold transition-colors duration-300 rounded-none cursor-pointer"
                >
                  {!isRealEstate ? (
                    <>
                      <option value="Incense Sticks (Agarbatti)">Incense Sticks (Agarbatti) [HS 33074100]</option>
                      <option value="Brass Decorative Handicrafts">Brass Decorative Handicrafts [HS 74199930]</option>
                      <option value="Yoga Products">Yoga Products [HS 95069190]</option>
                      <option value="Cotton Tote Bags">Cotton Tote Bags [HS 420292]</option>
                      <option value="Real Estate Advisory">Real Estate Advisory (Secondary)</option>
                    </>
                  ) : (
                    <>
                      <option value="Real Estate Advisory">Pune Real Estate Investment Advisory</option>
                      <option value="Incense Sticks (Agarbatti)">Incense Sticks Sourcing</option>
                      <option value="Brass Decorative Handicrafts">Brass Handicrafts Sourcing</option>
                    </>
                  )}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Required Volume / Quantity
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5,000 Units / 1x20ft Container"
                  {...register("quantity")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.quantity ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.quantity && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.quantity.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Target Discharge Port */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Target Discharge Port
                </label>
                <input
                  type="text"
                  placeholder="e.g. Port of Rotterdam, Netherlands"
                  {...register("targetPort")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.targetPort ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.targetPort && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.targetPort.message}
                  </span>
                )}
              </div>

              {/* Expected Delivery Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                  Required Port-of-Arrival Date
                </label>
                <input
                  type="date"
                  {...register("deliveryDate")}
                  className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                    errors.deliveryDate ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                  }`}
                />
                {errors.deliveryDate && (
                  <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                    {errors.deliveryDate.message}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-premium-white/60 mb-2">
                Detailed Sourcing / Customization Specifications
              </label>
              <textarea
                rows={4}
                placeholder="Include custom packaging specifications, private labeling instructions, certifications required, or special logistical arrangements..."
                {...register("message")}
                className={`w-full bg-primary-black border px-4 py-3 text-sm font-sans tracking-wide text-premium-white focus:outline-none transition-colors duration-300 rounded-none ${
                  errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-luxury-gold"
                }`}
              />
              {errors.message && (
                <span className="text-[10px] text-red-500 mt-1 uppercase tracking-wider block font-medium">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit button */}
            <div className="flex flex-col space-y-4 pt-2">
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-semibold"
                iconRight={
                  isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-primary-black border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <Send size={15} />
                  )
                }
              >
                {isSubmitting ? "Processing Sourcing Specifications..." : "Submit Sourcing Request"}
              </Button>
              
              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 text-red-500 bg-red-500/5 border border-red-500/20 p-3 text-xs tracking-wider uppercase font-semibold">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>Submission error. Sourcing desk is online: WhatsApp us directly (+91 74980 25464)</span>
                </div>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
