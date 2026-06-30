export default [
  {
    name: 'scss/value-interpolation/input.scss',
    data: '.value-interpolation {\n  // Interpolation is the only Sass construct that\'s supported in custom\n  // variables.\n  --alone: #{1 + 2};\n  --in-list: a #{1 + 2} c;\n  --in-ident: foo#{1 + 2}bar;\n  --in-string: "foo#{1 + 2}bar";\n  --in-uri: uri(foo#{1 + 2}bar);\n}\n',
  },
  {
    name: 'scss/value-interpolation/output.css',
    data: '.value-interpolation {\n  --alone: 3;\n  --in-list: a 3 c;\n  --in-ident: foo3bar;\n  --in-string: "foo3bar";\n  --in-uri: uri(foo3bar);\n}\n',
  },
  {
    name: 'scss/alone/input.scss',
    data: 'a{\n  --b: #{1 + 2};\n}\n',
  },
  {
    name: 'scss/alone/output.css',
    data: 'a {\n  --b: 3;\n}\n',
  },
  {
    name: 'scss/in-list/input.scss',
    data: 'a{\n  --b: c #{1 + 2} d;\n}\n',
  },
  {
    name: 'scss/in-list/output.css',
    data: 'a {\n  --b: c 3 d;\n}\n',
  },
  {
    name: 'scss/in-string/input.scss',
    data: 'a{\n  --b: "c#{1 + 2}d";\n}\n',
  },
  {
    name: 'scss/in-string/output.css',
    data: 'a {\n  --b: "c3d";\n}\n',
  },
  {
    name: 'scss/in-ident/input.scss',
    data: 'a{\n  --b: c#{1 + 2}d;\n}\n',
  },
  {
    name: 'scss/in-ident/output.css',
    data: 'a {\n  --b: c3d;\n}\n',
  },
  {
    name: 'scss/in-uri/input.scss',
    data: 'a{\n  --b: uri(c#{1 + 2}d);\n}\n',
  },
  {
    name: 'scss/in-uri/output.css',
    data: 'a {\n  --b: uri(c3d);\n}\n',
  },
  {
    name: 'scss/linebreak_interpolation/input.scss',
    data: 'a{\n  --b: #{1 \n    + \n    2};\n}\n',
  },
  {
    name: 'scss/linebreak_interpolation/output.css',
    data: 'a {\n  --b: 3;\n}\n',
  },
  {
    name: 'sass/alone/input.sass',
    data: 'a\n  --b: #{1 + 2}\n',
  },
  {
    name: 'sass/alone/output.css',
    data: 'a {\n  --b: 3;\n}\n',
  },
  {
    name: 'sass/in-list/input.sass',
    data: 'a\n  --b: c #{1 + 2} d\n',
  },
  {
    name: 'sass/in-list/output.css',
    data: 'a {\n  --b: c 3 d;\n}\n',
  },
  {
    name: 'sass/in-string/input.sass',
    data: 'a\n  --b: "c#{1 + 2}d"\n',
  },
  {
    name: 'sass/in-string/output.css',
    data: 'a {\n  --b: "c3d";\n}\n',
  },
  {
    name: 'sass/in-ident/input.sass',
    data: 'a\n  --b: c#{1 + 2}d\n',
  },
  {
    name: 'sass/in-ident/output.css',
    data: 'a {\n  --b: c3d;\n}\n',
  },
  {
    name: 'sass/in-uri/input.sass',
    data: 'a\n  --b: uri(c#{1 + 2}d)\n',
  },
  {
    name: 'sass/in-uri/output.css',
    data: 'a {\n  --b: uri(c3d);\n}\n',
  },
  {
    name: 'sass/linebreak_interpolation/input.sass',
    data: 'a\n  --b: #{1 \n    + \n    2}\n\n',
  },
  {
    name: 'sass/linebreak_interpolation/output.css',
    data: 'a {\n  --b: 3;\n}\n',
  },
]
