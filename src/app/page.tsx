import QuotePost from '@/features/posts/QuotePost';

export default function Home() {
  return (
    <QuotePost
      image="https://plus.unsplash.com/premium_photo-1754211765093-55135deabfa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
      quote={[
        {
          align: 'left',
          items: [{ text: 'O sucesso', size: 'lg', variant: 'default' }],
        },
        {
          align: 'center',
          items: [
            { text: 'começa com a', size: 'md', variant: 'default' },
            { text: ' decisão ', size: 'md', variant: 'highlight' },
            { text: 'de', size: 'md', variant: 'default' },
          ],
        },
        {
          align: 'right',
          items: [{ text: 'tentar', size: 'lg', variant: 'default' }],
        },
      ]}
    />
  );
}
