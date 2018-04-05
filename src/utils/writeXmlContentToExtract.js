function writeXmlContentToExtract(content) {
  const metaTag = document.getElementsByName('scrivito-content-to-extract')[0];
  metaTag.setAttribute('content', `data:text/xml;base64,${btoa(content)}`);
}

export default writeXmlContentToExtract;
