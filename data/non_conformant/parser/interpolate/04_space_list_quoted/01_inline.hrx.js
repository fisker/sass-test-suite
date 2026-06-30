// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/04_space_list_quoted/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "alpha" \'beta\';\n  output: #{"alpha" \'beta\'};\n  output: "[#{"alpha" \'beta\'}]";\n  output: "#{"alpha" \'beta\'}";\n  output: \'#{"alpha" \'beta\'}\';\n  output: "[\'#{"alpha" \'beta\'}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "alpha" "beta";\n  output: alpha beta;\n  output: "[alpha beta]";\n  output: "alpha beta";\n  output: "alpha beta";\n  output: "[\'alpha beta\']";\n}\n',
  },
]
