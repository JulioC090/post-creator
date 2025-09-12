import AdPost from '@/features/posts/AdPost';

export default function Home() {
  return (
    <AdPost
      title={[
        { text: 'Seu négocio precisa', highlight: false },
        { text: 'de um site!', highlight: true },
      ]}
      image="/banner.png"
      subhead="Design moderno e desenvolvimento de alta qualidade para empresas que
            buscam se destacar no digital."
    />
  );
}
