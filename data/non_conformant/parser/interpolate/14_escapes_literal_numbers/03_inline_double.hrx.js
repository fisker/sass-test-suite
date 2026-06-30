// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/14_escapes_literal_numbers/03_inline_double.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: #{#{\\1\\2\\3\\4\\5\\6\\7\\8\\9}};\n  output: #{"[#{\\1\\2\\3\\4\\5\\6\\7\\8\\9}]"};\n  output: #{"#{\\1\\2\\3\\4\\5\\6\\7\\8\\9}"};\n  output: #{\'#{\\1\\2\\3\\4\\5\\6\\7\\8\\9}\'};\n  output: #{"[\'#{\\1\\2\\3\\4\\5\\6\\7\\8\\9}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9 ;\n  output: [\\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9 ];\n  output: \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9 ;\n  output: \\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9 ;\n  output: ['\\1 \\2 \\3 \\4 \\5 \\6 \\7 \\8 \\9 '];\n}\n",
  },
]
