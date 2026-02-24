import { Bot } from "lucide-react";

export function TypingIndicator() {
    return (
        <div className="flex gap-3 animate-message-in">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-chat-ai-bubble rounded-2xl rounded-bl-md px-4 py-4 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-muted-foreground typing-dot" />
                <span className="w-2 h-2 rounded-full bg-muted-foreground typing-dot" />
                <span className="w-2 h-2 rounded-full bg-muted-foreground typing-dot" />
            </div>
        </div>
    );
}
