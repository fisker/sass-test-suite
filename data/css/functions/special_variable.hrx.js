// https://github.com/sass/sass-spec/blob/HEAD/spec/css/functions/special_variable.hrx

export default [
  {
    name: 'README.md',
    data: "There are numerous places in Sass where special variable strings are handled\nspecially or allowed to take the place of multiple arguments. We don't\nexplicitly test all types of special variable strings in all those locations\nbecause doing so would cause a combinatorial explosion; instead, we generally\ntest `var()` everywhere and validate here that at least `rgb()` accepts all\nspecial variable strings.\n\nImplementations are still expected to support all special variable strings\neverywhere that `var()` is accepted, as indicated by the Sass spec.\n",
  },
  {
    name: 'var/input.scss',
    data: 'a {b: rgb(var(--c))}\n',
  },
  {
    name: 'var/output.css',
    data: 'a {\n  b: rgb(var(--c));\n}\n',
  },
  {
    name: 'attr/input.scss',
    data: 'a {b: rgb(attr(c))}\n',
  },
  {
    name: 'attr/output.css',
    data: 'a {\n  b: rgb(attr(c));\n}\n',
  },
  {
    name: 'if/input.scss',
    data: 'a {b: rgb(if(css(): c))}\n',
  },
  {
    name: 'if/output.css',
    data: 'a {\n  b: rgb(if(css(): c));\n}\n',
  },
]
