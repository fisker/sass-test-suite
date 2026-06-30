// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/with/multi_load.hrx

export default [
  {
    name: 'README.md',
    data: 'If a module is first loaded with a configuration, future loads with no\nconfiguration will use the configured module.\n',
  },
  {
    name: 'use/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("upstream", $with: (a: configured));\n\n// We have to load this dynamically, because we can\'t have a `@use` after an\n// `@include`.\n@include meta.load-css("midstream");\n',
  },
  {
    name: 'use/_midstream.scss',
    data: '@use "upstream";\nb {c: upstream.$a}\n',
  },
  {
    name: 'use/_upstream.scss',
    data: '$a: original !default;\n',
  },
  {
    name: 'use/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'forward/input.scss',
    data: '// This indirection is necessary so that we can execute `meta.load-css()` before\n// we begin loading `midstream`.\n@use "loads";\n@use "midstream";\n\nb {c: midstream.$a}\n',
  },
  {
    name: 'forward/_loads.scss',
    data: '@use "sass:meta";\n@include meta.load-css("upstream", $with: (a: configured));\n',
  },
  {
    name: 'forward/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'forward/_upstream.scss',
    data: '$a: original !default;\n',
  },
  {
    name: 'forward/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'through_forward/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("forwarded");\n@include meta.load-css("midstream", $with: (a: overridden));\n',
  },
  {
    name: 'through_forward/_midstream.scss',
    data: '@forward "forwarded";\n\n$a: default !default;\nb {\n  midstream: $a;\n}\n',
  },
  {
    name: 'through_forward/_forwarded.scss',
    data: "// This file defines no variables, so it's allowed to be loaded with and without\n// configuration.\n",
  },
  {
    name: 'through_forward/output.css',
    data: 'b {\n  midstream: overridden;\n}\n',
  },
  {
    name: 'unused_configuration/double_load/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("upstream", $with: (a: configured));\n\n// An empty configuration map counts as no configuration.\n@include meta.load-css("midstream", $with: ());\n',
  },
  {
    name: 'unused_configuration/double_load/_midstream.scss',
    data: '@use "upstream";\nb {c: upstream.$a}\n',
  },
  {
    name: 'unused_configuration/double_load/_upstream.scss',
    data: '$a: original !default;\n',
  },
  {
    name: 'unused_configuration/double_load/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'unused_configuration/use_and_load/input.scss',
    data: '@use "sass:meta";\n@use "forwarded";\n@include meta.load-css("midstream", $with: (a: overridden));\n',
  },
  {
    name: 'unused_configuration/use_and_load/_midstream.scss',
    data: '@forward "forwarded";\n\n$a: default !default;\n\nb {\n  midstream: $a;\n}\n',
  },
  {
    name: 'unused_configuration/use_and_load/_forwarded.scss',
    data: "// This file defines no variables, so it's allowed to be loaded with and without\n// configuration.\n",
  },
  {
    name: 'unused_configuration/use_and_load/output.css',
    data: 'b {\n  midstream: overridden;\n}\n',
  },
]
