export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0 0 0), oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 1 1 1), oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.5 0.5 0.5), oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(79.3700525984% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.2 0.4 0.8), oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(72.8143378795% -0.0250833831 -0.0997563614);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear -1 0.4 2), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklab(41.5806822306% -1.9917329847 -0.3816984985);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear -999999 0 0), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz -412390.3868751603 -212638.7932325044 -19330.7993847732) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.1 0.2 0.3 / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(56.8480557843% -0.027115955 -0.0484208509 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.1 0.2 0.3 / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(56.8480557843% -0.027115955 -0.0484208509 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear none 0.2 0.3), oklab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklab(54.0246599046% -0.0760370993 -0.0611457474);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.1 none 0.3), oklab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklab(37.7328570648% 0.1076561212 -0.1664592606);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb-linear 0.1 0.2 none), oklab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklab(53.8237211404% -0.0823086195 0.1108579758);\n}\n',
  },
]
