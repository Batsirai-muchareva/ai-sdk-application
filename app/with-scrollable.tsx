import React, { useRef, ComponentType, useEffect } from "react";

export const withScrollable = <T extends object>( Component: ComponentType<T> ) => {
    // eslint-disable-next-line react/display-name
    return ( props: T ) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const messages = (props as { messages: [] })?.messages

        useEffect( () => {
            if (containerRef.current) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }

        }, [ messages ]);

        return (
            <div
                ref={containerRef}
                className="flex-1 overflow-y-auto chat-scrollbar"
            >
                <Component { ...props } />
            </div>
        );
    };
}
