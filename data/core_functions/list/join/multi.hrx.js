export default [
  {
    name: 'auto/separator/input.scss',
    data: '@use "sass:list";\na {b: list.join((c, d), e f, $separator: auto)}\n',
  },
  {
    name: 'auto/separator/output.css',
    data: 'a {\n  b: c, d, e, f;\n}\n',
  },
  {
    name: 'auto/bracketed/input.scss',
    data: '@use "sass:list";\na {b: list.join(c d, e f, $bracketed: auto)}\n',
  },
  {
    name: 'auto/bracketed/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'comma/both/input.scss',
    data: '@use "sass:list";\na {b: list.join((c, d), (e, f))}\n',
  },
  {
    name: 'comma/both/output.css',
    data: 'a {\n  b: c, d, e, f;\n}\n',
  },
  {
    name: 'comma/first/input.scss',
    data: '@use "sass:list";\na {b: list.join((c, d), e f)}\n',
  },
  {
    name: 'comma/first/output.css',
    data: 'a {\n  b: c, d, e, f;\n}\n',
  },
  {
    name: 'comma/second/input.scss',
    data: '@use "sass:list";\na {b: list.join(c d, (e, f))}\n',
  },
  {
    name: 'comma/second/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'comma/separator/forces_comma/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $separator: comma)}\n',
  },
  {
    name: 'comma/separator/forces_comma/output.css',
    data: 'a {\n  b: c, d;\n}\n',
  },
  {
    name: 'comma/separator/forces_not_comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((c, d), (e, f), $separator: space)}\n',
  },
  {
    name: 'comma/separator/forces_not_comma/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'space/both/input.scss',
    data: '@use "sass:list";\na {b: list.join(c d, e f)}\n',
  },
  {
    name: 'space/both/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'space/separator/forces_space/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $separator: space)}\n',
  },
  {
    name: 'space/separator/forces_space/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'space/separator/forces_not_space/input.scss',
    data: '@use "sass:list";\na {b: list.join(c d, e f, $separator: comma)}\n',
  },
  {
    name: 'space/separator/forces_not_space/output.css',
    data: 'a {\n  b: c, d, e, f;\n}\n',
  },
  {
    name: 'slash/both/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.slash(c, d), list.slash(e, f))}\n',
  },
  {
    name: 'slash/both/output.css',
    data: 'a {\n  b: c / d / e / f;\n}\n',
  },
  {
    name: 'slash/first/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.slash(c, d), e f)}\n',
  },
  {
    name: 'slash/first/output.css',
    data: 'a {\n  b: c / d / e / f;\n}\n',
  },
  {
    name: 'slash/second/input.scss',
    data: '@use "sass:list";\na {b: list.join(c d, list.slash(e, f))}\n',
  },
  {
    name: 'slash/second/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'slash/separator/forces_slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $separator: slash)}\n',
  },
  {
    name: 'slash/separator/forces_slash/output.css',
    data: 'a {\n  b: c / d;\n}\n',
  },
  {
    name: 'slash/separator/forces_not_slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.slash(c, d), list.slash(e, f), $separator: space)}\n',
  },
  {
    name: 'slash/separator/forces_not_slash/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'bracketed/both/input.scss',
    data: '@use "sass:list";\na {b: list.join([c d], [e f])}\n',
  },
  {
    name: 'bracketed/both/output.css',
    data: 'a {\n  b: [c d e f];\n}\n',
  },
  {
    name: 'bracketed/first/input.scss',
    data: '@use "sass:list";\na {b: list.join([c d], e f)}\n',
  },
  {
    name: 'bracketed/first/output.css',
    data: 'a {\n  b: [c d e f];\n}\n',
  },
  {
    name: 'bracketed/second/input.scss',
    data: '@use "sass:list";\na {b: list.join(c d, [e f])}\n',
  },
  {
    name: 'bracketed/second/output.css',
    data: 'a {\n  b: c d e f;\n}\n',
  },
  {
    name: 'bracketed/true/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $bracketed: true)}\n',
  },
  {
    name: 'bracketed/true/output.css',
    data: 'a {\n  b: [c d];\n}\n',
  },
  {
    name: 'bracketed/false/input.scss',
    data: '@use "sass:list";\na {b: list.join([c], [d], $bracketed: false)}\n',
  },
  {
    name: 'bracketed/false/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'bracketed/and_separator/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $bracketed: true, $separator: comma)}\n',
  },
  {
    name: 'bracketed/and_separator/output.css',
    data: 'a {\n  b: [c, d];\n}\n',
  },
  {
    name: 'bracketed/positional/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, comma, true)}\n',
  },
  {
    name: 'bracketed/positional/output.css',
    data: 'a {\n  b: [c, d];\n}\n',
  },
  {
    name: 'bracketed/truthy/input.scss',
    data: '@use "sass:list";\na {b: list.join(c, d, $bracketed: e)}\n',
  },
  {
    name: 'bracketed/truthy/output.css',
    data: 'a {\n  b: [c d];\n}\n',
  },
  {
    name: 'bracketed/falsey/input.scss',
    data: '@use "sass:list";\na {b: list.join([c], [d], $bracketed: null)}\n',
  },
  {
    name: 'bracketed/falsey/output.css',
    data: 'a {\n  b: c d;\n}\n',
  },
  {
    name: 'map/both/input.scss',
    data: '@use "sass:list";\na {b: list.join((c: d, e: f), (g: h, i: j))}\n',
  },
  {
    name: 'map/both/output.css',
    data: 'a {\n  b: c d, e f, g h, i j;\n}\n',
  },
  {
    name: 'map/first/space/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\na {b: meta.inspect(list.join((c: d, e: f), g h))}\n',
  },
  {
    name: 'map/first/space/output.css',
    data: 'a {\n  b: c d, e f, g, h;\n}\n',
  },
  {
    name: 'map/first/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((c: d, e: f), (g, h))}\n',
  },
  {
    name: 'map/first/comma/output.css',
    data: 'a {\n  b: c d, e f, g, h;\n}\n',
  },
  {
    name: 'map/first/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join((c: d, e: f), list.slash(g, h))}\n',
  },
  {
    name: 'map/first/slash/output.css',
    data: 'a {\n  b: c d, e f, g, h;\n}\n',
  },
  {
    name: 'map/second/space/input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n// Use inspect() to prove that the map is converted to a list of pairs.\na {b: meta.inspect(list.join(c d, (e: f, g: h)))}\n',
  },
  {
    name: 'map/second/space/output.css',
    data: 'a {\n  b: c d (e f) (g h);\n}\n',
  },
  {
    name: 'map/second/comma/input.scss',
    data: '@use "sass:list";\na {b: list.join((c, d), (e: f, g: h))}\n',
  },
  {
    name: 'map/second/comma/output.css',
    data: 'a {\n  b: c, d, e f, g h;\n}\n',
  },
  {
    name: 'map/second/slash/input.scss',
    data: '@use "sass:list";\na {b: list.join(list.slash(c, d), (e: f, g: h))}\n',
  },
  {
    name: 'map/second/slash/output.css',
    data: 'a {\n  b: c / d / e f / g h;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:list";\na {b: list.join($list1: a b, $list2: c d, $separator: comma, $bracketed: true)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: [a, b, c, d];\n}\n',
  },
]
