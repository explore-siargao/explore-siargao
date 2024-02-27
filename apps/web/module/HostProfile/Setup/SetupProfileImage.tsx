import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";
import { cn } from "@/common/helpers/cn";
import { LucideUndo2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

const SetupProfileImage = () => {
  const [file, setFile] = useState<(FileWithPath & { preview: string }) | null>(
    null
  );
  const gridContainerClass = (...classes: any) => cn('grid', 'py-5', 'justify-start', ...classes);
  const circleClass = (...classes: any) => cn('w-full', 'my-4', 'flex', 'flex-col', 'items-center', 'relative mb-4', ...classes);
  const innerCircleClass = (...classes: any) => cn('relative', 'h-80', 'w-80 rounded-full', 'overflow-hidden', 'border-4', 'border-white', 'relative', 'mb-4', ...classes);

  const { getRootProps, getInputProps, isFocused } = useDropzone({
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles.length > 0 && acceptedFiles[0]) {
        setFile(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          })
        );
      }
    },
    
    onDropRejected: () => {
      toast.error("Only images and videos are allowed");
    },
  });

  console.log('file: ', file);

  return (
    <div className="rounded-full">
      {file ? (
        <div className={gridContainerClass()}>
          <div className={circleClass()}>
              <div className={innerCircleClass()}>
                <Image
                  src={file?.preview ?? "/assets/1.jpg"}
                  alt={`Profile picture`}
                  width={128}
                  height={128}
                  className="object-cover h-full w-full"
                />
            </div>
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 mb-2">
              <Button
                variant="ghost"
                size="default"
                className={cn(
                  "flex gap-1 bg-gray-100 shadow-xl rounded-full"
                )}
                onClick={() => setFile(null)}
              >
                <LucideUndo2 color="black" size={20} />
                <Typography variant="h4" fontWeight="semibold">
                  {file ? "Undo Image" : "Add"}
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={gridContainerClass()}>
          <div className={circleClass()}>
              <div className="relative h-80 w-80 rounded-full overflow-hidden border-2 bg-gray-100 border-primary-400 border-dashed">
                <label
                  {...getRootProps()}
                  htmlFor="dropzone-file"
                  className={cn(
                    isFocused && "opacity-80",
                    "flex flex-col justify-center h-64 rounded-full"
                  )}
                >
                  <div className="flex flex-col items-center justify-center pt-20 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-primary-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <Typography className="mb-2 text-text-500 d">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </Typography>
                    <Typography className="text-xs text-text-500">
                      PNG, JPG or GIF (MAX. 800x400px)
                    </Typography>
                  </div>
                  <input {...getInputProps()} />
                </label>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default SetupProfileImage;
