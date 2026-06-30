// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/15_escapes_double_quoted_numbers/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "\\1\\2\\3\\4\\5\\6\\7\\8\\9";\n  output: #{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"};\n  output: "[#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}]";\n  output: "#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}";\n  output: \'#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}\';\n  output: "[\'#{"\\1\\2\\3\\4\\5\\6\\7\\8\\9"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  output: \u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t;\n  output: "[\\1\\2\\3\\4\\5\\6\\7\\8 \t]";\n  output: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  output: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  output: "[\'\\1\\2\\3\\4\\5\\6\\7\\8 \t\']";\n}\n',
  },
]
