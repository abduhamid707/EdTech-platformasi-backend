import mongoose from 'mongoose';

// Testimonial schema definition
const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number, // Rating is typically a number (e.g., 4.5 or 5)
    required: true,
    min: 1,
    max: 5, // Assuming the rating is out of 5 stars
  },
  image: {
    type: String, // URL or path to the user's image
    required: true,
  },
});

// Create model
export default mongoose.model('Testimonial', testimonialSchema);
