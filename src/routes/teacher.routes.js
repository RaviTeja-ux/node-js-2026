import express from 'express';
import {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher
} from '../controllers/teacher.controller.js';

const router = express.Router();

router.post('/create', createTeacher);
router.get('/list', getTeachers);
router.put('/update/:id', updateTeacher);
router.delete('/delete/:id', deleteTeacher);

export default router;