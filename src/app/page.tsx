import CommentPost from '@/features/posts/CommentPost';

const content = {
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt eleifend lacus, vitae lacinia tortor fermentum sed. Aenean facilisis molestie magna, ut sodales tortor gravida quis.`,
  image:
    'https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
};

export default function Home() {
  return <CommentPost {...content} />;
}
