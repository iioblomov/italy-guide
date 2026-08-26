// sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    {
      type: 'category',
      label: '🪪 ВНЖ (Permesso di Soggiorno)',
      items: [
        'residence-permit/education',
        'residence-permit/lavoro-autonomo',
        'residence-permit/digital-nomad',
        'residence-permit/passive-income',
        'residence-permit/family-reunification',
      ],
    },
    {
      type: 'category',
      label: '🏦 Банки и счета',
      items: [
        'banks/open-account',
        'banks/cash-deposit',
      ],
    },
    {
      type: 'category',
      label: '💼 Бизнес и налоги',
      items: [
        'business/open-partita-iva',
        'business/open-srl',
        'business/taxes',
      ],
    },
    {
      type: 'category',
      label: '🏠 Недвижимость',
      items: [
        'realty/rent',
        'realty/buy',
      ],
    },
    {
      type: 'category',
      label: '🚗 Автомобиль и права',
      items: [
        'car/buy-car',
        'car/get-license',
        'car/exchange-license',
      ],
    },
    {
      type: 'category',
      label: '🏥 Медицина',
      items: [
        'health/insurance',
        'health/doctor-appointment',
      ],
    },
  ],
};

export default sidebars;
