// app/api/project/[id]/route.ts
'use server';

import { NextResponse } from "next/server";
import { getProject, updateProject, deleteProject } from "@/services/project";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const project = await getProject(params.id);
    
    if (!project) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project, { status: 200 });
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const updated = await updateProject(params.id, body);
    
    if (!updated) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(updated, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const deleted = await deleteProject(params.id);

    if (!deleted) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
}