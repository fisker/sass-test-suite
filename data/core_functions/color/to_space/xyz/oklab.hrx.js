// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz/oklab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0 0 0), oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 1 1 1), oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 1 1 1) 100%, black);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.5 0.5 0.5), oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(79.6276380258% 0.0212390429 0.0117978875);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.2 0.4 0.8), oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(70.8952950666% -0.2482574171 -0.0948731289);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -1 0.4 2), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklab(38.0019903498% -3.2429401776 -0.3314216643);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz -999999 0 0), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz -999998.9999999993 0 -0.0000000001) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(56.4079112516% -0.173633896 -0.0375005538 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 0.3 / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(56.4079112516% -0.173633896 -0.0375005538 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz none 0.2 0.3), oklab)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklab(52.6994311398% -0.4922232483 -0.0409679567);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 none 0.3), oklab)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklab(26.3423255262% 0.3682063802 -0.2704617674);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz 0.1 0.2 none), oklab)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklab(56.6867662885% -0.1591393729 0.1508075356);\n}\n',
  },
]
