export default [
  {
    name: 'input.scss',
    data: ".result {\n  output: #{#{'\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z'}};\n  output: #{\"[#{'\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z'}]\"};\n  output: #{\"#{'\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z'}\"};\n  output: #{'#{'\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z'}'};\n  output: #{\"['#{'\\b\\c\\d\\e\\f\\g\\h\\i\\j\\k\\l\\m\\n\\o\\p\\q\\r\\s\\t\\u\\v\\w\\x\\y\\z'}']\"};\n}\n",
  },
  {
    name: 'output.css',
    data: ".result {\n  output: \u000b\f\r\u000e\u000fghijklmnopqrstuvwxyz;\n  output: [\u000b\f\r\u000e\u000fghijklmnopqrstuvwxyz];\n  output: \u000b\f\r\u000e\u000fghijklmnopqrstuvwxyz;\n  output: \u000b\f\r\u000e\u000fghijklmnopqrstuvwxyz;\n  output: ['\u000b\f\r\u000e\u000fghijklmnopqrstuvwxyz'];\n}\n",
  },
]
