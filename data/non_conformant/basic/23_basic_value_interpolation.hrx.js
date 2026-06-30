// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/23_basic_value_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\ndiv {\n  a: hello#{world};\n  a: hello #{world};\n  b: 12#{3};\n  b: meta.type-of(12#{3});\n  b: #{12 + 111};\n  b: meta.type-of(#{12 + 111});\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  a: helloworld;\n  a: hello world;\n  b: 12 3;\n  b: list;\n  b: 123;\n  b: string;\n}\n',
  },
]
