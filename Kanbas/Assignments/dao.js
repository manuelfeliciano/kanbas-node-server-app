import model from "./model.js";

export async function findAssignments(courseId) {
    return model.find({ course: courseId });
}

export async function findAssignmentById(aid) {
    return model.findById(aid);
}

export async function createAssignment(assignment) {
    delete assignment._id;
    return model.create(assignment);
}

export async function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne(
        { _id: assignmentId },
        { $set: assignmentUpdates }
    );
}