// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/04_space_list_quoted/06_escape_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "alpha" \'beta\';\n.result {\n  output: "[\\#{"alpha" \'beta\'}]";\n  output: "\\#{"alpha" \'beta\'}";\n  output: \'\\#{"alpha" \'beta\'}\';\n  output: "[\'\\#{"alpha" \'beta\'}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[#{" alpha " \'beta\'}]";\n  output: "#{" alpha " \'beta\'}";\n  output: \'#{"alpha" \' beta "}";\n  output: "[\'#{" alpha " \'beta\'}\']";\n}\n',
  },
]
