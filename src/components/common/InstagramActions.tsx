import Comment from '@/components/icons/Comment';
import Like from '@/components/icons/Like';
import Save from '@/components/icons/Save';
import Share from '@/components/icons/Share';

export default function InstagramActions() {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Like className="size-8 text-[#ff3040]" />
      <Comment className="size-8" />
      <Share className="size-8" />
      <Save className="size-8" />
    </div>
  );
}
