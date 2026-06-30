// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/slice/named.hrx

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
