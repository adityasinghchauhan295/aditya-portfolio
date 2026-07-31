import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Portfolio Backend Running Successfully",
  });
});

// Contact API
app.use("/api/contact", contactRoutes);

export default app;