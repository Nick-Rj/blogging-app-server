import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Server failed!", error);
    });
    app.listen(port, () => {
      console.log(`Server is up and running @ ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed!", error);
  });
