import express from 'express';
import studentRoutes from './routes/student.routes.js';
import teacherRoutes from './routes/teacher.routes.js';
import connectDB from './config/config.js';

const app = express();

// Connect DB
await connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);

// Start server (LAST)
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;