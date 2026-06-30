// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/slice/unquoted.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\na {b: string.slice(cdefgh, 3, 5)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: efg;\n}\n',
  },
]
