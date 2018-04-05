function AddSitemapToRedirectsWebpackPlugin() {
  return {
    apply: (compiler) => {
      compiler.hooks.emit.tapAsync('AddSitemapToRedirectsWebpackPlugin', emit);
    },
  };
}

function emit(compilation, callback) {
  const tenant = process.env.SCRIVITO_TENANT;
  const url = process.env.DEPLOY_PRIME_URL;

  if (url && tenant) {
    const redirects = compilation.assets['_redirects'].source().toString();
    const patchedRedirects = redirects.replace(/^\/\* \/.+$/m, rewriteRule(tenant, url));

    compilation.assets['_redirects'] = {
      source: () => patchedRedirects,
      size: () => patchedRedirects.length,
    };
  }

  callback();
}

function rewriteRule(tenant, url) {
  return `/_sitemaphtml /_sitemap.html 200
/sitemap.xml https://api.scrivito.com/tenants/${tenant}/extract_content?src_url=${encodeURIComponent(url)}%2F_sitemaphtml%3F_escaped_fragment_%3D0 302
$&`;
}

module.exports = AddSitemapToRedirectsWebpackPlugin;
