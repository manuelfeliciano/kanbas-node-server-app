import * as assignmentsDao from "../Assignments/dao.js";

export default function AssignmentRoutes(app) {

    app.post("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const newAssignmentData = { ...req.body, course: courseId };
        const newAssignment = await assignmentsDao.createAssignment(newAssignmentData);
        res.send(newAssignment);
    });

    app.get("/api/assignments/:aid", async (req, res) => {
        const aid = req.params.aid;
        const assignment = await assignmentsDao.findAssignmentById(aid);
        res.json(assignment);
    })


    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.sendStatus(204);
    });


    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        await assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });


    app.get("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignments = await assignmentsDao.findAssignments(courseId);
        res.json(assignments);
    });

}
