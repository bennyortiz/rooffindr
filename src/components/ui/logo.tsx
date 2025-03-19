import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconClass?: string;
  textClass?: string;
  href?: string;
  variant?: 'default' | 'footer';
}

export function Logo({
  className,
  iconClass,
  textClass,
  href = '/',
  variant = 'default',
}: LogoProps) {
  const baseTextClass = cn(
    'font-bold',
    variant === 'default' ? 'text-primary text-xl sm:text-2xl' : 'text-lg',
    textClass
  );

  const baseIconClass = cn('inline-block mr-1', iconClass);

  return (
    <Link href={href} className={cn('flex items-center gap-1', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className={baseIconClass}
        aria-hidden="true"
      >
        <path
          d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          fill="#E67E22"
          stroke="#E67E22"
          strokeWidth="1.5"
        />
        <path d="M9 22v-10h6v10" fill="#E67E22" stroke="#E67E22" strokeWidth="1.5" />
      </svg>
      <span className={baseTextClass}>RoofFindr</span>
    </Link>
  );
} 