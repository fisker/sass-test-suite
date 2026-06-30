// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/nested_rules_with_declarations.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  ump: nump;\n  grump: clump;\n  bar {\n    blat: bang;\n    habit: rabbit;\n    baz {a: b}\n    bip {c: d}}\n  bibble {\n    bap {e: f}}}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  ump: nump;\n  grump: clump;\n}\nfoo bar {\n  blat: bang;\n  habit: rabbit;\n}\nfoo bar baz {\n  a: b;\n}\nfoo bar bip {\n  c: d;\n}\nfoo bibble bap {\n  e: f;\n}\n',
  },
]
