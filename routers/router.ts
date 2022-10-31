import express from "express";

import etcRouters from "./etcRouters";

const router = express.Router();

router.use(etcRouters);

export default router;
