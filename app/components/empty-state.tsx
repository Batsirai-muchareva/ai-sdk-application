import { Sparkles } from "lucide-react";

export const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-foreground">What can I help with?</h1>
                <p className="text-muted-foreground text-sm max-w-md">
                    Ask me anything — from coding questions to creative writing, analysis, and beyond.
                </p>
            </div>
        </div>
    );
}
