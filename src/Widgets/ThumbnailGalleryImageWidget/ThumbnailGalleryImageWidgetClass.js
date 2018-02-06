import * as Scrivito from 'scrivito';

const ThumbnailGalleryImageWidget = Scrivito.provideWidgetClass('ThumbnailGalleryImageWidget', {
  onlyInside: 'ThumbnailGalleryWidget',
  attributes: {
    image: 'reference',
    title: 'string',
    subtitle: 'string',
    tags: 'stringlist',
  },
});

export default ThumbnailGalleryImageWidget;
