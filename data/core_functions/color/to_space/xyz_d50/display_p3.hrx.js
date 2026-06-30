// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/xyz_d50/display_p3.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0 0 0), display-p3)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 1 1 1), display-p3)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3 1.0071270999 0.9879174398 1.092886631);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.5 0.5 0.5), display-p3)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3 0.7406962751 0.7263052903 0.8049433314);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.2 0.4 0.8), display-p3)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3 -0.520302433 0.7760128678 0.9954240218);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -1 0.4 2), display-p3)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3 -1.7430526394 1.2261981059 1.4801698042);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 -999999 0 0), display-p3)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3 -480.7511485906 310.5370514577 -94.2421709039);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.4), display-p3)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3 -0.3072826123 0.5660777225 0.6401555397 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 0.3 / 0.0), display-p3)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3 -0.3072826123 0.5660777225 0.6401555397 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 none 0.2 0.3), display-p3)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(display-p3 none 0.637912978 0.6363418884);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 none 0.3), display-p3)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(display-p3 0.3827670965 none 0.655277932);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(xyz-d50 0.1 0.2 none), display-p3)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(display-p3 0.2276620199 0.5616123537 none);\n}\n',
  },
]
