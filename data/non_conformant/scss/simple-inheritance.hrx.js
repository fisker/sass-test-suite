// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/simple-inheritance.hrx

export default [
  {
    name: 'input.scss',
    data: 'earth {\n  mammal, bird {\n    blood: warm;\n  }\n}\n\nearth {\n  mammal {\n    produces-milk: true;\n  }\n}\n\n@mixin mammal-says($message) {\n  @extend mammal;\n  says: $message;\n}\n\ndog {\n  @include mammal-says("Woof!");\n}\n\ncat {\n  @include mammal-says("Meow.");\n}\n\nhorse, naysayer {\n  @include mammal-says("Nay.");\n}\n\n[hey] {\n  a: b;\n}\n\nho {\n  @extend [hey];\n  c: d;\n}\n\nfancy outer space vehicle {\n  insides: advanced;\n}\n\nnew american mars rover {\n  wheels: big;\n  @extend vehicle;\n}\n\nfoo {\n  something: whatever;\n}\n\na b c {\n  blah: blah;\n  @extend foo;\n}\n\nd e f {\n  blah: blah;\n}\n\ng {\n  @extend f;\n  bloo: bloo;\n}',
  },
  {
    name: 'output.css',
    data: 'earth mammal, earth horse, earth naysayer, earth cat, earth dog, earth bird {\n  blood: warm;\n}\n\nearth mammal, earth horse, earth naysayer, earth cat, earth dog {\n  produces-milk: true;\n}\n\ndog {\n  says: "Woof!";\n}\n\ncat {\n  says: "Meow.";\n}\n\nhorse, naysayer {\n  says: "Nay.";\n}\n\n[hey], ho {\n  a: b;\n}\n\nho {\n  c: d;\n}\n\nfancy outer space vehicle, fancy outer space new american mars rover, new american mars fancy outer space rover {\n  insides: advanced;\n}\n\nnew american mars rover {\n  wheels: big;\n}\n\nfoo, a b c {\n  something: whatever;\n}\n\na b c {\n  blah: blah;\n}\n\nd e f, d e g {\n  blah: blah;\n}\n\ng {\n  bloo: bloo;\n}\n',
  },
]
