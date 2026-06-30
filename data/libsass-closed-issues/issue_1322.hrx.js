// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1322.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 400px;\n$bar: "min-width:400px";\n@import url(foo.css) (min-width:400px);\n@import url(foo.css) (min-width:$foo);\n@import url(foo.css) (min-width:#{$foo});\n@import url(foo.css) ($bar);\n@import url(foo.css) (#{$bar});\n',
  },
  {
    name: 'output.css',
    data: '@import url(foo.css) (min-width: 400px);\n@import url(foo.css) (min-width: 400px);\n@import url(foo.css) (min-width: 400px);\n@import url(foo.css) (min-width:400px);\n@import url(foo.css) (min-width:400px);\n',
  },
]
