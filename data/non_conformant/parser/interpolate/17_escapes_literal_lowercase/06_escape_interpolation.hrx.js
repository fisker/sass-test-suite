// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/17_escapes_literal_lowercase/06_escape_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: \\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z;\n.result {\n  output: "[\\#{\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z}]";\n  output: "\\#{\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z}";\n  output: \'\\#{\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z}\';\n  output: "[\'\\#{\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz}]";\n  output: "#{\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz}";\n  output: "#{\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz}";\n  output: "[\'#{\\b\\c\\d\\e\\fghijklmnopqrstuvwxyz}\']";\n}\n',
  },
]
