import * as Scrivito from 'scrivito';
import blogPostObjIcon from '../../assets/images/blog_post_obj.svg';
import SectionWidget from '../../Widgets/SectionWidget/SectionWidgetClass';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('BlogPost', {
  title: 'Blog Post',
  thumbnail: `/${blogPostObjIcon}`,
  attributes: {
    ...metaDataEditingConfigAttributes,
    author: {
      title: 'Author',
    },
    publishedAt: {
      title: 'Published at',
      description: 'When will this blog post be published?',
    },
    titleImage: {
      title: 'Header image',
      description: 'The background image of the header.' +
        ' If no image is selected, the header image of the blog is shown.',
    },
    tags: {
      title: 'Tags',
    },
  },
  properties: [
    'author',
    'publishedAt',
    'titleImage',
    'tags',
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    body: [new SectionWidget({})],
    publishedAt: () => new Date(),
  },
});
