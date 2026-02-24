import { Plus, Sparkles } from "lucide-react";
import { DOMAIN } from "@/app/api/chat/route";

export const ChatHeader = () => {
  return (
      <header className="flex items-center justify-between px-4 md:px-6 h-14 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground tracking-tight">
                  { capitalizeFirstLetter( DOMAIN ) } AI
              </span>
          </div>
          <button
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary"
          >
              <Plus className="w-4 h-4" />
              New chat
          </button>
      </header>
  );
}

function capitalizeFirstLetter(value: string): string {
    if ( ! value ) {
        return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
}
