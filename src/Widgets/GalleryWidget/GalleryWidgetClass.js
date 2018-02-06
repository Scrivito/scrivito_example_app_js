import * as Scrivito from 'scrivito';

const GalleryWidget = Scrivito.provideWidgetClass('GalleryWidget', {
  attributes: {
    images: 'referencelist',
  },
});

export default GalleryWidget;
