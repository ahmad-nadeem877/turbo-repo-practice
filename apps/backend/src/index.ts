import express from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();

console.log(BACKEND_URL);
app.get("/", async (req, res) => {
  res.json({
    message: "server running",
  });
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
