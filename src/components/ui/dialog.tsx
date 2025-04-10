import * as DialogPrimitives from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface DialogProps {
  title: string;
  content: ReactNode;
}

export const Dialog = ({ title, content }: DialogProps) => {
  return (
    <DialogPrimitives.Dialog>
      <DialogPrimitives.DialogTrigger>
      </DialogPrimitives.DialogTrigger>
      <DialogPrimitives.DialogContent className="content">
        <DialogPrimitives.DialogTitle>{title}</DialogPrimitives.DialogTitle>
        <DialogPrimitives.DialogDescription>
        </DialogPrimitives.DialogDescription>
        {content}
        <div className="dialog-buttons">
          <DialogPrimitives.DialogClose asChild>
            <button aria-label="Close" className="button cancel">
              Not so sure
            </button>
          </DialogPrimitives.DialogClose>
          <DialogPrimitives.DialogClose asChild>
            <button aria-label="Close" className="button action">
              X
            </button>
          </DialogPrimitives.DialogClose>
        </div>
        <DialogPrimitives.DialogClose asChild>
        </DialogPrimitives.DialogClose>
      </DialogPrimitives.DialogContent>
    </DialogPrimitives.Dialog>
  );
};
