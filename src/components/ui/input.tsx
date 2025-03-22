import * as React from "react";

import { cn } from "@/src/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="space-y-1 my-1">
        {props.title && <label htmlFor={props.title} className="text-sm font font-medium capitalize">{props.title}</label>}
        <input
          type={type}
          className={cn(
            "w-full h-9 z-50 flex items-center rounded-md bg-offwhite pl-3 outline outline-1 -outline-offset-1 outline-hairline_dark focus:outline-theme",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

