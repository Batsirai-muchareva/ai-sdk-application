import { UIMessage } from "ai";
import { withScrollable } from "@/app/with-scrollable";
import { EmptyState } from "@/app/components/empty-state";
import { ChatMessage } from "@/app/components/chat-message";
import { TypingIndicator } from "@/app/components/typing-indicator";

export const Messages = withScrollable( ( { messages, isLoading }: { messages: UIMessage[]; isLoading: boolean } ) => {
    const isEmpty = messages.length === 0;

    if ( isEmpty ) {
        return <EmptyState />
    }

    return (
        <div className="max-w-3xl mx-auto py-6 px-4 space-y-6">
            { messages.map((msg) => (
                <ChatMessage key={ msg.id } message={ msg } />
            ) ) }

            { isLoading && messages[messages.length - 1]?.role === "user" && (
                <TypingIndicator />
            ) }
        </div>
    )
} );
