import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlPath: string;
  description?: string;
}

export const HtmlModal = ({ isOpen, onClose, htmlPath, description }: HtmlModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 gap-0 flex flex-col overflow-hidden">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={htmlPath}
            className="w-full h-full border-0"
            title="HTML Content"
          />
        </div>
        <div className="p-6 bg-background border-t shrink-0">
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
            {description || "No description available"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
