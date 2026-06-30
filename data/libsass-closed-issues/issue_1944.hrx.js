// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1944.hrx

export default [
  {
    name: 'input.scss',
    data: "$count: 0;\n\n@function foo() {\n    $count: $count + 1 !global;\n    $selector: ('.bar' 'baz');\n    @return $selector;\n}\n\n\n#{foo()} {\n    count: $count;\n}\n",
  },
  {
    name: 'output.css',
    data: '.bar baz {\n  count: 1;\n}\n',
  },
]
