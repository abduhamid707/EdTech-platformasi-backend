import express from 'express'
const router = express.Router()

import Student from './Student/student.routes.js'
import Course from './Course/course.routes.js'
import PopularCourse from './Analytics/analytics.routes.js'

// Boshqa route'lar ham shu yerda qo'shilishi mumkin
router.use('/student', Student)
router.use('/course', Course)
router.use('/analytics', PopularCourse)
// Qo'shimcha route'lar shu yerga qo'shilishi mumkin
export default router
