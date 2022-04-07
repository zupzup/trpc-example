import * as trpc from '@trpc/server';
import z from 'zod';

let cats: Cat[] = [];

const Cat = z.object({
    id: z.number(),
    name: z.string(),
});
const Cats = z.array(Cat);


function newId(): number {
    return Math.floor(Math.random() * 10000)
}

const trpcRouter = trpc.router()
    .query('get', {
        input: z.number(),
        output: Cat,
        async resolve(req) {
            const foundCat = cats.find((cat => cat.id === req.input));
            if (!foundCat) {
                throw new trpc.TRPCError({
                    code: 'BAD_REQUEST',
                    message: `could not find cat with id ${req.input}`,
                });
            }
            return foundCat;
        },
    })
    .query('list', {
        output: Cats,
        async resolve() {
            return cats;
        },
    })
    .mutation('create', {
        input: z.object({ name: z.string().max(50) }),
        async resolve(req) {
            const newCat: Cat = { id: newId(), name: req.input.name };
            cats.push(newCat)
            return newCat
        }
    })
    .mutation('delete', {
        input: z.object({ id: z.number() }),
        output: z.string(),
        async resolve(req) {
            cats = cats.filter(cat => cat.id !== req.input.id);
            return "success"
        }
    });

export type Cat = z.infer<typeof Cat>;
export type Cats = z.infer<typeof Cats>;
export type TRPCRouter = typeof trpcRouter;
export default trpcRouter;
