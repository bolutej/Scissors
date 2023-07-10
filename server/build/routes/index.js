"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shortUrl_controller_1 = require("../controller/shortUrl.controller");
const router = (0, express_1.Router)();
router.get('/healthcheck', (req, res) => {
    return res.send('App is healthy');
});
router.post("/getCustomLink", shortUrl_controller_1.createShortUrl);
router.get("/:shortId", shortUrl_controller_1.handleRedirect);
router.get("/api/analytics", shortUrl_controller_1.getAnalytics);
exports.default = router;
