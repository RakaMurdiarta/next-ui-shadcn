"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Data } from "@/components/ui/twmerge";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useState } from "react";

export default function AlertDialogDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleAction = () => {
    setIsLoading(true);

    // Simulasi jeda waktu selama 2 detik
    setTimeout(() => {
      // Lakukan tindakan setelah jeda waktu selesai
      setIsLoading(false);
      setIsDialogOpen(false);

      // Lakukan tindakan lain yang Anda inginkan setelah proses selesai
    }, 2000);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        console.log("first");
      }, 2000);
    }
    console.log("Dialog is now:", open ? "open" : "closed");
    // Lakukan tindakan lain sesuai dengan kebutuhan Anda
  };
  return (
    // <AlertDialog
    //   open={isDialogOpen}
    //   onOpenChange={(open) => handleOpenChange(open)}
    // >
    //   <AlertDialogTrigger asChild data-state="open">
    //     <Button
    //       variant="outline"
    //       onClick={() => {
    //         setIsDialogOpen((prev) => !prev);
    //       }}
    //     >
    //       Show Dialog
    //     </Button>
    //   </AlertDialogTrigger>
    //   <AlertDialogPortal>
    //     <AlertDialogContent>
    //       <AlertDialogHeader>
    //         <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    //         <AlertDialogDescription>
    //           This action cannot be undone. This will permanently delete your
    //           account and remove your data from our servers.
    //         </AlertDialogDescription>
    //       </AlertDialogHeader>
    //       <AlertDialogFooter>
    //         <AlertDialogCancel asChild className="bg-red-300">
    //           <button>Cancel</button>
    //         </AlertDialogCancel>
    //         <AlertDialogAction
    //           disabled={isLoading}
    //           onClick={() => {
    //             handleAction();
    //           }}
    //         >
    //           {isLoading ? "Loading..." : "Submit"}
    //         </AlertDialogAction>
    //         <AlertDialogAction asChild>

    //         </AlertDialogAction>
    //       </AlertDialogFooter>
    //     </AlertDialogContent>
    //   </AlertDialogPortal>
    // </AlertDialog>
    <button
      onClick={() => {
        console.log(clsx(["bg-rose-300"]));
      }}
    >
      test button
    </button>
  );
}
