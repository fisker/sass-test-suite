export default [
  {
    name: 'README.md',
    data: "Unlike other pseudo-selectors, when extending into `:not()` we add additional\n`:not()`s to the compound selector, rather than adding selectors within the\noriginal `:not()`. We're able to do this because (uniquely among selector\npseudos) `:not(X, Y)` is equivalent to `:not(X):not(Y)`. We *want* to do this\nbecause older browsers only support a compound selector within `:not()` rather\nthan a selector list.\n",
  },
  {
    name: 'simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ".d")}\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b: :not(.c):not(.d);\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ".d, .e")}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  b: :not(.c):not(.d):not(.e);\n}\n',
  },
  {
    name: 'complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c .d)", ".d", ".e .f")}\n',
  },
  {
    name: 'complex/output.css',
    data: 'a {\n  b: :not(.c .d):not(.c .e .f):not(.e .c .f);\n}\n',
  },
  {
    name: 'component/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c.d)", ".c", ".e")}\n',
  },
  {
    name: 'component/output.css',
    data: 'a {\n  b: :not(.c.d):not(.d.e);\n}\n',
  },
  {
    name: 'list_in_not/input.scss',
    data: '@use "sass:selector";\n// If the original :not() already contains a selector list, we add new selectors\n// to that list because there\'s no risk of breaking additional browsers.\na {b: selector.extend(":not(.c, .d)", ".c", ".e")}\n',
  },
  {
    name: 'list_in_not/output.css',
    data: 'a {\n  b: :not(.c, .e, .d);\n}\n',
  },
  {
    name: 'is/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ":is(.d, .e)")}\n',
  },
  {
    name: 'is/list/output.css',
    data: 'a {\n  b: :not(.c):not(.d):not(.e);\n}\n',
  },
  {
    name: 'is/list_of_complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ":is(.d .e, .f .g)")}\n',
  },
  {
    name: 'is/list_of_complex/output.css',
    data: 'a {\n  b: :not(.c):not(.d .e):not(.f .g);\n}\n',
  },
  {
    name: 'is/in_compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ".d:is(.e, .f)")}\n',
  },
  {
    name: 'is/in_compound/output.css',
    data: 'a {\n  b: :not(.c):not(.d:is(.e, .f));\n}\n',
  },
  {
    name: 'matches/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ":matches(.d, .e)")}\n',
  },
  {
    name: 'matches/list/output.css',
    data: 'a {\n  b: :not(.c):not(.d):not(.e);\n}\n',
  },
  {
    name: 'matches/list_of_complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ":matches(.d .e, .f .g)")}\n',
  },
  {
    name: 'matches/list_of_complex/output.css',
    data: 'a {\n  b: :not(.c):not(.d .e):not(.f .g);\n}\n',
  },
  {
    name: 'matches/in_compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ".d:matches(.e, .f)")}\n',
  },
  {
    name: 'matches/in_compound/output.css',
    data: 'a {\n  b: :not(.c):not(.d:matches(.e, .f));\n}\n',
  },
  {
    name: 'where/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ":where(.d, .e)")}\n',
  },
  {
    name: 'where/list/output.css',
    data: 'a {\n  b: :not(.c):not(.d):not(.e);\n}\n',
  },
  {
    name: 'where/list_of_complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ":where(.d .e, .f .g)")}\n',
  },
  {
    name: 'where/list_of_complex/output.css',
    data: 'a {\n  b: :not(.c):not(.d .e):not(.f .g);\n}\n',
  },
  {
    name: 'where/in_compound/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":not(.c)", ".c", ".d:where(.e, .f)")}\n',
  },
  {
    name: 'where/in_compound/output.css',
    data: 'a {\n  b: :not(.c):not(.d:where(.e, .f));\n}\n',
  },
  {
    name: 'not_in_extender/input.scss',
    data: '@use "sass:selector";\n// Ideally, this should emit `.d, :not(.c)`, but that would be the only\n// situation where extending a pseudo selector could produce a full-on selector\n// list. For the sake of simplicity of the `@extend` algorithm, we just ignore\n// nested `:not()`s instead.\na {b: selector.extend(":not(.c)", ".c", ":not(.d)")}\n',
  },
  {
    name: 'not_in_extender/output.css',
    data: 'a {\n  b: :not(.c);\n}\n',
  },
]
