import Hero from '@/components/Hero';
import Page from '@/components/Page';

export default function Home() {
  return (
    <>
      <title>GreenDream: Programming and Games</title>
      <Page isHero>
        <Hero />
      </Page>
    </>
  );
}
