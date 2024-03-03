import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const whiteListedIPs = ["http://localhost:300"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteListedIPs?.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS!"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

export { app };
