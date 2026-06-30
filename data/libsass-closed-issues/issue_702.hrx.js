// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_702.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n.foo {\n  content: meta.function-exists("feature-exists");\n  content: meta.feature-exists("foo");\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: true;\n  content: false;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n4 |   content: meta.feature-exists("foo");\n  |            ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 4:12  root stylesheet\n',
  },
]
