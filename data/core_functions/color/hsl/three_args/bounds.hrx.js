// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hsl/three_args/bounds.hrx

export default [
  {
    name: 'README.md',
    data: 'The W3C tests cover out-of-bounds hue, but not saturation or lightness.\n',
  },
  {
    name: 'saturation/above/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(hsl(0, 200%, 50%));\n",
  },
  {
    name: 'saturation/above/output.css',
    data: 'a {\n  value: hsl(0, 200%, 50%);\n  space: hsl;\n  channels: 0deg 200% 50% / 1;\n}\n',
  },
  {
    name: 'saturation/below/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(hsl(0, -100%, 50%));\n",
  },
  {
    name: 'saturation/below/output.css',
    data: 'a {\n  value: hsl(0, 0%, 50%);\n  space: hsl;\n  channels: 0deg 0% 50% / 1;\n}\n',
  },
  {
    name: 'lightness/above/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(hsl(0, 100%, 500%));\n",
  },
  {
    name: 'lightness/above/output.css',
    data: 'a {\n  value: hsl(0, 100%, 500%);\n  space: hsl;\n  channels: 0deg 100% 500% / 1;\n}\n',
  },
  {
    name: 'lightness/below/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(hsl(0, 100%, -100%));\n",
  },
  {
    name: 'lightness/below/output.css',
    data: 'a {\n  value: hsl(0, 100%, -100%);\n  space: hsl;\n  channels: 0deg 100% -100% / 1;\n}\n',
  },
]
