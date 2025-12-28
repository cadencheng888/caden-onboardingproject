// app/api/project/route.ts
'use server';

import { NextResponse } from "next/server";
import { getProjects, createProject } from "@/services/project";

export async function GET() {
    const projects = await getProjects();
    return NextResponse.json(projects, { status: 200 });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const newProject = await createProject(body);
        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }
}