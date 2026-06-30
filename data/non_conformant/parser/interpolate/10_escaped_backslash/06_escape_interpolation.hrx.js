// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/10_escaped_backslash/06_escape_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: \\\\;\n.result {\n  output: "[\\#{\\\\}]";\n  output: "\\#{\\\\}";\n  output: \'\\#{\\\\}\';\n  output: "[\'\\#{\\\\}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{\\\\}]";\n  output: "#{\\\\}";\n  output: "#{\\\\}";\n  output: "[\'#{\\\\}\']";\n}\n',
  },
]
