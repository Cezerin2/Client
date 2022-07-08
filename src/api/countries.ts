export default class Countries {
  constructor(client) {
    this.client = client
  }

  list() {
    return this.client.get("/countries")
  }
}
