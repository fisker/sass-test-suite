// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/inspect/function.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n$result: meta.inspect(meta.get-function("get-function", $module: "meta"));\na {\n  value: $result;\n  type: meta.type-of($result);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  value: get-function("get-function");\n  type: string;\n}\n',
  },
]
