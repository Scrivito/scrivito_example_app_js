import BlogPost from 'Objs/BlogPost/BlogPostObjClass';
import navigateToBlogWithTag from 'utils/navigateToBlogWithTag';
import TagList from 'Components/TagList';

Scrivito.provideComponent('Blog', ({ page, params }) => {
  const tags = [...BlogPost.all().facet('tags')].map(facet => facet.name());
  const currentTag = params.tag;

  return (
    <div>
      <TagList
        tags={ tags }
        showTags={ true }
        setTag={ navigateToBlogWithTag }
        currentTag={ currentTag }
      />
      <Scrivito.ContentTag className="div" content={ page } attribute="body" />
    </div>
  );
});
