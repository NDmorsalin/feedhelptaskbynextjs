/* import { Schema, Document, model, Model } from 'mongoose';

interface ITodo extends Document {
  title: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema: Schema<ITodo> = new Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

let Todo: Model<ITodo>;

try {
  Todo = model<ITodo>('todo');
} catch (error) {
  Todo = model<ITodo>('todo', todoSchema);
}

export default Todo;
 */

import { client } from "@/db/db.config";

const database = client.db("feedhelp");
const Todo = database.collection('todos')

export default Todo