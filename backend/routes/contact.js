import express from "express";
import { sendPartnerInquiry } from "../utils/emailService.js";

const router = express.Router();

// POST /api/contact/partner - Handle partner inquiry form submission
router.post("/partner", async (req, res) => {
  try {
    const { name, contactInfo, message } = req.body;

    // Validation
    if (!name || !contactInfo || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required (name, contactInfo, message)",
      });
    }

    // Basic validation
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 100 characters",
      });
    }

    if (contactInfo.length < 5 || contactInfo.length > 200) {
      return res.status(400).json({
        success: false,
        message: "Contact info must be between 5 and 200 characters",
      });
    }

    if (message.length < 10 || message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message must be between 10 and 2000 characters",
      });
    }

    // Send email
    await sendPartnerInquiry(name, contactInfo, message);

    res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully. We'll get back to you soon!",
    });
  } catch (error) {
    console.error("Partner contact error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send your inquiry. Please try again later.",
    });
  }
});

export default router;
