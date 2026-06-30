export default [
  {
    name: 'input.scss',
    data: '$input: "\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz";\n  dquoted: "[\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz]";\n  dquoted: "\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz";\n  dquoted: "\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz";\n  dquoted: "[\'\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz\']";\n  squoted: "\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz";\n  squoted: "[\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz]";\n  squoted: "\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz";\n  squoted: "\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz";\n  squoted: "[\'\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz\']";\n}\n',
  },
]
