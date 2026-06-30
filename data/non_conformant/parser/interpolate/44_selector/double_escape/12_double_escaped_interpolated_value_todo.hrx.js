// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/44_selector/double_escape/12_double_escaped_interpolated_value_todo.hrx

export default [
  {
    name: 'input.scss',
    data: "$key: 'bar';\n.test12#{'\\\\@#{$key}'} { content: '1.2'; }\n",
  },
  {
    name: 'output.css',
    data: '.test12\\@bar {\n  content: "1.2";\n}\n',
  },
]
