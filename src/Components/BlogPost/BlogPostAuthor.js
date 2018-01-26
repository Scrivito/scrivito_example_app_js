import AuthorImage from 'Components/AuthorImage';

function BlogPostAuthor({ author }) {
  if (!author) { return null; }
  if (author.objClass() !== 'Author') { return null; }

  return (
    <section className="bg-white">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-1 col-sm-4 col-xs-4">
            <Scrivito.LinkTag to={ author }>
              <AuthorImage image={ author.get('image') }/>
            </Scrivito.LinkTag>
          </div>
          <div className="col-md-11 col-sm-8 col-xs-8">
            <Scrivito.LinkTag to={ author }>
              <strong className="text-greymiddle">{ author.get('title') }</strong>
            </Scrivito.LinkTag>
            <p>{ author.get('description') }</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scrivito.connect(BlogPostAuthor);
