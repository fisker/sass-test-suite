// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/06_space_list_complex/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: gamme "\'"delta"\'";\n  output: #{gamme "\'"delta"\'"};\n  output: "[#{gamme "\'"delta"\'"}]";\n  output: "#{gamme "\'"delta"\'"}";\n  output: \'#{gamme "\'"delta"\'"}\';\n  output: "[\'#{gamme "\'"delta"\'"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: gamme \"'\" delta \"'\";\n  output: gamme ' delta ';\n  output: \"[gamme ' delta ']\";\n  output: \"gamme ' delta '\";\n  output: \"gamme ' delta '\";\n  output: \"['gamme ' delta '']\";\n}\n",
  },
]
