import StocksDAO from "../dao/stocksDAO.js"

export default class StocksController {
  static async apiGetStocks(req, res, next) {
    const restaurantsPerPage = 50
    const page = req.query.page ? parseInt(req.query.page, 10) : 0
    let tickers = []
    let names = []

    let filters = {}
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { restaurantsList, totalNumRestaurants } = await StocksDAO.getStocks({
      filters,
      page,
      restaurantsPerPage,
    })

    tickers.push(restaurantsList.map(x => x.ticker))
    names.push(restaurantsList.map(x => x.name))

    let response = {
      stocks: restaurantsList,
      page: page,
      filters: filters,
      entries_per_page: restaurantsPerPage,
      total_results: totalNumRestaurants,
      tickers,
      names,
    }
    res.json(response)
  }
}