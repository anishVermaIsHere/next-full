import { SectionModel } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import { dbConnection } from "@/config/db";

dbConnection();

export const GET=async(req:NextRequest)=>{
    try {
        const data= await SectionModel.find();
        return NextResponse.json(data);
    } catch (error:any) {
        NextResponse.json({error:error.message},{status:500});
    }
}