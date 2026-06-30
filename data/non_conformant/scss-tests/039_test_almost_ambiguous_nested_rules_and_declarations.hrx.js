export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar:baz:bang:bop:biddle:woo:look:at:all:these:pseudoclasses {a: b};\n  bar:baz bang bop biddle woo look at all these elems {a: b};\n  bar:baz bang bop biddle woo look at all these elems; }\n',
  },
  {
    name: 'output.css',
    data: 'foo bar:baz:bang:bop:biddle:woo:look:at:all:these:pseudoclasses {\n  a: b;\n}\nfoo bar:baz bang bop biddle woo look at all these elems {\n  a: b;\n}\nfoo {\n  bar: baz bang bop biddle woo look at all these elems;\n}\n',
  },
]
