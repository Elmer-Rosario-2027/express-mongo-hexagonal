import { Router } from "express";

import { createItem, findItem } from "../controller/mymodule.controller";
import { authenticate } from "../middleware/request-validator";

const router = Router();

router.get("/",[authenticate], findItem);
router.post("/create", createItem);

export default router;
