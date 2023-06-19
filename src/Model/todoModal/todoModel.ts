import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

const Todo =model('Todo', todoSchema);

export default Todo;