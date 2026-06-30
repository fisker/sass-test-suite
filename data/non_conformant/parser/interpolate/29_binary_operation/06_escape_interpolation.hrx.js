// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/29_binary_operation/06_escape_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: "$input: \"foo#{'ba' + 'r'}baz\";\n.result {\n  output: \"[\\#{\"foo#{'ba' + 'r'}baz\"}]\";\n  output: \"\\#{\"foo#{'ba' + 'r'}baz\"}\";\n  output: '\\#{\"foo#{'ba' + 'r'}baz\"}';\n  output: \"['\\#{\"foo#{'ba' + 'r'}baz\"}']\";\n}\n",
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{" foobarbaz "}]";\n  output: "#{" foobarbaz "}";\n  output: \'#{"foobarbaz"}\';\n  output: "[\'#{" foobarbaz "}\']";\n}\n',
  },
]
