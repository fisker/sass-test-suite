// https://github.com/sass/sass-spec/blob/HEAD/spec/css/custom_properties/strings.hrx

export default [
  {
    name: 'input.scss',
    data: '.strings {\n  // Strings are tokenized as units, so their contents shouldn\'t affect anything\n  // else.\n  --text: "foo";\n  --bang: "!";\n  --semicolon: ";";\n  --square: "][";\n  --curly: "}{";\n  --parens: ")(";\n}\n',
  },
  {
    name: 'output.css',
    data: '.strings {\n  --text: "foo";\n  --bang: "!";\n  --semicolon: ";";\n  --square: "][";\n  --curly: "}{";\n  --parens: ")(";\n}\n',
  },
]
