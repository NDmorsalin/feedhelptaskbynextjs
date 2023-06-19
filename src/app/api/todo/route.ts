import Todo from "@/Model/todoModal/todoModel"
import connectDb from "@/db/db.config"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    await connectDb()

   return  NextResponse.json({
        status: 200,
        body: {
            message: 'getting todos'
        }
    })
}

export const POST = async (request: Request) => {
    await connectDb()
    const body = await request.json()
    console.log(body)

    try {
        const todo = await Todo.create(body)
        await todo.save()
        return NextResponse.json({
            status: 200,
            todo,
            body: {
                message: 'adding todo'
            }
        })
    } catch ( error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            
                message: error
           
        })
    }
    
}