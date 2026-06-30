// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/15_escapes_double_quoted_numbers/06_escape_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "\\1\\2\\3\\4\\5\\6\\7\\8\\9";\n.result {\n  output: "[\\#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}]";\n  output: "\\#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}";\n  output: \'\\#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}\';\n  output: "[\'\\#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{" \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9  "}]";\n  output: "#{" \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9  "}";\n  output: \'#{"\\1\\2\\3\\4\\5\\6\\7\\8 \t"}\';\n  output: "[\'#{" \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9  "}\']";\n}\n',
  },
]
