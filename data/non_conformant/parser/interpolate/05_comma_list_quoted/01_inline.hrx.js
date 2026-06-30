export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "alpha", \'beta\';\n  output: #{"alpha", \'beta\'};\n  output: "[#{"alpha", \'beta\'}]";\n  output: "#{"alpha", \'beta\'}";\n  output: \'#{"alpha", \'beta\'}\';\n  output: "[\'#{"alpha", \'beta\'}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "alpha", "beta";\n  output: alpha, beta;\n  output: "[alpha, beta]";\n  output: "alpha, beta";\n  output: "alpha, beta";\n  output: "[\'alpha, beta\']";\n}\n',
  },
]
