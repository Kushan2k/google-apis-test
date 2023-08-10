const env = require("dotenv")
const axios = require("axios")
env.config()

//nearby search
const BASE_URL_NEARBY_SEARCH =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

//radius auto to 500000

//to get open now places use open
const url = `${BASE_URL_NEARBY_SEARCH}location=${process.env.MY_LATITUDE},${process.env.MY_LOGITUTE}&radius=50000&key=${process.env.GOOGLE_API_KEY}`

axios({ method: "get", url: url })
  .then((res) => {
    res.data.results.map((place) => {
      console.log("name ", place.name)
      console.log("id ", place.place_id)
      if (place.photos) {
        place.photos.map((pic) => console.log(pic))
      }
      console.log("Geometry ", place.geometry)
      console.log("\n==============================")
    })
  })
  .catch((er) => {
    console.log(er)
  })

//get place details api
const PLACE_DETAILS_BASE_URL =
  "https://maps.googleapis.com/maps/api/place/details/json?"
const place_id = "ChIJlzgTfR464zoR_SLRysBXfJw"

const detilas_url = `${PLACE_DETAILS_BASE_URL}place_id=${place_id}&key=${process.env.GOOGLE_API_KEY}`

axios({
  method: "get",
  url: detilas_url,
})
  .then((res) => {
    console.log(res.data)
  })
  .catch((er) => {
    console.log(er)
  })
