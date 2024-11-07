import express from "express";
import cors from 'cors';
//import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
// import * as path from "path";
import router from "./routes/api.js";

import{MONGOOSE_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME, URL_ENCODED} from "./app/config/config.js";

const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODED}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());

// Rate Limited
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME, 
    max: REQUEST_LIMIT_NUMBER,
});

app.use(limiter);

// Web Caching

app.set('etag', WEB_CACHE);

// MongoDB Connection Setting
/*
you need to connect MONGODB here.
*/


// SET API Routes
app.use("/api/v1", router);

// Set Application Storage
app.use(express.static(Storage));

// Run Your Express Back End Project
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
})