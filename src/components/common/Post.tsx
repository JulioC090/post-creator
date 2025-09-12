import { cn } from '@/lib/utils';

interface PostProps {
  children: React.ReactNode;
  className?: string;
}

export default function Post({ children, className }: PostProps) {
  return (
    <div
      className={cn(
        'w-[1080px] h-[1350px] bg-background flex flex-col items-center justify-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
