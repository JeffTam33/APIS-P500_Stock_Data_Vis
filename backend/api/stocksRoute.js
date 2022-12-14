import express from "express"
import StockCtrl from "./stocksCtrl.js"

const router = express.Router()
router.route("/").get(StockCtrl.apiGetStocks)

export default router