import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";
import { UIMessage } from "ai";

export function ChatMessage( { message }: { message: UIMessage }) {
    const isUser = message.role === "user";
    const messages = message.parts;

    console.log( message )
    return (
        <div className={`flex gap-3 animate-message-in ${isUser ? "justify-end" : "justify-start"}`}>
            { ! isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Bot className="w-4 h-4 text-primary" />
                </div>
            ) }

            { isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                    <User className="w-4 h-4 text-primary-foreground" />
                </div>
            ) }


            <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${ 
                    isUser
                        ? "bg-chat-user-bubble text-chat-user-text rounded-br-md"
                        : "bg-chat-ai-bubble text-chat-ai-text rounded-bl-md" 
                }`}
            >

                { messages.map(( part, i ) => {

                    if ( part.type === 'text' ) {
                        if ( isUser ) {
                            return(
                                <p key={ `${message.id}-${i}` } className="text-sm leading-relaxed whitespace-pre-wrap">
                                    { part.text }
                                </p>
                            )
                        }

                        if ( !isUser ) {
                            return (
                                <div key={ `${message.id}-${i}` } className="prose prose-sm max-w-none dark:prose-invert prose-p:leading-relaxed prose-p:my-1 prose-headings:my-2 prose-pre:bg-secondary prose-pre:rounded-lg prose-code:font-mono prose-code:text-xs">
                                    <ReactMarkdown>{ part.text }</ReactMarkdown>
                                </div>
                            )
                        }
                    }

                    // if ( ['tool-listPatients', 'tool-listAccounts'].includes( part.type )) {
                        return (
                            <pre
                                key={`${message.id}-${i}`}
                                className="text-xs bg-secondary rounded-lg p-3 overflow-auto"
                            >
                                {JSON.stringify((part as { output: string}).output, null, 2)}
                            </pre>
                        );
                    // }
                } ) }
            </div>
        </div>
    );
}
