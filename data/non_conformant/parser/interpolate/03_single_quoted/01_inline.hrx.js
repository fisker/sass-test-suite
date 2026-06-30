export default [
  {
    name: 'input.scss',
    data: ".result {\n  output: 'squoted';\n  output: #{'squoted'};\n  output: \"[#{'squoted'}]\";\n  output: \"#{'squoted'}\";\n  output: '#{'squoted'}';\n  output: \"['#{'squoted'}']\";\n}\n",
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "squoted";\n  output: squoted;\n  output: "[squoted]";\n  output: "squoted";\n  output: "squoted";\n  output: "[\'squoted\']";\n}\n',
  },
]
