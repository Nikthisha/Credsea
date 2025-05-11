"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var applicationController_1 = require("../controllers/applicationController");
var router = express_1.default.Router();
router.post('/', applicationController_1.submitApplication);
router.get('/stats', applicationController_1.getStats);
exports.default = router;
