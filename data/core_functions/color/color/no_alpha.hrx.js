export default [
  {
    name: 'none/red/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb none 0.2 0.3));\n",
  },
  {
    name: 'none/red/output.css',
    data: 'a {\n  value: color(srgb none 0.2 0.3);\n  space: srgb;\n  channels: none 0.2 0.3 / 1;\n}\n',
  },
  {
    name: 'none/green/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 none 0.3));\n",
  },
  {
    name: 'none/green/output.css',
    data: 'a {\n  value: color(srgb 0.1 none 0.3);\n  space: srgb;\n  channels: 0.1 none 0.3 / 1;\n}\n',
  },
  {
    name: 'none/blue/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(srgb 0.1 none 0.3));\n",
  },
  {
    name: 'none/blue/output.css',
    data: 'a {\n  value: color(srgb 0.1 none 0.3);\n  space: srgb;\n  channels: 0.1 none 0.3 / 1;\n}\n',
  },
  {
    name: 'case/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(sRGB 0.1 none 0.3));\n",
  },
  {
    name: 'case/output.css',
    data: 'a {\n  value: color(srgb 0.1 none 0.3);\n  space: srgb;\n  channels: 0.1 none 0.3 / 1;\n}\n',
  },
  {
    name: 'relative_color/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color(from #aaa srgb r g b));\n",
  },
  {
    name: 'relative_color/output.css',
    data: 'a {\n  value: color(from #aaa srgb r g b);\n  type: string;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(color($description: srgb 0.1 0.2 0.3));\n",
  },
  {
    name: 'named/output.css',
    data: 'a {\n  value: color(srgb 0.1 0.2 0.3);\n  space: srgb;\n  channels: 0.1 0.2 0.3 / 1;\n}\n',
  },
]
