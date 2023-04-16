import express, { Request, Response, NextFunction, Express } from "express";

const adminServer: Express = express();

adminServer.use(express.json());

const PORT = (process.env.PORT) || 8003;

adminServer.listen(PORT, () =>
{
   console.log(`order server is running on port ${PORT}`);
});