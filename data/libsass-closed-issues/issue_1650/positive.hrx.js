export default [
  {
    name: 'input.scss',
    data: ':nth-of-type(2n+1),\n:nth-of-type(2n+  1),\n:nth-of-type(2n  +1),\n:nth-of-type(2n  +  1),\n:nth-of-type( 2n  +  1 )\n{ color: red; }',
  },
  {
    name: 'output.css',
    data: ':nth-of-type(2n+1),\n:nth-of-type(2n+ 1),\n:nth-of-type(2n +1),\n:nth-of-type(2n + 1),\n:nth-of-type(2n + 1) {\n  color: red;\n}\n',
  },
]
