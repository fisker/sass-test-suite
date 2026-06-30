export default [
  {
    name: 'scss/silent/input.scss',
    data: 'a {\n  --b: c // comment;\n}\n',
  },
  {
    name: 'scss/silent/output.css',
    data: 'a {\n  --b: c // comment;\n}\n',
  },
  {
    name: 'scss/loud/input.scss',
    data: 'a {\n  --b: c /* comment */;\n}\n',
  },
  {
    name: 'scss/loud/output.css',
    data: 'a {\n  --b: c /* comment */;\n}\n',
  },
  {
    name: 'sass/silent/input.sass',
    data: 'a\n  --b: c // comment\n',
  },
  {
    name: 'sass/silent/output.css',
    data: 'a {\n  --b: c // comment;\n}\n',
  },
  {
    name: 'sass/loud/input.sass',
    data: 'a\n  --b: c /* comment */\n',
  },
  {
    name: 'sass/loud/output.css',
    data: 'a {\n  --b: c /* comment */;\n}\n',
  },
]
