import mongoose from "mongoose";

export const dbConnection=  () => {
  try {
   mongoose.connect(process.env.DB_URI!); 
    const connection=mongoose.connection;
    connection.on('connected',()=>{
        console.log("***** DATABASE connected... *****");
    });
    connection.on('error',(error:any)=>{
        console.log("***** DATABASE connection error... *****",  error);
        process.exit();
    });
  } catch (error:any) {
    console.log("***** DATABASE error occured... *****",  error);
  }
};
