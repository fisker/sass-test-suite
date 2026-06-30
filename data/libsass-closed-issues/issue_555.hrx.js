export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n\n@function hello($name) {\n    @return $name;\n}\n\n$foo: (\n  bar() : baz,\n  bar("foo") : blah,\n  hello("bob") : bam,\n);\n\na {\n  foo: map.get($foo, "bar()");\n  foo: map.get($foo, "bar(\\"foo\\")");\n  foo: map.get($foo, \'bar("foo")\');\n  foo: map.get($foo, "bob");\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  foo: baz;\n  foo: blah;\n  foo: blah;\n  foo: bam;\n}\n',
  },
]
