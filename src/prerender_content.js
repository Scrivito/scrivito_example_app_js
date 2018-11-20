function prerenderContent() {
  return new Promise((resolve, _reject) => {
    resolve([]);
  });
}

// Usage: window.prerenderContent().then(results => ...);
window.prerenderContent = prerenderContent;
