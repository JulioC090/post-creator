/* eslint-disable @next/next/no-img-element */
import Author from '@/components/common/Author';
import Card from '@/components/common/Card';
import InstagramActions from '@/components/common/InstagramActions';
import Post from '@/components/common/Post';
import SafePostArea from '@/components/common/SafePostArea';

interface CommentPostProps {
  text: string;
  image: string;
}

export default function CommentPost({ text, image }: CommentPostProps) {
  return (
    <Post>
      <SafePostArea>
        <Card className="w-8/12 min-h-3/12 max-h-10/12 flex items-start gap-8 p-16">
          <Author />
          <div className="text-2xl leading-relaxed w-full flex flex-col gap-8 flex-1 overflow-hidden">
            <p className="whitespace-break-spaces">{text}</p>
            <img src={image} className="rounded-2xl" alt="Post Image" />
          </div>
          <InstagramActions />
        </Card>
      </SafePostArea>
    </Post>
  );
}
