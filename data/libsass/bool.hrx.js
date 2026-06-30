// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/bool.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\ndiv {\n  a: (false and "hey");\n  b: ("hey" and "ho");\n  b: ("hey" or "ho");\n  a: false and "hey";\n  b: "hey" and "ho";\n  b: string.unquote("hey") or "ho";\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  a: false;\n  b: "ho";\n  b: "hey";\n  a: false;\n  b: "ho";\n  b: hey;\n}\n',
  },
]
