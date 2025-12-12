import express, { Express } from "express";
import authRoutes from "./routes/auth.js"
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      
      "https://loan-management-app-wine.vercel.app",

      "https://loan-management-app-git-main-ashleys-projects-032f2530.vercel.app",
      
      "https://loan-management-app-ashleys-projects-032f2530.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use('/api', authRoutes)

app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
