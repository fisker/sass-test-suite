export default [
  {
    name: 'optional_and_mandatory/README.md',
    data: 'If an optional and a mandatory version of the same extension both exist, the\nmandatory version should still fail.\n',
  },
  {
    name: 'optional_and_mandatory/same_file/input.scss',
    data: '@use "other";\n\nin-input {\n  @extend %-in-other !optional;\n  @extend %-in-other;\n}\n',
  },
  {
    name: 'optional_and_mandatory/same_file/_other.scss',
    data: '%-in-other {x: y}\n',
  },
  {
    name: 'optional_and_mandatory/same_file/error',
    data: 'Error: The target selector was not found.\nUse "@extend %-in-other !optional" to avoid this error.\n  ,\n5 |   @extend %-in-other;\n  |   ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 5:3  root stylesheet\n',
  },
  {
    name: 'optional_and_mandatory/different_files/input.scss',
    data: '@use "optional";\n@use "mandatory";\n',
  },
  {
    name: 'optional_and_mandatory/different_files/_optional.scss',
    data: '@use "shared";\n\ndownstream {@extend %-in-other !optional};\n',
  },
  {
    name: 'optional_and_mandatory/different_files/_mandatory.scss',
    data: '@use "shared";\n\ndownstream {@extend %-in-other};\n',
  },
  {
    name: 'optional_and_mandatory/different_files/_shared.scss',
    data: '%-in-other {x: y}\n',
  },
  {
    name: 'optional_and_mandatory/different_files/error',
    data: 'Error: The target selector was not found.\nUse "@extend %-in-other !optional" to avoid this error.\n  ,\n3 | downstream {@extend %-in-other};\n  |             ^^^^^^^^^^^^^^^^^^\n  \'\n  _mandatory.scss 3:13  root stylesheet\n',
  },
  {
    name: 'scope/README.md',
    data: "All tests in this directory use mandatory extends to test extensions that don't\nhave matches. Each test should have a counterpart in the non-error extend tests\nthat tests the same thing but with `!optional` to verify that it doesn't produce\nan error message.\n",
  },
  {
    name: 'scope/sibling/input.scss',
    data: '@use "left";\n@use "right";\n',
  },
  {
    name: 'scope/sibling/_left.scss',
    data: 'left-extendee {in: left}\nleft-extender {@extend right-extendee}\n',
  },
  {
    name: 'scope/sibling/_right.scss',
    data: 'right-extendee {in: right}\n',
  },
  {
    name: 'scope/sibling/error',
    data: 'Error: The target selector was not found.\nUse "@extend right-extendee !optional" to avoid this error.\n  ,\n2 | left-extender {@extend right-extendee}\n  |                ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  _left.scss 2:16  root stylesheet\n',
  },
  {
    name: 'scope/downstream/input.scss',
    data: '@use "other";\n\nin-input {x: y}\n',
  },
  {
    name: 'scope/downstream/_other.scss',
    data: 'in-other {@extend in-input}\n',
  },
  {
    name: 'scope/downstream/error',
    data: 'Error: The target selector was not found.\nUse "@extend in-input !optional" to avoid this error.\n  ,\n1 | in-other {@extend in-input}\n  |           ^^^^^^^^^^^^^^^^\n  \'\n  _other.scss 1:11  root stylesheet\n',
  },
  {
    name: 'scope/private/input.scss',
    data: '@use "other";\n\nin-input {@extend %-in-other}\n',
  },
  {
    name: 'scope/private/_other.scss',
    data: '%-in-other {x: y}\n\nin-other {@extend %-in-other}\n',
  },
  {
    name: 'scope/private/error',
    data: 'Error: The target selector was not found.\nUse "@extend %-in-other !optional" to avoid this error.\n  ,\n3 | in-input {@extend %-in-other}\n  |           ^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 3:11  root stylesheet\n',
  },
  {
    name: 'scope/diamond/input.scss',
    data: '// Even though left-extendee and right-extendee both end up in the style rule\n// defined in _shared.scss, they aren\'t extended by the other file because those\n// files don\'t use one another.\n@use "left";\n@use "right";\n',
  },
  {
    name: 'scope/diamond/_left.scss',
    data: '@use "shared";\n\nleft-extendee {@extend in-shared}\nleft-extender {@extend right-extendee}\n',
  },
  {
    name: 'scope/diamond/_right.scss',
    data: '@use "shared";\n\nright-extendee {@extend in-shared}\n',
  },
  {
    name: 'scope/diamond/_shared.scss',
    data: 'in-shared {x: y}\n',
  },
  {
    name: 'scope/diamond/error',
    data: 'Error: The target selector was not found.\nUse "@extend right-extendee !optional" to avoid this error.\n  ,\n4 | left-extender {@extend right-extendee}\n  |                ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  _left.scss 4:16  root stylesheet\n',
  },
]
