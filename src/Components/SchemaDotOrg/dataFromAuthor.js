function dataFromAuthor(author) {
  return {
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: author.get('title'),
  };
}

export default dataFromAuthor;
