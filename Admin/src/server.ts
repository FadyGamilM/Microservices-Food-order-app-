import express, { Request, Response, NextFunction, Express } from "express";

const adminServer: Express = express();

adminServer.use(express.json());

const PORT: number = parseInt(process.env.PORT) || 8001;

adminServer.listen(PORT, () =>
{
   console.log(`admin server is running on port ${PORT}`);
});