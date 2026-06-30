export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "dquoted";\n  output: #{"dquoted"};\n  output: "[#{"dquoted"}]";\n  output: "#{"dquoted"}";\n  output: \'#{"dquoted"}\';\n  output: "[\'#{"dquoted"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "dquoted";\n  output: dquoted;\n  output: "[dquoted]";\n  output: "dquoted";\n  output: "dquoted";\n  output: "[\'dquoted\']";\n}\n',
  },
]
