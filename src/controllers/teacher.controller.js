import * as teacherService from '../service/teacher.service.js';
import asyncHandler from '../utils/asyncHandler.js';

export const createTeacher = asyncHandler(async (req, res) => {
  const teacher = await teacherService.createTeacher(req.body);
  res.status(201).json(teacher);
});

export const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await teacherService.getAllTeachers();
  res.json(teachers);
});

export const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await teacherService.updateTeacher(
    req.params.id,
    req.body
  );
  res.json(teacher);
});

export const deleteTeacher = asyncHandler(async (req, res) => {
  await teacherService.deleteTeacher(req.params.id);
  res.json({ message: 'Teacher deleted' });
});