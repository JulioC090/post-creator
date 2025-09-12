import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card p-8 rounded-2xl shadow-lg flex flex-col items-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
