export default [
  {
    name: 'input.scss',
    data: '.foo {\n  bar: baz;\n}\n\ninput[type="text"],\ninput[type="search"],\ninput[type="url"],\ninput[type="email"],\ninput[type="password"],\ninput[type="number"],\ninput[type="tel"],\ninput[type="date"],\ninput[type="range"],\ntextarea {\n  @extend .foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo, input[type=text],\ninput[type=search],\ninput[type=url],\ninput[type=email],\ninput[type=password],\ninput[type=number],\ninput[type=tel],\ninput[type=date],\ninput[type=range],\ntextarea {\n  bar: baz;\n}\n',
  },
]
