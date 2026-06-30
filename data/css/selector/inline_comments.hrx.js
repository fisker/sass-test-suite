export default [
  {
    name: 'silent/comma_before/input.sass',
    data: 'a, // comment\nb\n  x: y\n',
  },
  {
    name: 'silent/comma_before/output.css',
    data: 'a,\nb {\n  x: y;\n}\n',
  },
  {
    name: 'silent/with_comma_in_comment/input.sass',
    data: '// A comma within a comment, even at the end of the line, should not cause the\n// parser to continue the selector on a new line, so this should parse as an\n// empty rule with selector "a", followed by the rule with selector "b".\na // comment,\nb\n  x: y\n',
  },
  {
    name: 'silent/with_comma_in_comment/output.css',
    data: 'b {\n  x: y;\n}\n',
  },
  {
    name: 'silent/with_comma_in_comment/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n4 | a // comment,\n  | ^^^^^^^^^^^^^\n  '\n    input.sass 4:1  root stylesheet\n",
  },
  {
    name: 'loud/comma_before/input.sass',
    data: 'a, /* comment */\nb\n  x: y\n',
  },
  {
    name: 'loud/comma_before/output.css',
    data: 'a,\nb {\n  x: y;\n}\n',
  },
  {
    name: 'loud/comma_after/input.sass',
    data: 'a /* comment */,\nb\n  x: y\n',
  },
  {
    name: 'loud/comma_after/output.css',
    data: 'a,\nb {\n  x: y;\n}\n',
  },
]
