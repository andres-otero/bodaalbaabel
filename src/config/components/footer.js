// Configuration for the footer component on all pages
const base = import.meta.env.BASE_URL;

const footerData = {
  links: [
    {
      title: 'Detalles',
      links: [
        { text: 'Cuándo y dónde', href: `/cuandoydonde` },
        { text: 'Viaje', href: `/viaje` },
        { text: 'Alojamiento', href: `/alojamiento` },
        { text: 'Como llegar', href: `/comollegar` },
        { text: 'Preboda', href: `/preboda` },
        { text: 'Por si te sobra tiempo', href: `/porsitesobratiempo` },
      ],
    },
    {
      title: 'Invitación',
      links: [
        { text: 'Confirma tu asistencia', href: `/confirmaasistencia` },
      ],
    },
  ],

  secondaryLinks: [],
};

export default footerData;
