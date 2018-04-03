function writeXmlContentToExtract(content) {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'scrivito-content-to-extract');
  meta.setAttribute('content', `data:text/xml;base64,${btoa(content)}`);

  document.head.appendChild(meta);
}

export default writeXmlContentToExtract;
