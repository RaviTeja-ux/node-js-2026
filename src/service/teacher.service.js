import Teacher from "../models/teacher.model.js";

//Create Query
export const createTeacher = (data) => Teacher.create(data);    

//Find Query
export const getAllTeachers = () => Teacher.find();

//Update Query
export const updateTeacher = (id, data) =>
    Teacher.findByIdAndUpdate(id, data, { new: true });

//Delete Query
export const deleteTeacher = (id) =>
    Teacher.findByIdAndDelete(id);