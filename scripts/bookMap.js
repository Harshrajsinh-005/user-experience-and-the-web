import books from "./books.js";

const apiKey = "9e1f00f9a7584ae782fd51299886fb8f"
let cityArray = []
let map

async function getCoordinatesFromCity(cityName) {
    try {
        const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&key=${apiKey}`)

        if (!res.ok) {
            return null
        }

        const data = await res.json()

        if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry
            return { lat, lng }
        } else {
            return null
        }
    } catch (err) {
        return null
    }
}

function drawPins() {
    books.map(async (book) => {
        let coordinates = await getCoordinatesFromCity(book.AuthorCity)
        console.log(coordinates, book.Title)
        if (coordinates == null) { return }

        let marker = L.marker([coordinates.lat, coordinates.lng]).addTo(map)
        marker.bindPopup(`<b>Title: </b>${book.Title}<br>
                          <b>City: </b>${book.AuthorCity}
                        `)
    })
}

window.onload = () => {
    map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    drawPins()
}
