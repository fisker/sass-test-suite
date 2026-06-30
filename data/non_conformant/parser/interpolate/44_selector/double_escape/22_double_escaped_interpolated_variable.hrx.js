// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/44_selector/double_escape/22_double_escaped_interpolated_variable.hrx

export default [
  {
    name: 'input.scss',
    data: "$key: 'bar';\n$suffix2: '\\\\@#{$key}';\n.test22#{$suffix2} { content: '2.2'; }\n",
  },
  {
    name: 'output.css',
    data: '.test22\\@bar {\n  content: "2.2";\n}\n',
  },
]
