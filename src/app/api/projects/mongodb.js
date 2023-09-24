import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Dev--->Connected to MongoDB.');
  } catch (error) {
    console.log('Dev--->', error);
  }
};

export default connectMongoDB;
