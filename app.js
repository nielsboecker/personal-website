const express = require("express")
const app = express()
const router = express.Router()
const getStravaData = require("./getApiData").getStravaData
const getMediumData = require("./getApiData").getMediumData
const getRescuetimeData = require("./getApiData").getRescuetimeData
const getGithubData = require("./getApiData").getGithubData

app.use("/documents", express.static("public/documents"))
app.use("/css", express.static("public/css"))
app.use("/js", express.static("public/js"))
app.use("/img", express.static("public/img"))
app.use("/fonts", express.static("public/fonts"))
app.use("/public", express.static("public"))

app.set("views")
app.set("view engine", "pug")

// Fix issue with API data being cached: https://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code
app.disable('etag')

app.use(router)

// Make sure all URLs use www.
router.all(/.*/, function(req, res, next) {
    var host = req.get("host")
    if (host === "robertcooper.me") {
        if (host.match(/^www\..*/i)) {
            next()
        } else {
            res.redirect(301, "https://www." + host)
        }
    }
    next()
})

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/rescuetimeData", (request, response) => {
    getRescuetimeData()
        .then(rescuetimeData => {
            response.json(rescuetimeData)
        })
        .catch(error => {
            response.send(error)
        })
})

router.get("/githubData", (request, response) => {
    getGithubData()
        .then(githubData => {
            response.json(githubData)
        })
        .catch(error => {
            response.send(error)
        })
})

router.get("/stravaData", (request, response) => {
    getStravaData
        .then(stravaData => {
            response.json(stravaData)
        })
        .catch(error => {
            response.send(error)
        })
})

router.get("/mediumData", (request, response) => {
    getMediumData
        .then(mediumData => {
            response.json(mediumData)
        })
        .catch(error => {
            response.send(error)
        })
})

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status)
    console.error(err.stack)
    res.send(err.stack)
})

app.listen(8080, () => {
    console.log("The application is running on localhost:8080!")
})
