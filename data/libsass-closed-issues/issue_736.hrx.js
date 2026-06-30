export default [
  {
    name: 'input.scss',
    data: '// libsass issue 736:  @return does not cause function exit\n// https://github.com/sass/libsass/issues/736\n\n@function contains-true($list) {\n  @each $bool in $list {\n    @if $bool {\n      @return "found true";\n    }\n  }\n  @return "nothing found";\n}\n\n.test {\n  out: contains-true(true false false);\n  out: contains-true(false true false);\n  out: contains-true(false false true);\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  out: "found true";\n  out: "found true";\n  out: "found true";\n}\n',
  },
]
