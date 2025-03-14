import uploadImages from '../utils/uploadImage.js';
import Testimonial from './Projects.js';

class TestimonialController { 
  // Barcha testimonialsni olish
  static async getAllTestimonials(req, res) {
    try {
      const testimonials = await Testimonial.find(); // Barcha testimonialsni olish
      res.json(testimonials);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  // Testimonialni ID bo'yicha olish
  static async getTestimonialById(req, res) {
    try { 
      const testimonial = await Testimonial.findById(req.params.id);
      if (!testimonial) {
        return res.status(404).json({ message: 'Testimonial not found' });
      }
      res.json(testimonial);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  // Yangi testimonial yaratish
  static async createTestimonial(req, res) {
    const { name, position, comment, rating } = req.body;

    // Tekshiruv
    if (!name || !position || !comment || !rating || !req.files?.image) {
      return res.status(400).json({ message: 'All fields are required, including an image' });
    }

    try {
      // Rasmni yuklash va URL olish
      const baseUrl = `${req.protocol}://${req.get('host')}`;
      const imageUrl = await uploadImages(req.files.image, baseUrl);

      const newTestimonial = new Testimonial({
        name,
        position,
        comment,
        rating,
        image: imageUrl, // Yuklangan rasm URL'si
      });

      await newTestimonial.save();
      res.status(201).json({
        message: 'Testimonial created successfully',
        testimonial: newTestimonial,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  // Testimonialni yangilash
  static async updateTestimonial(req, res) {
    try {
      const updateData = { ...req.body };

      // Agar yangi rasm yuklangan bo'lsa
      if (req.files?.image) {
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        const imageUrl = await uploadImages(req.files.image, baseUrl);
        updateData.image = imageUrl;
      }

      const updatedTestimonial = await Testimonial.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      if (!updatedTestimonial) {
        return res.status(404).json({ message: 'Testimonial not found' });
      }

      res.json({
        message: 'Testimonial updated successfully',
        testimonial: updatedTestimonial,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  // Testimonialni o'chirish
  static async deleteTestimonial(req, res) {
    try {
      const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
      if (!deletedTestimonial) {
        return res.status(404).json({ message: 'Testimonial not found' });
      }
      res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
}

export default TestimonialController;
