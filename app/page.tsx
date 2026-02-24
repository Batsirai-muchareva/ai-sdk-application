'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { ChatHeader } from "@/app/components/chat-header";
import { Messages } from "@/app/components/messages";
import { ChatInput } from "@/app/components/chat-input";

export default function Home() {
  const { messages, sendMessage } = useChat();
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSend = async ( text: string ) => {
      setIsLoading( true );

      try {
          await sendMessage( { text } );

      } catch ( error ) {
          console.error( "Error sending message:", error )
      } finally {
          setIsLoading( false )
      }
  }

    return (
      <div className="flex flex-col h-screen bg-background">
          <ChatHeader  />

          <Messages messages={ messages } isLoading={ isLoading }/>

          <div className="flex-shrink-0 px-4 pb-4 pt-2 max-w-3xl mx-auto w-full">
              <ChatInput onSend={handleSend} disabled={isLoading} />
          </div>
      </div>
    );
}
