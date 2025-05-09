"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  variant?: "default" | "orange" | "blue"
}

function Checkbox({
  className,
  variant = "default",
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 focus-visible:border-[var(--color-secondary)] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        // Default variant styling
        variant === "default" && "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary",
        // Orange variant styling
        variant === "orange" && "border-2 border-[var(--color-secondary)] data-[state=checked]:bg-[var(--color-secondary)] data-[state=checked]:text-white dark:data-[state=checked]:bg-[var(--color-secondary)] data-[state=checked]:border-[var(--color-secondary)]",
        // Blue variant styling
        variant === "blue" && "data-[state=checked]:bg-blue-500 data-[state=checked]:text-white dark:data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }