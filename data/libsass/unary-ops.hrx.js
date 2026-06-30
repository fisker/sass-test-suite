// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/unary-ops.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$x: 20%;\n\ndiv {\n  a: -10;\n  b: -10px + 10px;\n  c: +10;\n  d: +10px + -10px;\n  e: -$x;\n  f: +$x;\n  g: -hello;\n  h: +hello;\n  i: + hello;\n  j: meta.type-of(+ hello);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  a: -10;\n  b: 0px;\n  c: 10;\n  d: 0px;\n  e: -20%;\n  f: 20%;\n  g: -hello;\n  h: +hello;\n  i: +hello;\n  j: string;\n}\n',
  },
]
