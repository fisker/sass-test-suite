export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0 0 0), oklch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 1 1 1), oklch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz 0.9956342097 1.0026671299 1.3221722918) 100%, black);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.5 0.5 0.5), oklch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklch(79.6577663953% 0.0311073874 295.3584561891deg);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.2 0.4 0.8), oklch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklch(71.9979204728% 0.2904968159 209.0787289615deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -1 0.4 2), oklch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklch(42.8855762363% 3.2937679404 186.5489535718deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -999999 0 0), oklch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz -955472.4660146532 28369.6809641542 -12314.002550467) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.4), oklch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklch(56.9970930189% 0.1921417558 201.5843445791deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.0), oklch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklch(56.9970930189% 0.1921417558 201.5843445791deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 none 0.2 0.3), oklch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklch(53.7370326457% 0.4868840502 188.5426040002deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 none 0.3), oklch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklch(29.1994680372% 0.4226922646 316.7740746587deg);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 none), oklch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklch(56.4114763984% 0.2339193642 138.7662106424deg);\n}\n',
  },
]
