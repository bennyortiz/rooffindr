"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

interface FormNavigationProps {
  onNext?: () => void;
  onPrev?: () => void;
  onSubmit?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
  submitDisabled?: boolean;
  nextText?: string;
  prevText?: string;
  submitText?: string;
  className?: string;
}

/**
 * Navigation component for multi-step forms
 * 
 * @param onNext - Function to call when next button is clicked
 * @param onPrev - Function to call when previous button is clicked
 * @param onSubmit - Function to call when submit button is clicked
 * @param isFirstStep - Whether this is the first step
 * @param isLastStep - Whether this is the last step
 * @param nextDisabled - Whether the next button should be disabled
 * @param prevDisabled - Whether the previous button should be disabled
 * @param submitDisabled - Whether the submit button should be disabled
 * @param nextText - Text for the next button
 * @param prevText - Text for the previous button
 * @param submitText - Text for the submit button
 * @param className - Additional CSS classes
 */
export function FormNavigation({
  onNext,
  onPrev,
  onSubmit,
  isFirstStep = false,
  isLastStep = false,
  nextDisabled = false,
  prevDisabled = false,
  submitDisabled = false,
  nextText = "Continue",
  prevText = "Back",
  submitText = "Submit",
  className,
}: FormNavigationProps) {
  return (
    <div className={cn("flex justify-between mt-6", className)}>
      {!isFirstStep && onPrev && (
        <Button 
          variant="outline" 
          onClick={onPrev} 
          disabled={prevDisabled}
          className="border-secondary text-secondary"
        >
          {prevText}
        </Button>
      )}
      
      {isFirstStep && <div />}
      
      {!isLastStep && onNext && (
        <Button
          onClick={onNext}
          disabled={nextDisabled}
          className={isFirstStep ? "w-full" : ""}
        >
          {nextText} <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Button>
      )}
      
      {isLastStep && onSubmit && (
        <Button
          type="submit"
          onClick={onSubmit}
          disabled={submitDisabled}
        >
          {submitText}
        </Button>
      )}
    </div>
  );
}
