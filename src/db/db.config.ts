/* import mongoose, { ConnectOptions } from "mongoose";


const   connectDb = async() =>{
    try {
        
        await mongoose.connect(process.env.MONGO_URI!,{
            
        });
        console.log('db connected');
        
    } catch (error) {
        console.log(error);
    }
  
  }
    export default connectDb; */

    import { MongoClient, ServerApiVersion } from 'mongodb';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(process.env.MONGO_URI!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

 const connectDb =async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
     client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(error){
    console.log(error)
  }
}

export default connectDb;