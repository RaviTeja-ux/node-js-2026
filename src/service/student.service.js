import Student from '../models/student.model.js';

//Create Query
export const createStudent = (data) => Student.create(data);

//Find Query
export const getAllStudents = () => Student.find();

//Update Query
export const updateStudent = (id, data) =>
  Student.findByIdAndUpdate(id, data, { new: true });

//Delete Query
export const deleteStudent = (id) =>
  Student.findByIdAndDelete(id);