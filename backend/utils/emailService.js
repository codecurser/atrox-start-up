import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "ataryo.info@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

// Send partner inquiry email
export const sendPartnerInquiry = async (name, contactInfo, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || "ataryo.info@gmail.com",
      to: "ataryo.info@gmail.com",
      subject: `New Partner Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a1a2e; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f4f4f4; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a1a2e; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #4a90e2; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Partner Inquiry - Ataryo</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Contact Information:</div>
                <div class="value">${contactInfo}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px;">
                This email was sent from the Ataryo partner inquiry form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Partner Inquiry

Name: ${name}
Contact Information: ${contactInfo}
Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
};

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log("✅ Email service is ready");
    return true;
  } catch (error) {
    console.error("❌ Email service configuration error:", error);
    return false;
  }
};
