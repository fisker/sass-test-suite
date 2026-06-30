// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/space.hrx

export default [
  {
    name: 'clip/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(60% 0.13 240deg), $space: rgb, $method: clip)}\n',
  },
  {
    name: 'clip/in_gamut/output.css',
    data: 'a {\n  b: oklch(60% 0.13 240deg);\n}\n',
  },
  {
    name: 'clip/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(60% 0.15 240deg), $space: rgb, $method: clip)}\n',
  },
  {
    name: 'clip/out_of_gamut/output.css',
    data: 'a {\n  b: oklch(60.4068471201% 0.1443906236 242.3895367243deg);\n}\n',
  },
  {
    name: 'clip/missing/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(rgb(none none none), $method: clip)}\n',
  },
  {
    name: 'clip/missing/legacy/same/implicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'clip/missing/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(rgb(none none none), $space: rgb, $method: clip)}\n',
  },
  {
    name: 'clip/missing/legacy/same/explicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'clip/missing/legacy/same/with_mapping/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(rgb(none 0 none), $green: 300),\n    $method: clip\n  );\n}\n',
  },
  {
    name: 'clip/missing/legacy/same/with_mapping/output.css',
    data: 'a {\n  b: rgb(none 255 none);\n}\n',
  },
  {
    name: 'clip/missing/legacy/analogous/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(none 50% 50%), $space: hwb, $method: clip)}\n',
  },
  {
    name: 'clip/missing/legacy/analogous/legacy/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'clip/missing/legacy/analogous/modern/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(rgb(none none none), $space: display-p3, $method: clip)}\n',
  },
  {
    name: 'clip/missing/legacy/analogous/modern/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'clip/missing/modern/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb none none none), $method: clip)}\n',
  },
  {
    name: 'clip/missing/modern/same/implicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'clip/missing/modern/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb none none none), $space: srgb, $method: clip)}\n',
  },
  {
    name: 'clip/missing/modern/same/explicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'clip/missing/modern/same/with_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb none 1.2 none), $method: clip)}\n',
  },
  {
    name: 'clip/missing/modern/same/with_mapping/output.css',
    data: 'a {\n  b: color(srgb none 1 none);\n}\n',
  },
  {
    name: 'clip/missing/modern/analogous/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color(srgb none none none),\n    $space: display-p3,\n    $method: clip\n  );\n}\n',
  },
  {
    name: 'clip/missing/modern/analogous/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'clip/powerless/legacy/no_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(0deg 0% 20%), $space: srgb, $method: clip)}\n',
  },
  {
    name: 'clip/powerless/legacy/no_mapping/output.css',
    data: 'a {\n  b: hsl(0, 0%, 20%);\n}\n',
  },
  {
    name: 'clip/powerless/legacy/with_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(0deg 10% 1000%), $space: srgb, $method: clip)}\n',
  },
  {
    name: 'clip/powerless/legacy/with_mapping/output.css',
    data: 'a {\n  b: hsl(0, 0%, 100%);\n}\n',
  },
  {
    name: 'clip/powerless/modern/no_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(10% 0% 0deg), $space: srgb, $method: clip)}\n',
  },
  {
    name: 'clip/powerless/modern/no_mapping/output.css',
    data: 'a {\n  b: oklch(10% 0 none);\n}\n',
  },
  {
    name: 'clip/powerless/modern/with_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(lch(1000% 10% 0deg), $space: hsl, $method: clip)}\n',
  },
  {
    name: 'clip/powerless/modern/with_mapping/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
  {
    name: 'local_minde/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(60% 0.13 240deg), $space: rgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/in_gamut/output.css',
    data: 'a {\n  b: oklch(60% 0.13 240deg);\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(60% 0.15 240deg), $space: rgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/out_of_gamut/output.css',
    data: 'a {\n  b: oklch(60.4068471201% 0.1443906236 242.3895367243deg);\n}\n',
  },
  {
    name: 'local_minde/to_white/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(100% 0.13 240deg), $space: rgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_white/output.css',
    data: 'a {\n  b: oklch(100% 0 none);\n}\n',
  },
  {
    name: 'local_minde/to_black/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(0% 0.13 240deg), $space: rgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_black/output.css',
    data: 'a {\n  b: oklch(0% 0 none);\n}\n',
  },
  {
    name: 'local_minde/missing/legacy/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(rgb(none none none), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/missing/legacy/same/implicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'local_minde/missing/legacy/same/explicit/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(rgb(none none none), $space: rgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/missing/legacy/same/explicit/output.css',
    data: 'a {\n  b: rgb(none none none);\n}\n',
  },
  {
    name: 'local_minde/missing/legacy/same/with_mapping/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(rgb(none 0 none), $green: 300),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/missing/legacy/same/with_mapping/output.css',
    data: 'a {\n  b: rgb(220.0211077797, 255, 215.6454381401);\n}\n',
  },
  {
    name: 'local_minde/missing/legacy/analogous/legacy/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(none 50% 50%), $space: hwb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/missing/legacy/analogous/legacy/output.css',
    data: 'a {\n  b: hsl(0, 50%, 50%);\n}\n',
  },
  {
    name: 'local_minde/missing/legacy/analogous/modern/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    rgb(none none none),\n    $space: display-p3,\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/missing/legacy/analogous/modern/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'local_minde/missing/modern/same/implicit/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb none none none), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/missing/modern/same/implicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'local_minde/missing/modern/same/explicit/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color(srgb none none none),\n    $space: srgb,\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/missing/modern/same/explicit/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'local_minde/missing/modern/same/with_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb none 1.2 none), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/missing/modern/same/with_mapping/output.css',
    data: 'a {\n  b: color(srgb 0.9249489701 1 0.9135715783);\n}\n',
  },
  {
    name: 'local_minde/missing/modern/analogous/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color(srgb none none none),\n    $space: display-p3,\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/missing/modern/analogous/output.css',
    data: 'a {\n  b: color(srgb none none none);\n}\n',
  },
  {
    name: 'local_minde/powerless/legacy/no_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(0deg 0% 20%), $space: srgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/powerless/legacy/no_mapping/output.css',
    data: 'a {\n  b: hsl(0, 0%, 20%);\n}\n',
  },
  {
    name: 'local_minde/powerless/legacy/with_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(0deg 10% 1000%), $space: srgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/powerless/legacy/with_mapping/output.css',
    data: 'a {\n  b: hsl(0, 0%, 100%);\n}\n',
  },
  {
    name: 'local_minde/powerless/modern/no_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(oklch(10% 0% 0deg), $space: srgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/powerless/modern/no_mapping/output.css',
    data: 'a {\n  b: oklch(10% 0 none);\n}\n',
  },
  {
    name: 'local_minde/powerless/modern/with_mapping/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(lch(1000% 10% 0deg), $space: srgb, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/powerless/modern/with_mapping/output.css',
    data: 'a {\n  b: lch(100% 0 none);\n}\n',
  },
]
