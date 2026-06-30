export default [
  {
    name: 'extended/from_same_file/input.scss',
    data: '@use "other";\n\nin-input {@extend in-other-extender}\n',
  },
  {
    name: 'extended/from_same_file/_other.scss',
    data: 'in-other-extender {@extend in-other-extendee}\n\nin-other-extendee {x: y}\n',
  },
  {
    name: 'extended/from_same_file/output.css',
    data: 'in-other-extendee, in-other-extender, in-input {\n  x: y;\n}\n',
  },
  {
    name: 'extended/from_other_file/input.scss',
    data: '@use "midstream";\n\nin-input {@extend in-midstream}\n',
  },
  {
    name: 'extended/from_other_file/_midstream.scss',
    data: '@use "upstream";\n\nin-midstream {@extend in-upstream}\n',
  },
  {
    name: 'extended/from_other_file/_upstream.scss',
    data: 'in-upstream {x: y}\n',
  },
  {
    name: 'extended/from_other_file/output.css',
    data: 'in-upstream, in-midstream, in-input {\n  x: y;\n}\n',
  },
]
