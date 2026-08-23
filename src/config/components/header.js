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
      href: `/cuandoydonde`,
    },
    {
      text: 'Viaje',
      href: `/viaje`,
    },
    {
      text: 'Alojamiento',
      href: `/alojamiento`,
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
      href: `/porsitesobratiempo`,
    },

    {
      text: 'Confirma tu asistencia',
      href: `/confirmaasistencia`,
    },
  ],

  actions: [],
};

export default headerData;