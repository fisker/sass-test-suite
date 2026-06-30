// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/24_escapes_double_quoted_specials/06_escape_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "\\0_\\a_\\A";\n.result {\n  output: "[\\#{"\\0_\\a_\\A"}]";\n  output: "\\#{"\\0_\\a_\\A"}";\n  output: \'\\#{"\\0_\\a_\\A"}\';\n  output: "[\'\\#{"\\0_\\a_\\A"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n.result {\n  output: "[#{" \\0 _\\a _\\a  "}]";\n  output: "#{" \\0 _\\a _\\a  "}";\n  output: \'#{"�_\\a_\\a"}\';\n  output: "[\'#{" \\0 _\\a _\\a  "}\']";\n}\n',
  },
]
