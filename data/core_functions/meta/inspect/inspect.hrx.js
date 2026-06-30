// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/inspect/inspect.hrx

export default [
  {
    name: 'empty/bracketed/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect([])}\n',
  },
  {
    name: 'empty/bracketed/output.css',
    data: 'a {\n  b: [];\n}\n',
  },
]
