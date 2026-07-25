// Configuration for the footer component on all pages
const base = import.meta.env.BASE_URL;

const footerData = {
  links: [
    {
      title: 'Detalles',
      links: [
        { text: 'Cuándo y dónde', href: `${base}/schedule` },
        { text: 'Por si te sobra tiempo', href: `${base}/things-to-do` },
        { text: 'Alojamiento', href: `${base}/travel-and-stay` },
        { text: 'Dudas y sugerencias', href: `${base}/faqs` },
      ],
    },
    {
      title: 'Invitación',
      links: [
        { text: 'Confirma tu asistencia', href: `${base}/rsvp` },
      ],
    },
    {
      title: 'Enlaces',
      links: [
        { text: 'Regalo', href: `${base}/gifts` },
      ],
    },
  ],

  secondaryLinks: [],
};

export default footerData;
