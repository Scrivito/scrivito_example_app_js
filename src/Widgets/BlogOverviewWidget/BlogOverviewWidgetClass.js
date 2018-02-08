import * as Scrivito from 'scrivito';

const BlogOverviewWidget = Scrivito.provideWidgetClass('BlogOverviewWidget', {
  attributes: {
    maxItems: 'integer',
    author: 'reference',
    tags: 'stringlist',
  },
});

export default BlogOverviewWidget;
