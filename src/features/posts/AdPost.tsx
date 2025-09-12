/* eslint-disable @next/next/no-img-element */
import Post from '@/components/common/Post';
import SafePostArea from '@/components/common/SafePostArea';

interface AdPostTitle {
  title: Array<{
    text: string;
    highlight: boolean;
  }>;
}

function AdPostTitle({ title }: AdPostTitle) {
  return (
    <h1 className="text-6xl font-bold flex flex-col items-center">
      {title.map((item) => (
        <>
          {item.highlight ? (
            <span className="text-primary">{item.text}</span>
          ) : (
            <>{item.text}</>
          )}
        </>
      ))}
    </h1>
  );
}

interface AdPostProps {
  title: Array<{
    text: string;
    highlight: boolean;
  }>;
  subhead: string;
  image: string;
}

export default function AdPost({ title, subhead, image }: AdPostProps) {
  return (
    <Post className="bg-gradient-to-br from-card to-background">
      <SafePostArea className="space-y-8 p-8">
        <AdPostTitle title={title} />

        <img
          src={image}
          alt="Banner"
          className="border-4 border-muted rounded-2xl w-10/12 shadow-lg object-cover inset-0"
        />

        <div className="flex flex-col justify-center items-center gap-16">
          <p className="text-3xl font-bold text-center leading-relaxed tracking-wide text-foreground/95">
            {subhead}
          </p>
          <div className="flex flex-col justify-center items-center gap-4 text-2xl text-muted-foreground">
            <p>@thepigeonlab</p>
          </div>
        </div>
      </SafePostArea>
    </Post>
  );
}
