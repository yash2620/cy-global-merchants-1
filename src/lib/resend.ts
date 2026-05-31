import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "re_placeholder_mock_key_987654321";

export const resend = new Resend(resendApiKey);
