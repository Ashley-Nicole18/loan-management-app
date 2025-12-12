import express, { Express } from "express";
import authRoutes from "./routes/auth.js"
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "loan-management-gvrk7j59r-ashleys-projects-032f2530.vercel.app"
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
