const Util = {};

function attachScriptSrc(src) {
  if (process.browser) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.body.appendChild(script);
  }
}

Util.attachScript = attachScriptSrc;

export default Util;

export function attachScript(src) {
  return attachScriptSrc(src);
}
