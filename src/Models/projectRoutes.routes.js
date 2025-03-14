import express from 'express';
const router = express.Router();
import TestimonialController from './ProjectsController.js';

// Barcha testimonialsni olish
router.get('/', TestimonialController.getAllTestimonials);

// Testimonialni ID bo'yicha olish
router.get('/:id', TestimonialController.getTestimonialById);

// Yangi testimonial qo'shish
router.post('/', TestimonialController.createTestimonial);

// Testimonialni yangilash
router.put('/:id', TestimonialController.updateTestimonial);

// Testimonialni o'chirish
router.delete('/:id', TestimonialController.deleteTestimonial);

export default router;
