import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlPath: string;
}

export const HtmlModal = ({ isOpen, onClose, htmlPath }: HtmlModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 gap-0">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <X className="h-4 w-4" />
        </Button>
        <iframe
          src={htmlPath}
          className="w-full h-full border-0 rounded-lg"
          title="HTML Content"
        />
      </DialogContent>
    </Dialog>
  );
};
