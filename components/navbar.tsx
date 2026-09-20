import { CircleDot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 border-b border-primary-foreground">
            <h1 className="text-3xl text-foreground flex items-center gap-2"><CircleDot className="w-4 h-4 text-yellow-500" />Production Control</h1>
            <div className="flex items-center gap-4">
                <span className="text-base font-medium text-foreground">Plant 01</span>
                <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 px-2 rounded-lg">
                    online
                </Badge>
            </div>
        </div>
    );
}