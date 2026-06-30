export default [
  {
    name: 'input.scss',
    data: "@use \"sass:string\";\n@function noop($string) {\n  @return $string;\n}\n\n.foo {\n  upper: string.to-upper-case('f') + string.slice('foo', 2);\n  lower: string.to-lower-case('f') + string.slice('foo', 2);\n  user-upper: string.to-upper-case('f') + noop('oo');\n  user-lower: string.to-lower-case('f') + noop('oo');\n}\n",
  },
  {
    name: 'output.css',
    data: '.foo {\n  upper: "Foo";\n  lower: "foo";\n  user-upper: "Foo";\n  user-lower: "foo";\n}\n',
  },
]
