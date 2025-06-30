"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

export default function MyCustomDialog() {
  const [email, setEmail] = React.useState("Name@domain.com");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl p-6 flex flex-col gap-4 border-border bg-background">
        <DialogHeader className="space-y-1.5 text-left">
          <DialogTitle className="text-lg font-semibold text-foreground">
            Dialog title
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            This is a dialog description.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          <p className="text-base text-foreground">
            On &lt;Oct 27, 2024&gt;, we identified an email address that isn't
            monitored for data leaks. Add Name@domain.com to your monitoring
            list to help protect against identity theft.
          </p>

          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="emailDialogInput"
              className="text-sm font-medium text-muted-foreground"
            >
              Email
            </Label>
            <Input
              id="emailDialogInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="gap-2 sm:justify-end">
          <Button
            variant="outline"
            onClick={() => console.log("Cancel clicked")}
          >
            Cancel
          </Button>
          <Button
            onClick={() =>
              console.log("Save changes clicked", { email })
            }
          >
            Save changes
          </Button>
        </DialogFooter>

        <DialogClose asChild>
          {/* <Button
            variant="ghost"
            size="icon"
            className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button> */}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}