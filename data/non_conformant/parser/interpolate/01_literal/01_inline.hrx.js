export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: literal;\n  output: #{literal};\n  output: "[#{literal}]";\n  output: "#{literal}";\n  output: \'#{literal}\';\n  output: "[\'#{literal}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: literal;\n  output: literal;\n  output: "[literal]";\n  output: "literal";\n  output: "literal";\n  output: "[\'literal\']";\n}\n',
  },
]
