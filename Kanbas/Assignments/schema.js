import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,
        points: Number,
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CourseModel",
            required: true
        },
        availableDateMonth: String,
        availableDateDay: Number,
        availableDateYear: Number,
        availableDateTime: String,
        untilDateMonth: String,
        untilDateDay: Number,
        untilDateYear: Number,
        untilDateTime: String,
        dueDateMonth: String,
        dueDateDay: Number,
        dueDateYear: Number,
        dueDateTime: String
    },
    { collection: "assignments" }
);
export default schema;