import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/trainers.routes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const currentFilePath = path.dirname(fileURLToPath(import.meta.url));
const publicFolder = path.join(currentFilePath, "public");

app.use("/home", express.static(publicFolder));
app.use("/home/picture.jpg", express.static(publicFolder));
app.use("/api/trainers", router);

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
});
