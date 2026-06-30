export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0 0 0), rec2020)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(rec2020 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 1 1 1), rec2020)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(rec2020 1.0086369229 0.9889840495 1.1030370326);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.5 0.5 0.5), rec2020)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(rec2020 0.7117581507 0.6973714052 0.7808630758);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.2 0.4 0.8), rec2020)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(rec2020 -0.075615701 0.7287813238 0.9918551161);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -1 0.4 2), rec2020)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(rec2020 -1.4925160884 1.1662135588 1.5466705118);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -999999 0 0), rec2020)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(rec2020 -689.5826182995 463.8899975273 -113.049587293);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.4), rec2020)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(rec2020 0.0683739868 0.5055777091 0.6004180325 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.0), rec2020)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(rec2020 0.0683739868 0.5055777091 0.6004180325 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 none 0.2 0.3), rec2020)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(rec2020 none 0.57127065 0.5978630317);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 none 0.3), rec2020)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(rec2020 0.2799117622 none 0.6111315018);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 none), rec2020)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(rec2020 0.2651201665 0.5016141545 none);\n}\n',
  },
]
