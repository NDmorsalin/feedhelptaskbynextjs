
import Todo from "@/Model/todoModal/todoModel";
import connectDb from "@/db/db.config";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    await connectDb()

    try {
        const incompleteTodos = await Todo.find({isCompleted:false}).toArray()
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