import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import volunteerRoutes from './routes/volunteer.route.js';
import authRoutes from './routes/auth.route.js';
import connectDB from './config/db.js'
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import {env} from "./config/env.js";
import {applySignupDelay} from "./helpers/securityHelper.js";
import storyRoute from "./routes/story.route.js";
import opportunityRoutes from "./routes/opportunity.route.js";
import applicationRoutes from "./routes/application.route.js";
import providerRoutes from "./routes/provider.route.js";
import chatbotRoutes from './routes/chatbot.route.js';
import cors from 'cors';


dotenv.config();


// Connect to database only if not in test mode
// This prevents multiple connection attempts during testing
if (process.env.NODE_ENV !== 'test') {
  await connectDB();
}

const app = express();

app.use(express.json());
app.use(helmet());

// Configure CORS with specific options
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Add your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// Rate Limiting for auth endpoints (very restrictive for security)
const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per IP
  message: 'Too many signup/login attempts from this IP, please try again after 15 minutes',
});

// More lenient rate limiting for general API endpoints
const apiRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 50, // 50 requests per minute
  message: 'Too many requests, please try again later',
});

// Apply rate limiting and custom delay to routes ONLY in non-test environments
if (process.env.NODE_ENV !== 'test') {
  app.use('/api/auth', authRateLimiter, applySignupDelay);
  app.use('/api', apiRateLimiter); // Apply the more lenient limiter to all API routes
} else {
  console.log('Test mode: Rate limiting disabled');
}

// Mount routes
app.use('/api', authRoutes);
app.use('/api', storyRoute);
app.use('/api/opportunities', opportunityRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/provider', providerRoutes);
import providerVolunteerRoutes from "./routes/provider.volunteer.route.js";
app.use('/api/provider', providerVolunteerRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Import and mount admin routes
import adminRoutes from "./routes/admin.route.js";
app.use('/api/admin', adminRoutes);

// Start the server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  const { port } = env;
  app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
  });
}



// Export the app for testing
export default app;