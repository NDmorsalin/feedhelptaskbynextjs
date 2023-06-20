import Todo from "@/Model/todoModal/todoModel"
import connectDb from "@/db/db.config"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
    // await connectDb()
    const body = await request.json()
    // console.log(body)

    try {
        const todo = await Todo.insertOne(body)
        // console.log(todo)
        
        return NextResponse.json(body)
    } catch ( error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            
                message: error
           
        })
    }
    
}