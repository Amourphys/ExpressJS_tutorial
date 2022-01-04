import Router from 'express'  // импорт роутера
import PostController from "./PostController.js";

const router = new Router()  // инициализация роутера

router.post('/posts', PostController.create)         // POST
router.get('/posts', PostController.getAll)               // GET
router.get('/posts/:id', PostController.getOne)           // GET id
router.put('/posts', PostController.update)          // PUT
router.delete('/posts/:id', PostController.delete)   // DELETE

export default router;