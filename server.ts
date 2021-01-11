import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";
import { MYSQLSettings } from "./env.ts";

const router = new Router();

const MYSQLClient = await new Client().connect(MYSQLSettings);

router
    .get(`/`, (context) => {
        context.response.body = "Hello world!";
    })
    .get(`/book`, async (context) => {
        const users = await MYSQLClient.query(`select * from users`);
        context.response.body = users;
    })

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 9000 });