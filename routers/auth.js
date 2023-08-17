const express = require('express')
const userControllers = require ('../controllers/auth')
const verifySignup = require ('../middlewares/verifySignup')

const router = express.Router()

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
    });

router.post('/signup',[verifySignup.checkDupletUserNameOrEmail, verifySignup.checkRoleExist],
    userControllers.signup
)

router.post('/signin',userControllers.signin)

module.exports = router

//[verifySignup.checkDupletUserNameOrEmail, verifySignup.checkRoleExist]