import { NextResponse } from "next/server";
import { getExperiences, createExperience } from "@/services/experience"; 

export async function GET() {
    const experiences = await getExperiences(); 
    return NextResponse.json(experiences, { status: 200 });
}

export async function POST(request: Request) {
    const body = await request.json();
    const newExperience = await createExperience(body);
    return NextResponse.json(newExperience, { status: 201 });
}