export const IS_CF_PAGES = typeof process === 'undefined';

// This hack is to prevent `node` modules/packages being bundled in the
// Cloudflare Pages context, which causes an error.
export function safeRequireNodeDependency(module: string) {
  return require(module.split('').join(''));
}
