// https://github.com/sass/sass-spec/blob/HEAD/spec/values/strings.hrx

export default [
  {
    name: 'new-line/scss/escaped/input.scss',
    data: "a {\n  b: 'line1 \\\n      line2';\n}\n",
  },
  {
    name: 'new-line/scss/escaped/output.css',
    data: 'a {\n  b: "line1       line2";\n}\n',
  },
  {
    name: 'new-line/scss/raw/input.scss',
    data: "@mixin a($b) { b: $b }\na {\n  b: 'line1\n      line2';\n}\n",
  },
  {
    name: 'new-line/scss/raw/error',
    data: "Error: Expected '.\n  ,\n3 |   b: 'line1\n  |            ^\n  '\n  input.scss 3:12  root stylesheet\n",
  },
  {
    name: 'new-line/scss/cr/input.scss',
    data: "@mixin a($b) { b: $b }\na {\n  b: 'line1\n      line2';\n}\n",
  },
  {
    name: 'new-line/scss/cr/error',
    data: "Error: Expected '.\n  ,\n3 |   b: 'line1\n  |            ^\n  '\n  input.scss 3:12  root stylesheet\n",
  },
  {
    name: 'new-line/scss/ff/input.scss',
    data: "@mixin a($b) { b: $b }\na {\n  b: 'line1\fline2';\n\n",
  },
  {
    name: 'new-line/scss/ff/error',
    data: "Error: Expected '.\n  ,\n3 |   b: 'line1\fline2';\n  |            ^\n  '\n  input.scss 3:12  root stylesheet\n",
  },
  {
    name: 'new-line/sass/escaped/input.sass',
    data: "a \n  b: 'line1 \\\n      line2'\n\n",
  },
  {
    name: 'new-line/sass/escaped/output.css',
    data: 'a {\n  b: "line1       line2";\n}\n',
  },
  {
    name: 'new-line/sass/raw/input.sass',
    data: "a\n  b: 'line1\n      line2'\n",
  },
  {
    name: 'new-line/sass/raw/error',
    data: "Error: Expected '.\n  ,\n2 |   b: 'line1\n  |            ^\n  '\n  input.sass 2:12  root stylesheet\n",
  },
]
