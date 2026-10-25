import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import sidebars from '../../sidebar';

const docTitles = {
  'residence-permit/digital-nomad': 'ВНЖ цифрового кочевника (Nomadi Digitali)',
  'residence-permit/lavoro-autonomo': 'ВНЖ фрилансера (Lavoro Autonomo)',
  'residence-permit/passive-income': 'ВНЖ по пассивному доходу',
  'residence-permit/education': 'ВНЖ по учебе в Италии',
  'residence-permit/family-reunification': 'Воссоединение семьи при переезде в Италию',
  'residence-permit/nulla-osta': 'Получение Nulla Osta в Квестуре Италии',
  'residence-permit/translation-apostile': 'Переводы и апостиль документов',
  'upon-arrival/roadmap': 'План действий по прибытии в Италию',
  'upon-arrival/presenza': 'Уведомление о приезде в Италию: Dichiarazione di Presenza',
  'upon-arrival/ospitalita': 'Декларация гостеприимства (Comunicazione di ospitalità)',
  'upon-arrival/ricevuta': 'Отправка КИТ для ВНЖ и получение Ричевуты',
  'upon-arrival/residenza': 'Регистрация по месту жительства (прописка) в Италии',
  'upon-arrival/cie': 'Оформление личной ID карты (CIE)',
  'upon-arrival/fingerprint': 'Сдача отпечатков пальцев на ВНЖ',
  'upon-arrival/shopping': 'Покупки в Италии',
  'banks/open-account': 'Открытие банковского счета в Италии',
  'banks/cash-deposit': 'Внесение наличных',
  'business/codice-fiscale': 'Как получить Codice Fiscale (ИНН Италии)',
  'business/partita-iva': 'Открытие и ведение Partita IVA (ИП) в Италии',
  'business/open-srl': 'Открытие SRL',
  'business/taxes': 'Налоги',
  'business/forfettario': 'Режим Forfettario',
  'realty/rent': 'Аренда недвижимости',
  'realty/buy': 'Покупка недвижимости',
  'realty/utilities': 'Регистрация и уплата налога на вывоз мусора (TARI)',
  'car/buy-car': 'Покупка автомобиля',
  'car/get-license': 'Получение водительских прав',
  'car/exchange-license': 'Обмен водительских прав',
  'health/insurance': 'Медицинская страховка',
  'health/doctor-appointment': 'Запись к врачу',
};

function getDocTitle(docId) {
  return (
    docTitles[docId] ??
    docId.split('/').at(-1).replaceAll('-', ' ')
  );
}

export default function Home() {
  return (
    <Layout title="Italy Guide">
      <main className="container margin-vert--lg">
        <h1>Гайд по переезду в Италию</h1>
        <p>Мы создали этот гайд, чтобы сделать переезд в Италию проще, а по приезду - справиться с итльянской бюрократией.</p>

        <div className="contact-callout">
          <b>💡 Нашли неточность или хотите добавить информацию?</b>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="https://t.me/ItalyGuide">
              Напишите в нашу группу ↗
            </Link>
          </p>          
        </div>

        {sidebars.guideSidebar.map((category) => (
          <section key={category.label}>
            <h2>{category.label}</h2>
            <ul>
              {category.items.map((docId) => (
                <li key={docId}>
                  <Link to={`/guide/${docId}`}>{getDocTitle(docId)}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </Layout>
  );
}