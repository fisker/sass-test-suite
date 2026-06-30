// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/prophoto_rgb/oklch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0 0 0), oklch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 1 1 1), oklch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.5 0.5 0.5), oklch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklch(65.9753955386% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.2 0.4 0.8), oklch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklch(52.9739865795% 0.3041341473 219.4853795648deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb -1 0.4 2), oklch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklch(9.459782485% 2.3640864979 199.9392878991deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb -999999 0 0), oklch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz -47674467013.187546 -16929933315.11391 -247080732.7777424) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 0.3 / 0.4), oklch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklch(34.6066206269% 0.1371016709 212.8666026191deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 0.3 / 0.0), oklch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklch(34.6066206269% 0.1371016709 212.8666026191deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb none 0.2 0.3), oklch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklch(32.4937511277% 0.2189851803 202.1257680438deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 none 0.3), oklch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklch(20.6577507191% 0.1790896399 256.2784452493deg);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(prophoto-rgb 0.1 0.2 none), oklch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklch(33.9153746566% 0.1484719865 141.086665946deg);\n}\n',
  },
]
