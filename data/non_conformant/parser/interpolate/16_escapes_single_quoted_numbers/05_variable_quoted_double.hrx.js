export default [
  {
    name: 'input.scss',
    data: '$input: \'\\1\\2\\3\\4\\5\\6\\7\\8\\9\';\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  dquoted: "[\\1\\2\\3\\4\\5\\6\\7\\8 \t]";\n  dquoted: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  dquoted: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  dquoted: "[\'\\1\\2\\3\\4\\5\\6\\7\\8 \t\']";\n  squoted: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  squoted: "[\\1\\2\\3\\4\\5\\6\\7\\8 \t]";\n  squoted: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  squoted: "\\1\\2\\3\\4\\5\\6\\7\\8 \t";\n  squoted: "[\'\\1\\2\\3\\4\\5\\6\\7\\8 \t\']";\n}\n',
  },
]
