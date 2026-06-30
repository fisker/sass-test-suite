// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/extend-extender.hrx

export default [
  {
    name: 'input.scss',
    data: '// For implementations like Dart Sass that process extensions as they occur,\n// extending rules that contain their own extends needs special handling.\n.b {@extend .a}\n.c {@extend .b}\n.a {x: y}\n',
  },
  {
    name: 'output.css',
    data: '.a, .b, .c {\n  x: y;\n}\n',
  },
]
