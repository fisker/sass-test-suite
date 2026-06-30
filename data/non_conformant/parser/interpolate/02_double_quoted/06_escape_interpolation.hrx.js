// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/02_double_quoted/06_escape_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "dquoted";\n.result {\n  output: "[\\#{"dquoted"}]";\n  output: "\\#{"dquoted"}";\n  output: \'\\#{"dquoted"}\';\n  output: "[\'\\#{"dquoted"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{" dquoted "}]";\n  output: "#{" dquoted "}";\n  output: \'#{"dquoted"}\';\n  output: "[\'#{" dquoted "}\']";\n}\n',
  },
]
