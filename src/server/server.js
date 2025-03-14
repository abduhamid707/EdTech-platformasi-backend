import '../utils/db.js'
import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import indexRouter from '../Models/index.routes.js'
import errorMiddleware from '../middleware/errorHandler.js'
import authRoutes from '../Models/Auth/auth.routes.js'

const app = express()

app.use(cors('*'))
app.use(express.json())
app.use(express.static('src/public'))
app.use(
  fileUpload({
    limits: {
      fileSize: 50 * 1024 * 1024,
    },
  })
)
app.use('/api', indexRouter)
app.use('/api/auth', authRoutes);

// 🔹 Xatolarni ushlash uchun middleware qo'shildi
app.use(errorMiddleware);
app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
