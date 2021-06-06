const express = require('express');
const router = express.Router();

const homeController = require("../controllers/home_controller_Api")

router.get('/' , homeController.homeApi)

module.exports = router;