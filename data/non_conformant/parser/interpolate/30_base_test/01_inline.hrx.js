// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/30_base_test/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: ".result {\n  output: \"foo#{'ba' + 'r'}baz\";\n  output: #{\"foo#{'ba' + 'r'}baz\"};\n  output: \"[#{\"foo#{'ba' + 'r'}baz\"}]\";\n  output: \"#{\"foo#{'ba' + 'r'}baz\"}\";\n  output: '#{\"foo#{'ba' + 'r'}baz\"}';\n  output: \"['#{\"foo#{'ba' + 'r'}baz\"}']\";\n}\n",
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "foobarbaz";\n  output: foobarbaz;\n  output: "[foobarbaz]";\n  output: "foobarbaz";\n  output: "foobarbaz";\n  output: "[\'foobarbaz\']";\n}\n',
  },
]
