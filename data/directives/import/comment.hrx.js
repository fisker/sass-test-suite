// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/comment.hrx

export default [
  {
    name: 'before_url/loud/input.scss',
    data: '@import /**/ "a.css"\n',
  },
  {
    name: 'before_url/loud/output.css',
    data: '@import "a.css";\n',
  },
  {
    name: 'before_url/silent/input.scss',
    data: '@import //\n  "a.css"\n',
  },
  {
    name: 'before_url/silent/output.css',
    data: '@import "a.css";\n',
  },
  {
    name: 'after_url/loud/input.scss',
    data: '@import "a.css" /**/\n',
  },
  {
    name: 'after_url/loud/output.css',
    data: '@import "a.css";\n',
  },
  {
    name: 'after_url/silent/input.scss',
    data: '@import "a.css" //\n',
  },
  {
    name: 'after_url/silent/output.css',
    data: '@import "a.css";\n',
  },
  {
    name: 'before_comma/loud/input.scss',
    data: '@import "a.css" /**/, "b.css"\n',
  },
  {
    name: 'before_comma/loud/output.css',
    data: '@import "a.css";\n@import "b.css";\n',
  },
  {
    name: 'before_comma/silent/input.scss',
    data: '@import "a.css" //\n  , "b.css"\n',
  },
  {
    name: 'before_comma/silent/output.css',
    data: '@import "a.css";\n@import "b.css";\n',
  },
  {
    name: 'after_comma/loud/input.scss',
    data: '@import "a.css", /**/ "b.css"\n',
  },
  {
    name: 'after_comma/loud/output.css',
    data: '@import "a.css";\n@import "b.css";\n',
  },
  {
    name: 'after_comma/silent/input.scss',
    data: '@import "a.css", //\n  "b.css"\n',
  },
  {
    name: 'after_comma/silent/output.css',
    data: '@import "a.css";\n@import "b.css";\n',
  },
  {
    name: 'modifier/no_args/before/loud/input.scss',
    data: '@import "a.css" /**/ b\n',
  },
  {
    name: 'modifier/no_args/before/loud/output.css',
    data: '@import "a.css" b;\n',
  },
  {
    name: 'modifier/no_args/before/silent/input.scss',
    data: '@import "a.css" //\n  b\n',
  },
  {
    name: 'modifier/no_args/before/silent/output.css',
    data: '@import "a.css" b;\n',
  },
  {
    name: 'modifier/no_args/after/loud/input.scss',
    data: '@import "a.css" b /**/\n',
  },
  {
    name: 'modifier/no_args/after/loud/output.css',
    data: '@import "a.css" b;\n',
  },
  {
    name: 'modifier/no_args/after/silent/input.scss',
    data: '@import "a.css" b //\n',
  },
  {
    name: 'modifier/no_args/after/silent/output.css',
    data: '@import "a.css" b;\n',
  },
  {
    name: 'modifier/args/before/loud/input.scss',
    data: '@import "a.css" /**/ b(c)\n',
  },
  {
    name: 'modifier/args/before/loud/output.css',
    data: '@import "a.css" b(c);\n',
  },
  {
    name: 'modifier/args/before/silent/input.scss',
    data: '@import "a.css" //\n  b(c)\n',
  },
  {
    name: 'modifier/args/before/silent/output.css',
    data: '@import "a.css" b(c);\n',
  },
  {
    name: 'modifier/args/after_open_paren/loud/input.scss',
    data: '@import "a.css" b(/**/ c)\n',
  },
  {
    name: 'modifier/args/after_open_paren/loud/output.css',
    data: '@import "a.css" b(/**/ c);\n',
  },
  {
    name: 'modifier/args/after_open_paren/silent/input.scss',
    data: '@import "a.css" b(c)\n',
  },
  {
    name: 'modifier/args/after_open_paren/silent/output.css',
    data: '@import "a.css" b(c);\n',
  },
  {
    name: 'modifier/args/before_close_paren/loud/input.scss',
    data: '@import "a.css" b(c /**/)\n',
  },
  {
    name: 'modifier/args/before_close_paren/loud/output.css',
    data: '@import "a.css" b(c /**/);\n',
  },
  {
    name: 'modifier/args/before_close_paren/silent/input.scss',
    data: '@import "a.css" b(c)\n',
  },
  {
    name: 'modifier/args/before_close_paren/silent/output.css',
    data: '@import "a.css" b(c);\n',
  },
  {
    name: 'modifier/args/after/loud/input.scss',
    data: '@import "a.css" b(c) /**/\n',
  },
  {
    name: 'modifier/args/after/loud/output.css',
    data: '@import "a.css" b(c);\n',
  },
  {
    name: 'modifier/args/after/silent/input.scss',
    data: '@import "a.css" b(c) //\n',
  },
  {
    name: 'modifier/args/after/silent/output.css',
    data: '@import "a.css" b(c);\n',
  },
]
