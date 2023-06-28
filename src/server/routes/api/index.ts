import * as express from "express";


const router = express.Router();

router.use("/health", (req, res) => {
    const timestamp = new Date().toLocaleString();
    res.status(200).json({ message: "Nice. Server is working.", timestamp });
});

// use routers here

export default router;