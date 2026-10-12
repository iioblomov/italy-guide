import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Italy Guide">
      <main className="container margin-vert--lg">
        <h1>Аренда Недвижимости в Италии</h1>
        <p>Здесь будем публиковать объявления об арнде жилья удаленно с официальным контрактом, зарегистрированным в налоговой службе (Agenzia delle Entrate).</p>

        <h2>Как добавить объявление</h2>
        <p>
          <Link to="https://t.me/ItalyGuide">
            Напишите нам группу ↗
          </Link>
        </p>

      </main>
    </Layout>
  );
}