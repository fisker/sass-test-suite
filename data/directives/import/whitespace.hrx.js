export default [
  {
    name: 'before_url/scss/input.scss',
    data: '@import\n  "a.css"\n',
  },
  {
    name: 'before_url/scss/output.css',
    data: '@import "a.css";\n',
  },
  {
    name: 'after_comma/sass/input.scss',
    data: '@import "a.css",\n  "b.css"\n',
  },
  {
    name: 'after_comma/sass/output.css',
    data: '@import "a.css";\n@import "b.css";\n',
  },
  {
    name: 'after_comma/scss/input.scss',
    data: '@import "a.css",\n  "b.css"\n',
  },
  {
    name: 'after_comma/scss/output.css',
    data: '@import "a.css";\n@import "b.css";\n',
  },
  {
    name: 'modifier/no_args/before/sass/input.scss',
    data: '@import "a.css"\n  b\n',
  },
  {
    name: 'modifier/no_args/before/sass/output.css',
    data: '@import "a.css" b;\n',
  },
  {
    name: 'modifier/no_args/before/scss/input.scss',
    data: '@import "a.css"\n  b\n',
  },
  {
    name: 'modifier/no_args/before/scss/output.css',
    data: '@import "a.css" b;\n',
  },
  {
    name: 'modifier/args/before/scss/input.scss',
    data: '@import "a.css"\n  b(c)\n',
  },
  {
    name: 'modifier/args/before/scss/output.css',
    data: '@import "a.css" b(c);\n',
  },
  {
    name: 'modifier/args/after_open_paren/scss/input.scss',
    data: '@import "a.css" b(\n  c)\n',
  },
  {
    name: 'modifier/args/after_open_paren/scss/output.css',
    data: '@import "a.css" b(\n  c);\n',
  },
  {
    name: 'modifier/args/after_open_paren/sass/input.sass',
    data: '@import "a.css" b(\n  c)\n',
  },
  {
    name: 'modifier/args/after_open_paren/sass/output.css',
    data: '@import "a.css" b(\n  c);\n',
  },
  {
    name: 'modifier/args/before_close_paren/scss/input.scss',
    data: '@import "a.css" b(c\n  )\n',
  },
  {
    name: 'modifier/args/before_close_paren/scss/output.css',
    data: '@import "a.css" b(c\n  );\n',
  },
  {
    name: 'modifier/args/before_close_paren/sass/input.sass',
    data: '@import "a.css" b(c\n  )\n',
  },
  {
    name: 'modifier/args/before_close_paren/sass/output.css',
    data: '@import "a.css" b(c\n  );\n',
  },
  {
    name: 'before_comma/scss/input.scss',
    data: '@import "a.css"\n  , "b.css"\n',
  },
  {
    name: 'before_comma/scss/output.css',
    data: '@import "a.css";\n@import "b.css";\n',
  },
  {
    name: 'error/before_url/sass/input.sass',
    data: '@import\n  "a.css"\n',
  },
  {
    name: 'error/before_url/sass/error',
    data: 'Error: Nothing may be indented beneath a @import rule.\n  ,\n2 |   "a.css"\n  |   ^\n  \'\n  input.sass 2:3  root stylesheet\n',
  },
  {
    name: 'error/before_comma/sass/input.sass',
    data: '@import "a.css"\n  , "b.css"\n',
  },
  {
    name: 'error/before_comma/sass/error',
    data: 'Error: Nothing may be indented beneath a @import rule.\n  ,\n2 |   , "b.css"\n  |   ^\n  \'\n  input.sass 2:3  root stylesheet\n',
  },
  {
    name: 'error/modifier/args/before/sass/input.sass',
    data: '@import "a.css"\n  b(c)\n',
  },
  {
    name: 'error/modifier/args/before/sass/error',
    data: "Error: Nothing may be indented beneath a @import rule.\n  ,\n2 |   b(c)\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
]
