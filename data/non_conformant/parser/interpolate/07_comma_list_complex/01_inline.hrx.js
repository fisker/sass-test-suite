// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/07_comma_list_complex/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: gamma, "\'"delta"\'";\n  output: #{gamma, "\'"delta"\'"};\n  output: "[#{gamma, "\'"delta"\'"}]";\n  output: "#{gamma, "\'"delta"\'"}";\n  output: \'#{gamma, "\'"delta"\'"}\';\n  output: "[\'#{gamma, "\'"delta"\'"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: gamma, \"'\" delta \"'\";\n  output: gamma, ' delta ';\n  output: \"[gamma, ' delta ']\";\n  output: \"gamma, ' delta '\";\n  output: \"gamma, ' delta '\";\n  output: \"['gamma, ' delta '']\";\n}\n",
  },
]
