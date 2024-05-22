const express = require("express")
const router = express.Router()

const {create,getAll} = require("../controllers/Hospitals")
const {Register,getAvailable,changeAvailable,getNumber} = require("../controllers/Ambulance")
const {sendMail} = require("../controllers/Mail")
const{Signup,Login} = require("../controllers/User")
const{Request,getDriver,Accept} = require("../controllers/Select")

router.post("/create",create)
router.get("/getall",getAll)
router.post("/register",Register)
router.post("/getavailable",getAvailable)
router.post("/getnumber",getNumber)
router.post("/changeavailable",changeAvailable)
router.post("/sendmail",sendMail)
router.post("/signup",Signup)
router.post("/accept",Accept)
router.post("/login",Login)
router.post("/request",Request)
router.post("/getdriver",getDriver)

module.exports = router