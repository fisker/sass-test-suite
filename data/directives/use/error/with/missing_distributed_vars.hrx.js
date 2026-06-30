export default [
  {
    name: 'README.md',
    data: 'A module may load different sets of variables across multiple files triggering\nvalidation of re-using the same module configuration multiple times.\n\nThese tests verify the configuration is reused by opaque ID across multiple\nsource files preventing unexpected behaviors when variables are declared on\nseparate files with validations that occur when a module is used more than once.\n\n',
  },
  {
    name: 'single_use/input.scss',
    data: "@use 'module' with (\n  $a: 'a',\n  $b: 'b',\n  $missing: 'c',\n);\n",
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
    name: 'single_use/error',
    data: "Error: This variable was not declared with !default in the @used module.\n  ,\n4 |   $missing: 'c',\n  |   ^^^^^^^^^^^^^\n  '\n  input.scss 4:3  root stylesheet\n",
  },
  {
    name: 'multi_use/input.scss',
    data: "@use 'module' with (\n  $a: 'a',\n  $b: 'b',\n  $missing: 'c',\n);\n",
  },
  {
    name: 'multi_use/module/_index.scss',
    data: "@forward './a/a1';\n@forward './a/a2';\n@forward './b/b';\n",
  },
  {
    name: 'multi_use/module/a/_variables.scss',
    data: '$a: default !default;\n',
  },
  {
    name: 'multi_use/module/a/a1.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.a1 {\n  content: #{$a};\n}\n",
  },
  {
    name: 'multi_use/module/a/a2.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.a2 {\n  content: #{$a};\n}\n",
  },
  {
    name: 'multi_use/module/b/_variables.scss',
    data: '$b: default !default;\n',
  },
  {
    name: 'multi_use/module/b/b.scss',
    data: "@forward './variables';\n@use './variables' as *;\n\n.b {\n  content: #{$b};\n}\n",
  },
  {
    name: 'multi_use/error',
    data: "Error: This variable was not declared with !default in the @used module.\n  ,\n4 |   $missing: 'c',\n  |   ^^^^^^^^^^^^^\n  '\n  input.scss 4:3  root stylesheet\n",
  },
]
