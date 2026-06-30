export default [
  {
    name: 'input.sass',
    data: 'foo\n  bar: baz\n  &:hover\n    baz:bam\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n}\n',
  },
  {
    name: 'warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n4 |     baz:bam\n  |     ^^^^^^^\n  '\n    input.sass 4:5  root stylesheet\n",
  },
]
