export default [
  {
    name: 'input.scss',
    data: "@use \"sass:meta\";\n\n$count: 0;\n\n@function counter() {\n  $count: $count + 1 !global;\n  @return $count;\n}\n\n$map: (\n  counter(): 'bar',\n  counter(): 'foo',\n);\n\n.foo {\n  content: meta.inspect($map);\n}",
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: (1: "bar", 2: "foo");\n}\n',
  },
]
