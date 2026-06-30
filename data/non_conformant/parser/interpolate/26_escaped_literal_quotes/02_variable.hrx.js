// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/26_escaped_literal_quotes/02_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: \\"\\\';\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: \\"\\\';\n  output: \\"\\\';\n  output: "[\\\\\\"\\\\\']";\n  output: "\\\\\\"\\\\\'";\n  output: "\\\\\\"\\\\\'";\n  output: "[\'\\\\\\"\\\\\'\']";\n}\n',
  },
]
