import { Application } from "./deps.ts";

const app = new Application();

app.use((ctx) => {
    ctx.response.body = 'Hola Alan!'
});

app.listen({ port: 8080 });
console.log(`Server on http://localhost:8080/`);