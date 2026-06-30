// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/06_space_list_complex/02_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: gamme "\'"delta"\'";\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: gamme \"'\" delta \"'\";\n  output: gamme ' delta ';\n  output: \"[gamme ' delta ']\";\n  output: \"gamme ' delta '\";\n  output: \"gamme ' delta '\";\n  output: \"['gamme ' delta '']\";\n}\n",
  },
]
