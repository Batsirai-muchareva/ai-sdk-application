import { streamText, UIMessage, convertToModelMessages, ToolSet } from 'ai';
import { openai } from '@ai-sdk/openai';
import { bankingFewShot, bankingSystemPrompt } from "@/app/api/chat/domains/banking";
import { medicalFewShot, medicalSystemPrompt } from "@/app/api/chat/domains/medical";
import { getAccountByName, getPatientByName, listAccounts, listPatients } from "@/app/api/chat/domains/tools";

export const DOMAIN: "banking" | "medical" = "banking";

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const systemPrompt =
        DOMAIN === "banking"
            ? bankingSystemPrompt
            : medicalSystemPrompt;

    const fewShot =
        DOMAIN === "banking"
            ? bankingFewShot
            : medicalFewShot;

    let tools: ToolSet;

    if (DOMAIN === "banking") {
        tools = {
            getAccountByName,
            listAccounts
        };
    } else {
        tools = {
            getPatientByName,
            listPatients
        };
    }

    const result = streamText({
        model: openai('gpt-4o'),
        system: systemPrompt,
        tools,
        messages: await convertToModelMessages( [
            ...fewShot,
            ...messages
        ] )
    });

    return result.toUIMessageStreamResponse();
}
