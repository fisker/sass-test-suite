// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/srgb/lch.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0 0 0), lch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: lch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 1 1 1), lch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.5 0.5 0.5), lch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: lch(53.3889647411% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.2 0.4 0.8), lch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: lch(44.1210142293% 60.0926108873 280.5032243387deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -1 0.4 2), lch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: lch(48.6432537296% 224.278166904 287.899080689deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -999999 0 0), lch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz -91096581353071.64 -46971674760177.555 -4270152250925.3564) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.4), lch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: lch(20.2042266123% 19.2439038187 260.7069785652deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.0), lch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: lch(20.2042266123% 19.2439038187 260.7069785652deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb none 0.2 0.3), lch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: lch(19.2964565453% 21.9002441782 249.3140373711deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 none 0.3), lch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: lch(6.0247531381% 51.1719976788 305.1505063293deg);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 none), lch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: lch(18.3483752329% 30.8320028773 124.8397077198deg);\n}\n',
  },
]
