export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: \\"\\\';\n  output: #{\\"\\\'};\n  output: "[#{\\"\\\'}]";\n  output: "#{\\"\\\'}";\n  output: \'#{\\"\\\'}\';\n  output: "[\'#{\\"\\\'}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: \\"\\\';\n  output: \\"\\\';\n  output: "[\\\\\\"\\\\\']";\n  output: "\\\\\\"\\\\\'";\n  output: "\\\\\\"\\\\\'";\n  output: "[\'\\\\\\"\\\\\'\']";\n}\n',
  },
]
