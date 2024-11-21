import * as assignmentsDao from "../Assignments/dao.js";

export default function AssignmentRoutes(app) {

    app.post("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const newAssignmentData = { ...req.body, course: courseId };
        const newAssignment = assignmentsDao.createAssignment(newAssignmentData);
        res.send(newAssignment);
    });


    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.sendStatus(204);
    });


    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });



    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignment = assignmentsDao.findAssignments(courseId);
        res.json(assignment);
    });


}
