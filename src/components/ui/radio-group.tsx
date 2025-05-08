"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  variant?: "default" | "orange" | "blue"
}

function RadioGroup({
  className,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

export interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  variant?: "default" | "orange" | "blue"
}

function RadioGroupItem({
  className,
  variant = "default",
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        // Default variant styling
        variant === "default" && "border-input text-primary focus-visible:border-ring",
        // Orange variant styling
        variant === "orange" && "border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] focus-visible:border-[var(--color-secondary)]",
        // Blue variant styling
        variant === "blue" && "border-blue-300 text-blue-500 focus-visible:border-blue-400",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        {variant === "default" && (
          <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        )}
        {variant === "orange" && (
          <CircleIcon className="fill-orange-500 absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        )}
        {variant === "blue" && (
          <CircleIcon className="fill-blue-500 absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }