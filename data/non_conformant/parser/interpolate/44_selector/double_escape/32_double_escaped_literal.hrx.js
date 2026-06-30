// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/44_selector/double_escape/32_double_escaped_literal.hrx

export default [
  {
    name: 'input.scss',
    data: ".test32#{'\\\\@baz'} { content: '3.2'; }\n",
  },
  {
    name: 'output.css',
    data: '.test32\\@baz {\n  content: "3.2";\n}\n',
  },
]
