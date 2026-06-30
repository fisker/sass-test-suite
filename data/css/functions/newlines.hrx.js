export default [
  {
    name: 'value/before/input.sass',
    data: 'a\n  b: c(\n     d)\n',
  },
  {
    name: 'value/before/output.css',
    data: 'a {\n  b: c(d);\n}\n',
  },
  {
    name: 'value/after/input.sass',
    data: 'a\n  b: c(d\n      )\n',
  },
  {
    name: 'value/after/output.css',
    data: 'a {\n  b: c(d);\n}\n',
  },
  {
    name: 'value/between/input.sass',
    data: 'a\n  b: c(d\n      e)\n',
  },
  {
    name: 'value/between/output.css',
    data: 'a {\n  b: c(d e);\n}\n',
  },
  {
    name: 'comma/before/input.sass',
    data: 'a\n  b: c(d\n      ,e)\n',
  },
  {
    name: 'comma/before/output.css',
    data: 'a {\n  b: c(d, e);\n}\n',
  },
  {
    name: 'comma/after/input.sass',
    data: 'a\n  b: c(d,\n      e)\n',
  },
  {
    name: 'comma/after/output.css',
    data: 'a {\n  b: c(d, e);\n}\n',
  },
  {
    name: 'trailing_comma/before/input.sass',
    data: 'a\n  b: c(d\n      ,)\n',
  },
  {
    name: 'trailing_comma/before/output.css',
    data: 'a {\n  b: c(d);\n}\n',
  },
  {
    name: 'trailing_comma/after/input.sass',
    data: 'a\n  b: c(d,\n      )\n',
  },
  {
    name: 'trailing_comma/after/output.css',
    data: 'a {\n  b: c(d);\n}\n',
  },
  {
    name: 'slash/before/input.sass',
    data: 'a\n  b: c(d\n      / e)\n',
  },
  {
    name: 'slash/before/output.css',
    data: 'a {\n  b: c(d/e);\n}\n',
  },
  {
    name: 'slash/after/input.sass',
    data: 'a\n  b: c(d /\n      e)\n',
  },
  {
    name: 'slash/after/output.css',
    data: 'a {\n  b: c(d/e);\n}\n',
  },
]
