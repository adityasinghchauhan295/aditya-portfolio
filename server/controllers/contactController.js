import Contact from "../models/Contact.js";
import sendContactEmail from "../services/emailService.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Save to MongoDB first
    const savedContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    try {
      // Send email notification
      await sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      console.log("✅ Contact saved:", savedContact._id);
      console.log("📧 Email sent successfully");

      return res.status(201).json({
        success: true,
        message: "Message sent successfully! ✅",
      });
    } catch (emailError) {
      console.error("❌ Email Error:", emailError.message);

      // Message is still safely stored in MongoDB
      return res.status(201).json({
        success: true,
        message:
          "Message saved successfully, but email notification failed.",
      });
    }
  } catch (error) {
    console.error("❌ Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};