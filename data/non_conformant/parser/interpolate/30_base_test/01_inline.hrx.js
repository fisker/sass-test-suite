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
