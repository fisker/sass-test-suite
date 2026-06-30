// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/extend/optional_and_mandatory.hrx

export default [
  {
    name: 'README.md',
    data: 'If an optional and a mandatory version of the same extension both exist, the\nmandatory version should be marked as having successfully matched.\n',
  },
  {
    name: 'same_file/input.scss',
    data: '@use "other";\n\nin-input {\n  @extend in-other !optional;\n  @extend in-other;\n}\n',
  },
  {
    name: 'same_file/_other.scss',
    data: 'in-other {x: y}\n',
  },
  {
    name: 'same_file/output.css',
    data: 'in-other, in-input {\n  x: y;\n}\n',
  },
  {
    name: 'different_files/optional_first/input.scss',
    data: '@use "optional";\n@use "mandatory";\n',
  },
  {
    name: 'different_files/optional_first/_optional.scss',
    data: '@use "shared";\n\ndownstream {@extend in-other !optional};\n',
  },
  {
    name: 'different_files/optional_first/_mandatory.scss',
    data: '@use "shared";\n\ndownstream {@extend in-other};\n',
  },
  {
    name: 'different_files/optional_first/_shared.scss',
    data: 'in-other {x: y}\n',
  },
  {
    name: 'different_files/optional_first/output.css',
    data: 'in-other, downstream {\n  x: y;\n}\n',
  },
  {
    name: 'different_files/mandatory_first/input.scss',
    data: '@use "mandatory";\n@use "optional";\n',
  },
  {
    name: 'different_files/mandatory_first/_optional.scss',
    data: '@use "shared";\n\ndownstream {@extend in-other !optional};\n',
  },
  {
    name: 'different_files/mandatory_first/_mandatory.scss',
    data: '@use "shared";\n\ndownstream {@extend in-other};\n',
  },
  {
    name: 'different_files/mandatory_first/_shared.scss',
    data: 'in-other {x: y}\n',
  },
  {
    name: 'different_files/mandatory_first/output.css',
    data: 'in-other, downstream {\n  x: y;\n}\n',
  },
]
