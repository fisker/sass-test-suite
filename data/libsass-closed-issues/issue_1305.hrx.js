// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1305.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:meta\";\n.foo {\n    content: meta.call('unquote', 'foo', ()...);\n}\n",
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: foo;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function(\"unquote\"))\n\n  ,\n3 |     content: meta.call('unquote', 'foo', ()...);\n  |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 3:14  root stylesheet\n\nDEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse string.unquote instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 |     content: meta.call('unquote', 'foo', ()...);\n  |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 3:14  root stylesheet\n",
  },
]
