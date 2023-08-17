const express = require('express')
const authJwt = require('../../middlewares/authJwt')
const interacControllers = require('../../controllers/publicationsControllers/interactions')

const router = express.Router()

router.post('/create',[authJwt.verifyToken , authJwt.isAdmin], interacControllers.create)
router.get('/', interacControllers.getInreract)
router.get('/:id', interacControllers.getInteraById)
router.patch('/update/:id',[authJwt.verifyToken, authJwt.isAdmin],interacControllers.updateInterac)
router.delete('/delete/:id',[authJwt.verifyToken, authJwt.isAdmin],interacControllers.deleteInterac)

module.exports = router