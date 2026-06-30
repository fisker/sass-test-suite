// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/02_double_quoted/04_variable_double.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "dquoted";\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: dquoted;\n  output: [dquoted];\n  output: dquoted;\n  output: dquoted;\n  output: ['dquoted'];\n}\n",
  },
]
