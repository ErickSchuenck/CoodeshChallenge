import express from "express";

import productRouters from "./productRouters";

const router = express.Router();

router.use(productRouters);

export default router;
