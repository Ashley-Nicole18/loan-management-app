import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
