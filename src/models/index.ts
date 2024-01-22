import {model,Schema} from "mongoose";

const sectionSchema=new Schema(
    {
        imgUrl: { type:String, required:true },
        title: { type:String, required:true },
        content: { type:String },
        category:{ type:String, required:true }
    },
    { timestamps:true }
)

export const SectionModel=model('sectionData',sectionSchema);
