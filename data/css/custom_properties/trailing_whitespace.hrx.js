// https://github.com/sass/sass-spec/blob/HEAD/spec/css/custom_properties/trailing_whitespace.hrx

export default [
  {
    name: 'scss/space/input.scss',
    data: 'a {\n  --b: c ;\n}\n',
  },
  {
    name: 'scss/space/output.css',
    data: 'a {\n  --b: c ;\n}\n',
  },
  {
    name: 'scss/tab/input.scss',
    data: 'a {\n  --b: c\t;\n}\n',
  },
  {
    name: 'scss/tab/output.css',
    data: 'a {\n  --b: c\t;\n}\n',
  },
  {
    name: 'scss/newline/input.scss',
    data: 'a {\n  --b: c\n;\n}\n',
  },
  {
    name: 'scss/newline/output.css',
    data: 'a {\n  --b: c ;\n}\n',
  },
  {
    name: 'scss/before-closing-brace/input.scss',
    data: 'a {\n  --b: c\n}\n',
  },
  {
    name: 'scss/before-closing-brace/output.css',
    data: 'a {\n  --b: c ;\n}\n',
  },
  {
    name: 'sass/space/input.sass',
    data: 'a\n  --b: c \n',
  },
  {
    name: 'sass/space/output.css',
    data: 'a {\n  --b: c;\n}\n',
  },
  {
    name: 'sass/tab/input.sass',
    data: 'a\n  --b: c\t\n',
  },
  {
    name: 'sass/tab/output.css',
    data: 'a {\n  --b: c;\n}\n',
  },
  {
    name: 'sass/newline/input.sass',
    data: 'a\n  --b: c\n\n  --d: e\n\n',
  },
  {
    name: 'sass/newline/output.css',
    data: 'a {\n  --b: c;\n  --d: e;\n}\n',
  },
  {
    name: 'sass/before-block-end/input.sass',
    data: 'a\n  --b: c\n\nd\n  --e: f\n',
  },
  {
    name: 'sass/before-block-end/output.css',
    data: 'a {\n  --b: c;\n}\n\nd {\n  --e: f;\n}\n',
  },
]
