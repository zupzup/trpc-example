import express, { Application, Router, Request, Response } from 'express';
import cors from 'cors';
import * as trpc from '@trpc/server';

const tRPCRouter = trpc.router();
tRPCRouter.query('getCat', {
    input: (val: unknown) => {
        if (typeof val === 'string') return val;
        throw new Error(`invalid input: ${typeof val}`);
    },
    async resolve(req) {
        req.input;
        return { id: req.input, name: 'Cat' }
    }
});

// TODO: https://trpc.io/docs/express build example based on it

const app: Application = express();
const route = Router();

route.get("/bla/:num", async(req: Request, res: Response): Promise<any> => {
    const num: number = parseInt(req.params.num);

    return res.json({
        num: num,
    });
});

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
