import { data } from "@/data";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json(data);
    } catch {
        return NextResponse.json(
            { error: "Erro ao carregar dados." },
            { status: 500 }
        );
    }
}
