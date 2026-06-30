export default [
  {
    name: 'input.scss',
    data: '$input: gamme "\'"delta"\'";\n.result {\n  output: "[\\#{gamme "\'"delta"\'"}]";\n  output: "\\#{gamme "\'"delta"\'"}";\n  output: \'\\#{gamme "\'"delta"\'"}\';\n  output: "[\'\\#{gamme "\'"delta"\'"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{gamme " \'"delta"\' "}]";\n  output: "#{gamme " \'"delta"\' "}";\n  output: \'#{gamme "\' "delta" \'"}\';\n  output: "[\'#{gamme " \'"delta"\' "}\']";\n}\n',
  },
]
