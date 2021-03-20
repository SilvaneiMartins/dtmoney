import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: "Freelance",
                    type: "deposit",
                    category: "App Beber Agua",
                    amount: 9000,
                    createdAt: new Date("2021-03-19 23:58:00"),
                },
                {
                    id: 2,
                    title: "Supermercado Bom Dia",
                    type: "withdraw",
                    category: "Compras",
                    amount: 170,
                    createdAt: new Date("2021-03-19 23:58:00"),
                },
                {
                    id: 3,
                    title: "Lanche Bob",
                    type: "withdraw",
                    category: "Lanches",
                    amount: 27,
                    createdAt: new Date("2021-03-19 23:58:00"),
                },
            ],
        });
    },

    routes() {
        this.namespace = "api";
        this.get("/transactions", () => {
            return this.schema.all("transaction");
        });
        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create("transaction", data);
        });
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
