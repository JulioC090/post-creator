/* eslint-disable @next/next/no-img-element */
import InstagramActions from '@/components/common/InstagramActions';
import Post from '@/components/common/Post';
import SafePostArea from '@/components/common/SafePostArea';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface QuoteItem {
  text: string;
  variant?: 'default' | 'highlight';
  size?: 'md' | 'lg';
  jump?: boolean;
  align?: 'left' | 'center' | 'right';
}

const variants = {
  default: 'text-foreground',
  highlight: 'text-primary',
};

const sizes = {
  md: 'text-6xl font-semibold',
  lg: 'text-8xl font-black',
};

const alignments = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

function QuoteText({ item }: { item: QuoteItem }) {
  return (
    <span
      className={cn(
        'leading-tight',
        variants[item.variant ?? 'default'],
        sizes[item.size ?? 'md'],
      )}
    >
      {item.text}
    </span>
  );
}

interface QuotePostProps {
  image?: string;
  quote: Array<{
    align: 'left' | 'center' | 'right';
    items: Array<QuoteItem>;
  }>;
}

export default function QuotePost({ image, quote }: QuotePostProps) {
  return (
    <Post className="relative overflow-hidden">
      {image && (
        <div className="absolute w-full h-full">
          <img
            src={image}
            alt="Post Background Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/95" />
        </div>
      )}

      <SafePostArea className="relative">
        <div className="flex flex-col space-y-2">
          {quote.map((line, i) => (
            <div
              key={`quote-line-${i}`}
              className={cn('space-x-2 w-full', alignments[line.align])}
            >
              {line.items.map((item, j) => (
                <QuoteText item={item} key={`quote-item-${i}-${j}`} />
              ))}
            </div>
          ))}
        </div>

        <div className="absolute top-16 left-24 flex flex-row items-center gap-16">
          <Quote className="size-16 rotate-180" />
          <div className="w-48 h-px bg-foreground"></div>
        </div>
        <div className="absolute bottom-16 left-24 h-16 flex flex-row items-center">
          <InstagramActions />
        </div>
        <div className="absolute bottom-16 right-24 flex flex-row items-center gap-16">
          <div className="w-48 h-px bg-foreground"></div>
          <Quote className="size-16" />
        </div>
      </SafePostArea>
    </Post>
  );
}
