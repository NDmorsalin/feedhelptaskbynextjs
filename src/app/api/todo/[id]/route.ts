import Todo from "@/Model/todoModal/todoModel"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"
interface Context {
    params: any; // Replace `any` with the appropriate type for `params`
  }
export const PUT = async (request: Request,  context: Context) => {
    // await connectDb()
    // console.log(context.params.id)
    const body = await request.json()
    // console.log(body)
    const id = context.params.id
    const query = { _id: new ObjectId(id) }

    try {
        const todo = await Todo.updateOne(query, {$set:{
            isCompleted: body.isCompleted
        }})
        console.log(todo)
        
        return NextResponse.json({
            message:'put request'
        },{
            status: 200,
        })
    } catch ( error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            
                message: error
           
        })
    }
    
}
  

export const DELETE = async (request: Request,  context: Context) => {
    // await connectDb()
    console.log(context)
    const body = await request.json()
    // console.log(body)

    try {
        
        
        return NextResponse.json({
            message:'delete request'
        },{
            status: 200,
        })
    } catch ( error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            
                message: error
           
        })
    }
    
}