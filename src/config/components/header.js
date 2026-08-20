// Configuration for the header component on all pages

const base = import.meta.env.BASE_URL;

const headerData = {
  links: [
    {
      text: 'Inicio',
      href: base,
    },
    {
      text: 'Cuándo y dónde',
      href: `/schedule`,
    },
    {
      text: 'Viaje',
      href: `/faqs`,
    },
    {
      text: 'Alojamiento',
      href: `/travel-and-stay`,
    },
    {
      text: 'Como llegar',
      href: `/comollegar`,
    },
    {
      text: 'Preboda',
      href: `/preboda`,
    },
    {
      text: 'Por si te sobra tiempo',
      href: `/things-to-do`,
    },

    {
      text: 'Confirma tu asistencia',
      href: `/rsvp`,
    },
  ],

  actions: [],
};

export default headerData;