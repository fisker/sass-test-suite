// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/zero-compression.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n\n$orig: 0.12em;\n$value: (0.12em);\n$score: (item-height: 0.12em);\nfoo {\n    tst-1: 0 -#{0.12em};\n    tst-2: 0 -#{$orig};\n    tst-3: 0 -#{$value};\n    tst-4: 0 -#{map.get($score, item-height)};\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  tst-1: 0 -0.12em;\n  tst-2: 0 -0.12em;\n  tst-3: 0 -0.12em;\n  tst-4: 0 -0.12em;\n}\n',
  },
]
