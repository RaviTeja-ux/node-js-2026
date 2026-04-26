import * as studentService from '../service/student.service.js';
import asyncHandler from '../utils/asyncHandler.js';

export const createStudent = asyncHandler(async (req, res) => {
  const student = await studentService.createStudent(req.body);
  res.status(201).json(student);
});

export const getStudents = asyncHandler(async (req, res) => {
  const students = await studentService.getAllStudents();
  res.json(students);
});

export const updateStudent = asyncHandler(async (req, res) => {
  const student = await studentService.updateStudent(
    req.params.id,
    req.body
  );
  res.json(student);
});

export const deleteStudent = asyncHandler(async (req, res) => {
  await studentService.deleteStudent(req.params.id);
  res.json({ message: 'Student deleted' });
});