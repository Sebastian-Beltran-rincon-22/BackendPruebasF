const express = require('express')
const authJwt = require('../../middlewares/authJwt')
const controllerPublication = require('../../controllers/publicationsControllers/publications')


const router = express.Router()

router.post('/create',[authJwt.verifyToken , authJwt.isAdmin], controllerPublication.create)
router.get('/', controllerPublication.getPublication)
router.get('/:id', controllerPublication.getPublicationById)
router.patch('/update/:id',[authJwt.verifyToken, authJwt.isAdmin],controllerPublication.updatePublication)
router.delete('/delete/:id',[authJwt.verifyToken, authJwt.isAdmin],controllerPublication.deletePublication)

module.exports = router
