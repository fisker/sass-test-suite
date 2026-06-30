// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/24_escapes_double_quoted_specials/02_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "\\0_\\a_\\A";\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n.result {\n  output: "�_\\a_\\a";\n  output: �_ _ ;\n  output: "[�_\\a_\\a]";\n  output: "�_\\a_\\a";\n  output: "�_\\a_\\a";\n  output: "[\'�_\\a_\\a\']";\n}\n',
  },
]
