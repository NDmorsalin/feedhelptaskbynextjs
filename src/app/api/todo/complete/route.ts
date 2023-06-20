import Todo from "@/Model/todoModal/todoModel"
import connectDb from "@/db/db.config"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    // await connectDb()

    try {
        const completeTodos = await Todo.find({isCompleted:true}).toArray()
        return NextResponse.json(completeTodos,{
            status: 200,           
        })
    } catch (error) {
        
    }

   return  NextResponse.json({
        status: 200,
        body: {
            message: 'getting todos'
        }
    })
}