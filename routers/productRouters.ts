import express from "express";

import { validateSchema } from "../middlewares/validateSchema";
// import { validateToken } from "../middlewares/validateToken";

const productRouters = express.Router();

productRouters.get("/");
productRouters.get("/products/:code");
productRouters.get("/products");
productRouters.put("/products/:code");
productRouters.delete("/products/:code");

export default productRouters;
