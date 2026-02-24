import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

export function ChatInput( { onSend, disabled }: ChatInputProps ) {
    const [ input, setInput ] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>( null );

    useEffect( () => {
        if ( textareaRef.current ) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = Math.min( textareaRef.current.scrollHeight, 160 ) + "px";
        }
    }, [ input ]);

    const handleSubmit = () => {
        const trimmed = input.trim();

        if ( ! trimmed || disabled ) {
            return;
        }

        onSend( trimmed );
        setInput( "" );
    };

    return (
        <div className="bg-chat-input-bg border border-border rounded-2xl flex items-end gap-2 p-2 shadow-lg">
            <textarea
                ref={ textareaRef }
                value={ input }
                onChange={ ( e ) => setInput( e.target.value ) }
                onKeyDown={(e) => {
                    if ( e.key === "Enter" && !e.shiftKey ) {
                        e.preventDefault();
                        handleSubmit();
                    }
                } }
                placeholder="Send a message…"
                rows={ 1 }
                disabled={ disabled }
                className="flex-1 bg-transparent resize-none outline-none text-sm text-foreground placeholder:text-muted-foreground px-2 py-2 max-h-40"
            />

            <button
                onClick={ handleSubmit }
                disabled={ disabled || !input.trim() }
                className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-30 hover:opacity-90 transition-opacity"
            >
                <ArrowUp className="w-4 h-4" />
            </button>
        </div>
    );
}
