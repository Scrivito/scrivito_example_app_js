import * as Scrivito from 'scrivito';
import BlogPostPreviewList from 'Components/BlogPost/BlogPostPreviewList';

function BlogPostMorePosts({ author }) {
  if (!author) { return null; }
  if (author.objClass() !== 'Author') { return null; }

  return (
    <section className="bg-white">
      <div className="container gutter0">
        <h1 className="h2 border-bottom">More great blog posts from { author.get('title') }</h1>
        <BlogPostPreviewList author={ author } />
      </div>
    </section>
  );
}

export default Scrivito.connect(BlogPostMorePosts);
