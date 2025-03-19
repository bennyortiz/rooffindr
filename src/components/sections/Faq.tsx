"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/containers/Section";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  description?: string;
  items: FaqItem[];
  className?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
}

/**
 * FAQ section component
 * 
 * @param title - Section title
 * @param description - Section description
 * @param items - Array of FAQ items
 * @param className - Additional CSS classes
 * @param bgColor - Background color class
 * @param textColor - Text color class
 * @param accentColor - Accent color for active items
 */
export function Faq({
  title,
  description,
  items,
  className,
  bgColor = "bg-white",
  textColor,
  accentColor = "text-primary",
}: FaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section
      bgColor={bgColor}
      textColor={textColor}
      className={className}
    >
      <SectionHeader
        title={title}
        description={description}
      />

      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onClick={() => toggleItem(index)}
            accentColor={accentColor}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
  accentColor?: string;
  isLast?: boolean;
}

/**
 * Individual FAQ item component
 */
function FaqItem({
  question,
  answer,
  isActive,
  onClick,
  accentColor = "text-primary",
  isLast = false,
}: FaqItemProps) {
  return (
    <div className={cn(
      "border-b last:border-b-0 transition-colors",
      isLast ? "border-transparent" : "border-muted"
    )}>
      <button
        className={cn(
          "flex justify-between items-center w-full py-5 px-2 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg",
          isActive && accentColor
        )}
        onClick={onClick}
        aria-expanded={isActive}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isActive ? (
            <MinusIcon className={cn("h-5 w-5", accentColor)} />
          ) : (
            <PlusIcon className="h-5 w-5 text-muted-foreground" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isActive ? "max-h-96 opacity-100 pb-5 px-2" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}
