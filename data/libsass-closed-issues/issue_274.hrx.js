export default [
  {
    name: 'input.scss',
    data: 'input[type=submit],\r\ninput[type=reset],\r\ninput[type=button]\r\n{\r\n       filter:chroma(color=#000000);\r\n}',
  },
  {
    name: 'output.css',
    data: 'input[type=submit],\ninput[type=reset],\ninput[type=button] {\n  filter: chroma(color=#000000);\n}\n',
  },
]
