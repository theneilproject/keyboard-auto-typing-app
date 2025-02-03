const caretBracesReplacementMap = {
  'id': () => '',
  'port': () => '',
  'message': () => '',
  'branch': () => ''
}

const replaceCaretBracesToString = (str, replacement) => {
  const pattern = /\^{([^}]*)}/;
  if (!pattern.test(str)) return str;
  return str.replace(pattern, replacement);
}

const replaceCaretBracesToStringDynamic = (str) => {

}