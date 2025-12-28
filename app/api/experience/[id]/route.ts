// app/api/experience/[id]/route.ts
import { NextResponse } from "next/server";
import { getExperienceById, updateExperience, deleteExperience } from "@/services/experience";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const experience = await getExperienceById(params.id);
    
    if (!experience) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(experience, { status: 200 });
}

