export default [
  {
    name: 'newlines/after_paren/input.sass',
    data: '@use "sass:list"\na \n  b: list.append(\n    c d, e)\n',
  },
  {
    name: 'newlines/after_paren/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'newlines/after_value/input.sass',
    data: '@use "sass:list"\na \n  b: list.append(c\n     d, e)\n',
  },
  {
    name: 'newlines/after_value/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'newlines/before_comma/input.sass',
    data: '@use "sass:list"\na \n  b: list.append(c d\n     , e)\n',
  },
  {
    name: 'newlines/before_comma/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'newlines/after_comma/input.sass',
    data: '@use "sass:list"\na \n  b: list.append(c d,\n     e)\n',
  },
  {
    name: 'newlines/after_comma/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'newlines/before_paren/input.sass',
    data: '@use "sass:list"\na \n  b: list.append(c d, e\n     )\n',
  },
  {
    name: 'newlines/before_paren/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
]
