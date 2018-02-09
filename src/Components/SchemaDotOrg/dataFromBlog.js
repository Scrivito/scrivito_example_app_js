function dataFromBlog(blog) {
  return {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    headline: blog.get('title'),
  };
}

export default dataFromBlog;
