// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/31_schema_simple/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "["\'foo\'"]";\n  output: #{"["\'foo\'"]"};\n  output: "[#{"["\'foo\'"]"}]";\n  output: "#{"["\'foo\'"]"}";\n  output: \'#{"["\'foo\'"]"}\';\n  output: "[\'#{"["\'foo\'"]"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[" "foo" "]";\n  output: [ foo ];\n  output: "[[ foo ]]";\n  output: "[ foo ]";\n  output: "[ foo ]";\n  output: "[\'[ foo ]\']";\n}\n',
  },
]
