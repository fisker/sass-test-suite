export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(#000, hwb));\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  value: black;\n  space: hwb;\n  channels: 0deg 0% 100% / 1;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(#fff, hwb));\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  value: white;\n  space: hwb;\n  channels: 0deg 100% 0% / 1;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(#aaa, hwb));\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  value: #aaaaaa;\n  space: hwb;\n  channels: 0deg 66.6666666667% 33.3333333333% / 1;\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(#28d, hwb));\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  value: #2288dd;\n  space: hwb;\n  channels: 207.2727272727deg 13.3333333333% 13.3333333333% / 1;\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(\n  color.to-space(rgb(50.123456789 100.987654321 200.192837465), hwb)\n);\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  value: hsl(219.6637272829, 59.9519025013%, 49.0816263243%);\n  space: hwb;\n  channels: 219.6637272829deg 19.6562575643% 21.4930049157% / 1;\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color.change(rgb(0, 100, 0), $red: -50, $blue: 400), hwb));\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  value: hsl(220, 281.25%, 68.6274509804%);\n  space: hwb;\n  channels: 220deg -19.6078431373% -56.862745098% / 1;\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(color.change(black, $red: -999999), hwb));\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  value: hsl(0, 100%, -196078.2352941177%);\n  space: hwb;\n  channels: 180deg -392156.4705882354% 100% / 1;\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(rgb(10 20 30 / 0.4), hwb));\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  value: hsla(210, 50%, 7.8431372549%, 0.4);\n  space: hwb;\n  channels: 210deg 3.9215686275% 88.2352941176% / 0.4;\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(rgb(10 20 30 / 0.0), hwb));\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  value: hsla(210, 50%, 7.8431372549%, 0);\n  space: hwb;\n  channels: 210deg 3.9215686275% 88.2352941176% / 0;\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(rgb(none 20 30), hwb));\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  value: #00141e;\n  space: hwb;\n  channels: 200deg 0% 88.2352941176% / 1;\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\n@include utils.inspect(color.to-space(rgb(10 none 30), hwb));\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  value: #0a001e;\n  space: hwb;\n  channels: 260deg 0% 88.2352941176% / 1;\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\n@use \'core_functions/color/utils\';\na {b: color.to-space(rgb(10 20 none), hwb)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: #0a1400;\n}\n',
  },
]
