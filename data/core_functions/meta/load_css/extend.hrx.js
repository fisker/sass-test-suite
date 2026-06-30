export default [
  {
    name: 'in_input/before/input.scss',
    data: '@use "sass:meta";\n\nd {@extend a}\n@include meta.load-css("other");\n',
  },
  {
    name: 'in_input/before/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'in_input/before/output.css',
    data: 'a, d {\n  b: c;\n}\n',
  },
  {
    name: 'in_input/after/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n\nd {@extend a}\n',
  },
  {
    name: 'in_input/after/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'in_input/after/output.css',
    data: 'a, d {\n  b: c;\n}\n',
  },
  {
    name: 'in_other/README.md',
    data: "Extensions in `_other.scss` don't affect syles in `input.scss`, both because\n`input.scss` is downstream and because the CSS in `_other.scss` is fully\nresolved before it's loaded.\n",
  },
  {
    name: 'in_other/before/input.scss',
    data: '@use "sass:meta";\n\na {b: c}\n@include meta.load-css("other");\n',
  },
  {
    name: 'in_other/before/_other.scss',
    data: 'd {@extend a !optional}\n',
  },
  {
    name: 'in_other/before/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'in_other/after/input.scss',
    data: '@use "sass:meta";\n\n@include meta.load-css("other");\na {b: c}\n',
  },
  {
    name: 'in_other/after/_other.scss',
    data: 'd {@extend a !optional}\n',
  },
  {
    name: 'in_other/after/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'shared_cssless_midstream/input.scss',
    data: "// Regression test for sass/sass#3322\n@use 'sass:meta';\n@use 'target';\n\n@include meta.load-css('extender');\n",
  },
  {
    name: 'shared_cssless_midstream/extender.scss',
    data: "@use 'target';\n\n.extender {\n  @extend .target;\n}\n",
  },
  {
    name: 'shared_cssless_midstream/_target.scss',
    data: "@use 'midstream';\n\n.target {a: b}\n",
  },
  {
    name: 'shared_cssless_midstream/_midstream.scss',
    data: "@use 'upstream';\n",
  },
  {
    name: 'shared_cssless_midstream/_upstream.scss',
    data: '@c;\n',
  },
  {
    name: 'shared_cssless_midstream/output.css',
    data: '@c;\n.target {\n  a: b;\n}\n\n@c;\n.target, .extender {\n  a: b;\n}\n',
  },
]
