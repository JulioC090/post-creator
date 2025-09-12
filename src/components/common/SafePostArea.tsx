import { cn } from '@/lib/utils';

interface SafePostAreaProps {
  children: React.ReactNode;
  className?: string;
}

export default function SafePostArea({
  children,
  className,
}: SafePostAreaProps) {
  return (
    <div
      className={cn(
        'w-[1080] h-[1080] flex flex-col items-center justify-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
