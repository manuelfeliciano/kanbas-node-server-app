import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentRoutes(app) {



    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params;
        const userEnrollments = enrollmentsDao.findCoursesForUser(userId);
        res.json(userEnrollments);
    });



    app.post("/api/enrollments", (req, res) => {
        const { user, course } = req.body;
        const newEnrollment = enrollmentsDao.enrollUserInCourse(user, course);
        res.send(newEnrollment);

    });


    app.delete("/api/enrollments", (req, res) => {
        const { user, course } = req.body;

        console.log(user);
        console.log(course);

        const success = enrollmentsDao.unenrollUserFromCourse(user, course);
        if (success) {
            console.log("Success");
            res.sendStatus(204);
        } else {
            res.status(400).json({ error: "Enrollment not found." });
        }
    });
}
