// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/with/distributed_vars.hrx

export default [
  {
    name: 'README.md',
    data: 'A module may load different sets of variables across multiple files triggering\nvalidation of re-using the same module configuration multiple times.\n\nThese tests verify the configuration is reused by opaque ID across multiple\nsource files preventing unexpected behaviors when variables are declared on\nseparate files with validations that occur when a module is used more than once.\n',
  },
  {
    name: 'single_use/input.scss',
    data: "@use 'module' with (\n  $a: 'a',\n  $b: 'b',\n);\n",
  },
  {
    name: 'single_use/module/_index.scss',
    data: "@forward './a/a';\n@forward './b/b';\n",
  },
  {
    name: 'single_use/module/a/_variables.scss',
    data: '$a: default !default;\n',
  },
  {
    name: 'single_use/module/a/a.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.a {\n  content: #{$a};\n}\n",
  },
  {
    name: 'single_use/module/b/_variables.scss',
    data: '$b: default !default;\n',
  },
  {
    name: 'single_use/module/b/b.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.b {\n  content: #{$b};\n}\n",
  },
  {
    name: 'single_use/output.css',
    data: '.a {\n  content: a;\n}\n.b {\n  content: b;\n}\n',
  },
  {
    name: 'repeated/input.scss',
    data: "@use 'module' with (\n  $a: 'a',\n  $b: 'b',\n);\n",
  },
  {
    name: 'repeated/module/_index.scss',
    data: "@forward './a/a1';\n@forward './a/a2';\n@forward './b/b';\n",
  },
  {
    name: 'repeated/module/a/_variables.scss',
    data: '$a: default !default;\n',
  },
  {
    name: 'repeated/module/a/a1.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.a1 {\n  content: #{$a};\n}\n",
  },
  {
    name: 'repeated/module/a/a2.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.a2 {\n  content: #{$a};\n}\n",
  },
  {
    name: 'repeated/module/b/_variables.scss',
    data: '$b: default !default;\n',
  },
  {
    name: 'repeated/module/b/b.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.b {\n  content: #{$b};\n}\n",
  },
  {
    name: 'repeated/output.css',
    data: '.a1 {\n  content: a;\n}\n.a2 {\n  content: a;\n}\n.b {\n  content: b;\n}\n',
  },
]
