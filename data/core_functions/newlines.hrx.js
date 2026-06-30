// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/newlines.hrx

export default [
  {
    name: 'after_paren/input.sass',
    data: '@use "sass:list";\na \n  b: list.append(\n    c d, e)\n',
  },
  {
    name: 'after_paren/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'after_value/input.sass',
    data: '@use "sass:list";\na \n  b: list.append(c\n     d, e)\n',
  },
  {
    name: 'after_value/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'before_comma/input.sass',
    data: '@use "sass:list";\na \n  b: list.append(c d\n     , e)\n',
  },
  {
    name: 'before_comma/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'after_comma/input.sass',
    data: '@use "sass:list";\na \n  b: list.append(c d,\n     e)\n',
  },
  {
    name: 'after_comma/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
  {
    name: 'before_paren/input.sass',
    data: '@use "sass:list";\na \n  b: list.append(c d, e\n     )\n',
  },
  {
    name: 'before_paren/output.css',
    data: 'a {\n  b: c d e;\n}\n',
  },
]
