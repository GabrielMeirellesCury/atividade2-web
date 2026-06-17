import express from 'express'
import potionController from '../controllers/potion.controller.js'


const router = express.Router() 

router.get("/pocoes", potionController.findAll)
router.post("/pocoes", potionController.create)
router.delete("/pocoes/:id", potionController.deleteById)

export default router