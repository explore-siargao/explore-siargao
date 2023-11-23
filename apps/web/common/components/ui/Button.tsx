import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva("rounded-md font-semibold text-white shadow-sm", {
  variants: {
    variant: {
      default:
        "bg-gradient-to-r from-rose-600 from-10% via-rose-700/90 via-40% to-rose-600 to-80% hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
      outline:
        "gap-3 border-black border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] hover:bg-slate-200/30 text-black",
      subtle:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
      ghost:
        "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
      link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
      rounded: "hover:bg-gray-200/30 rounded-full",
    },
    animation: {
      default: "",
      easeInOut: "transition ease-in-out active:scale-95 duration-20",
    },
    size: {
      default: "w-full px-3.5 py-2.5 text-sm",
      sm: "px-3 py-2 text-sm",
      md: "px-3 py-4 text-sm",
      lg: "px-4 py-4 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    animation: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
