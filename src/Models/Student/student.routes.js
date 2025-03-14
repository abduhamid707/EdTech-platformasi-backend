import express from 'express';
import studentController  from './student.controller.js';
import authMiddleware from '../../middleware/auth.mddl.js';

const router = express.Router();

// Barcha bronlarni olish
router.post('/',authMiddleware, studentController.createStudent);
router.get('/', studentController.getStudents);
router.put('/:id',authMiddleware, studentController.updateStudent);
router.delete('/:id',authMiddleware, studentController.deleteStudent);
router.post('/:studentId/enroll/:courseId', studentController.enrollInCourse);

export default router;
