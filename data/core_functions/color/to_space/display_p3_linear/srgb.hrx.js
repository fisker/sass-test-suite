// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3_linear/srgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0 0 0), srgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 1 1 1), srgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.5 0.5 0.5), srgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(srgb 0.7353569831 0.7353569831 0.7353569831);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.2 0.4 0.8), srgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(srgb 0.4301819493 0.6714569711 0.9276483709);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -1 0.4 2), srgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(srgb -1.1274787124 0.7075944843 1.4060605884);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear -999999 0 0), srgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(srgb -362.9953097609 89.0395977724 64.8142232337);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.4), srgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(srgb 0.3084757741 0.4892278104 0.5941758414 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 0.3 / 0.0), srgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(srgb 0.3084757741 0.4892278104 0.5941758414 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear none 0.2 0.3), srgb)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(srgb none 0.4938703001 0.5958763503);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 none 0.3), srgb)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(srgb 0.384845675 none 0.6076242024);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3-linear 0.1 0.2 none), srgb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(srgb 0.3084757741 0.4892278104 none);\n}\n',
  },
]
