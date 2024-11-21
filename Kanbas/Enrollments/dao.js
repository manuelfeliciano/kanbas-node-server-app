import Database from "../Databases/index.js";

export const findEnrollmentsFromUser = (userId) => {
  return Database.enrollments.filter((enrollment) => enrollment.user === userId);
};


export const enrollUserInCourse = (userId, courseId) => {
  const newEnrollment = { _id: Date.now().toString(), course: courseId, user: userId };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
};


export const unenrollUserInCourse = (userId, courseId) => {
  const initialLength = Database.enrollments.length;
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
  return Database.enrollments.length < initialLength;
};
