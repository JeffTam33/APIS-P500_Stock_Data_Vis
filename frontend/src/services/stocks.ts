import http from "../http-common"

class StocksDataService {
  getAll() {
    console.log(http.get(`/`))
    return http.get(`/`)
  }
}

export default new StocksDataService()