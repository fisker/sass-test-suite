// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/extend/diamond.hrx

export default [
  {
    name: 'merge/input.scss',
    data: '// Sibling modules can\'t extend one another\'s selectors, but they can be merged\n// together into the same selector list if they extend the same thing. If they\n// are, they should be optimized with respect to one another.\n//\n// In this case, _left.scss causes the selector ".a.a" to be generated, which is\n// simplified to ".a". Then _right.scss causes ".a.b" to be generated. ".a" is a\n// superselector of ".a.b" and ".a" has the same specificity as the extender,\n// ".b", so ".a.b" can (and should) be optimized away.\n@use "left";\n@use "right";\n',
  },
  {
    name: 'merge/_left.scss',
    data: '@use "other";\n\n.a {@extend %in-other}\n',
  },
  {
    name: 'merge/_right.scss',
    data: '@use "other";\n\n.b {@extend %in-other}\n',
  },
  {
    name: 'merge/_other.scss',
    data: '%in-other.a {x: y}\n',
  },
  {
    name: 'merge/output.css',
    data: '.a {\n  x: y;\n}\n',
  },
  {
    name: 'dependency/with_midstream_extend/input.scss',
    data: '@use "left";\n@use "right";\n',
  },
  {
    name: 'dependency/with_midstream_extend/_left.scss',
    data: '@use "midstream";\nin-left {\n  @extend in-midstream;\n  w: x;\n}\n',
  },
  {
    name: 'dependency/with_midstream_extend/_right.scss',
    data: '@use "midstream";\nin-right {\n  @extend in-midstream;\n  y: z;\n}\n',
  },
  {
    name: 'dependency/with_midstream_extend/_midstream.scss',
    data: '@use "upstream";\nin-midstream {@extend in-upstream}\n',
  },
  {
    name: 'dependency/with_midstream_extend/_upstream.scss',
    data: 'in-upstream {a: b}\n',
  },
  {
    name: 'dependency/with_midstream_extend/output.css',
    data: 'in-upstream, in-midstream, in-right, in-left {\n  a: b;\n}\n\nin-left {\n  w: x;\n}\n\nin-right {\n  y: z;\n}\n',
  },
]
