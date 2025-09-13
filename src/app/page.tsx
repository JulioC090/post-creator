import AdPost from '@/features/posts/AdPost';
import Capture from '@/features/screenshot/Capture';

export default function Home() {
  return (
    <Capture>
      <AdPost
        title={[
          { text: 'Seu négocio precisa', highlight: false },
          { text: 'de um site!', highlight: true },
        ]}
        image="/banner.png"
        subhead="Design moderno e desenvolvimento de alta qualidade para empresas que
            buscam se destacar no digital."
      />
    </Capture>
  );
}
