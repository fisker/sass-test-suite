export default [
  {
    name: 'input.scss',
    data: "foo {\n  $nothing: null;\n  foo: \"#{$nothing}' %' '#{$nothing}\";\n}\n",
  },
  {
    name: 'output.css',
    data: "foo {\n  foo: \"' %' '\";\n}\n",
  },
]
