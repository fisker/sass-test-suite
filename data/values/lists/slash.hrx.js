// https://github.com/sass/sass-spec/blob/HEAD/spec/values/lists/slash.hrx

export default [
  {
    name: 'README.md',
    data: 'These specs test how slash-separated lists are rendered, and verify that they\nbehave like any other list once created. These lists are created using\nlist.slash() for convenience, but the same principles apply no matter how the\nlists are created.\n',
  },
  {
    name: 'output/nested/in/space/input.scss',
    data: '@use "sass:list";\na {b: list.slash(c, d) list.slash(e, f)}\n',
  },
  {
    name: 'output/nested/in/space/output.css',
    data: 'a {\n  b: c / d e / f;\n}\n',
  },
  {
    name: 'output/nested/in/comma/input.scss',
    data: '@use "sass:list";\na {b: list.slash(c, d), list.slash(e, f)}\n',
  },
  {
    name: 'output/nested/in/comma/output.css',
    data: 'a {\n  b: c / d, e / f;\n}\n',
  },
  {
    name: 'output/nested/in/slash/input.scss',
    data: '@use "sass:list";\na {b: list.slash(list.slash(c, d), list.slash(e, f))}\n',
  },
  {
    name: 'output/nested/in/slash/output.css',
    data: 'a {\n  b: c / d / e / f;\n}\n',
  },
  {
    name: 'output/nested/outside/space/input.scss',
    data: '@use "sass:list";\na {b: list.slash(c d, e f)}\n',
  },
  {
    name: 'output/nested/outside/space/output.css',
    data: 'a {\n  b: c d / e f;\n}\n',
  },
  {
    name: 'output/nested/comma_in/slash/input.scss',
    data: '@use "sass:list";\na {b: list.slash((c, d), (e, f))}\n',
  },
  {
    name: 'output/nested/comma_in/slash/output.css',
    data: 'a {\n  b: c, d / e, f;\n}\n',
  },
  {
    name: 'output/bracketed_slash/input.scss',
    data: '@use "sass:list";\n// CSS doesn\'t use slash-separated bracketed lists, but Sass supports them in\n// case one day that changes.\na {b: list.join(c d, e f, $separator: slash, $bracketed: true)}\n',
  },
  {
    name: 'output/bracketed_slash/output.css',
    data: 'a {\n  b: [c / d / e / f];\n}\n',
  },
  {
    name: 'functions/length/input.scss',
    data: '@use "sass:list";\na {b: list.length(list.slash(c, d, e, f, g))}\n',
  },
  {
    name: 'functions/length/output.css',
    data: 'a {\n  b: 5;\n}\n',
  },
  {
    name: 'functions/nth/input.scss',
    data: '@use "sass:list";\na {b: list.nth(list.slash(c, d, e, f, g), 3)}\n',
  },
  {
    name: 'functions/nth/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
]
