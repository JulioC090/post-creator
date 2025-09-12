import { cn } from '@/lib/utils';

interface CommentProps {
  className?: string;
}

export default function Comment({ className }: CommentProps) {
  return (
    <svg
      aria-label="Comentar"
      className={cn(
        'text-foreground flex justify-center items-center',
        className,
      )}
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
}
