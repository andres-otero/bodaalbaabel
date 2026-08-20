// Configuration for the footer component on all pages
const base = import.meta.env.BASE_URL;

const footerData = {
  links: [
    {
      title: 'Detalles',
      links: [
        { text: 'Cuándo y dónde', href: `/schedule` },
        { text: 'Por si te sobra tiempo', href: `/things-to-do` },
        { text: 'Alojamiento', href: `/travel-and-stay` },
        { text: 'Viaje', href: `/faqs` },
        { text: 'Como llegar', href: `/comollegar` },
      ],
    },
    {
      title: 'Invitación',
      links: [
        { text: 'Confirma tu asistencia', href: `/rsvp` },
      ],
    },
    {
      title: 'Enlaces',
      links: [
        { text: 'Regalo', href: `/gifts` },
      ],
    },
  ],

  secondaryLinks: [],
};

export default footerData;
