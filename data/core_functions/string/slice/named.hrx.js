export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\na {b: string.slice($string: "cde", $start-at: 2, $end-at: 2)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: "d";\n}\n',
  },
]
