// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/33_space_list/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "["\'foo   \'"]"    "bar";\n  output: #{"["\'foo   \'"]"    "bar"};\n  output: "[#{"["\'foo   \'"]"    "bar"}]";\n  output: "#{"["\'foo   \'"]"    "bar"}";\n  output: \'#{"["\'foo   \'"]"    "bar"}\';\n  output: "[\'#{"["\'foo   \'"]"    "bar"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[" "foo   " "]" "bar";\n  output: [ foo    ] bar;\n  output: "[[ foo    ] bar]";\n  output: "[ foo    ] bar";\n  output: "[ foo    ] bar";\n  output: "[\'[ foo    ] bar\']";\n}\n',
  },
]
