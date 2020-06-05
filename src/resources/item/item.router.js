import { Router } from 'express'
const mockController = (res, req) => {
  res.send({ hi: 'wassup' })
}
const router = Router()
router
  .route('/')
  .get(mockController)
  .post(mockController)
router
  .route('/:id')
  .get(mockController)
  .put(mockController)
  .delete(mockController)
export default router
