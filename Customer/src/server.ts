import express, { Request, Response, NextFunction, Express } from "express";

const adminServer: Express = express();

adminServer.use(express.json());

const PORT = (process.env.PORT) || 8002;

adminServer.listen(PORT, () =>
{
   console.log(`customer server is running on port ${PORT}`);
});