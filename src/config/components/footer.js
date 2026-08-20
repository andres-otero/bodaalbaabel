// Configuration for the footer component on all pages
const base = import.meta.env.BASE_URL;

const footerData = {
  links: [
    {
      title: 'Detalles',
      links: [
        { text: 'Cuándo y dónde', href: `/schedule` },
        { text: 'Viaje', href: `/faqs` },
        { text: 'Alojamiento', href: `/travel-and-stay` },
        { text: 'Como llegar', href: `/comollegar` },
        { text: 'Preboda', href: `/preboda` },
        { text: 'Por si te sobra tiempo', href: `/things-to-do` },
      ],
    },
    {
      title: 'Invitación',
      links: [
        { text: 'Confirma tu asistencia', href: `/rsvp` },
      ],
    },
  ],

  secondaryLinks: [],
};

export default footerData;
