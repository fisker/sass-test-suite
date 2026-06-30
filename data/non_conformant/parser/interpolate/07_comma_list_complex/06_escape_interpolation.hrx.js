export default [
  {
    name: 'input.scss',
    data: '$input: gamma, "\'"delta"\'";\n.result {\n  output: "[\\#{gamma, "\'"delta"\'"}]";\n  output: "\\#{gamma, "\'"delta"\'"}";\n  output: \'\\#{gamma, "\'"delta"\'"}\';\n  output: "[\'\\#{gamma, "\'"delta"\'"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{gamma, " \'"delta"\' "}]";\n  output: "#{gamma, " \'"delta"\' "}";\n  output: \'#{gamma, "\' "delta" \'"}\';\n  output: "[\'#{gamma, " \'"delta"\' "}\']";\n}\n',
  },
]
