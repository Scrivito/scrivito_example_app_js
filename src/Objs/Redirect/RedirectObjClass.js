import * as Scrivito from 'scrivito';

const Redirect = Scrivito.provideObjClass('Redirect', {
  attributes: {
    link: 'link',
    openUi: ['enum', { values: ['yes', 'no'] }],
  },
});

export default Redirect;
