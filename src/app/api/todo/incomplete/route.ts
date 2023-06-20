
import Todo from "@/Model/todoModal/todoModel";
import connectDb from "@/db/db.config";
import { NextResponse } from "next/server";
/* const dummyData = [
    {
        id: 1,
        title: 'todo 1',
        isCompleted: false
    },
    {
        id: 2,
        title: 'todo 2',
        isCompleted: false
    },
    {
        id: 3,
        title: 'todo 3',
        isCompleted: false
    },
    {
        id: 4,
        title: 'todo 4',
        isCompleted: false
    },
    {
        id: 5,
        title: 'todo 5',
        isCompleted: false
    },] */
export const GET = async (request: Request) => {
    // await connectDb()

    try {
        const incompleteTodos = await Todo.find().toArray()
        // console.log(incompleteTodos)
        return NextResponse.json( incompleteTodos,{
            status: 200,
           
        })
    } catch (error) {
        console.log(error);
        
    }

   return  NextResponse.json({
        status: 200,
        body: {
            message: 'getting todos'
        }
    })
}