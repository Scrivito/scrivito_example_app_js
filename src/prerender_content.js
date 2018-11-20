function prerenderContent() {
  return new Promise(resolve => {
    resolve([]);
  });
}

// Usage: window.prerenderContent().then(results => ...);
window.prerenderContent = prerenderContent;
