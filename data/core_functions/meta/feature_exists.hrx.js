export default [
  {
    name: 'README.md',
    data: 'Obviously, an implementation should not report a feature as supported unless it\nactually fully supports that feature.\n',
  },
  {
    name: 'global_variable_shadowing/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(global-variable-shadowing)}\n',
  },
  {
    name: 'global_variable_shadowing/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'global_variable_shadowing/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(global-variable-shadowing)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'extend_selector_pseudoclass/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(extend-selector-pseudoclass)}\n',
  },
  {
    name: 'extend_selector_pseudoclass/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'extend_selector_pseudoclass/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(extend-selector-pseudoclass)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'units_level_3/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(units-level-3)}\n',
  },
  {
    name: 'units_level_3/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'units_level_3/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(units-level-3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'at_error/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(at-error)}\n',
  },
  {
    name: 'at_error/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'at_error/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(at-error)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'custom_property/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(custom-property)}\n',
  },
  {
    name: 'custom_property/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'custom_property/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(custom-property)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'unknown/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(unknown)}\n',
  },
  {
    name: 'unknown/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'unknown/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(unknown)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'dash_sensitive/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(at_error)}\n',
  },
  {
    name: 'dash_sensitive/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'dash_sensitive/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(at_error)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'quote_insensitive/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists("at-error")}\n',
  },
  {
    name: 'quote_insensitive/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'quote_insensitive/warning',
    data: 'DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists("at-error")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists($feature: at-error)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'named/warning',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists($feature: at-error)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "DEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n2 | a {b: meta.feature-exists(1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n\nError: $feature: 1 is not a string.\n  ,\n2 | a {b: meta.feature-exists(1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $feature.\n  ,--> input.scss\n2 | a {b: meta.feature-exists()}\n  |       ^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function feature-exists($feature) {\n  |           ======================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.feature-exists(at-error, custom-property)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: meta.feature-exists(at-error, custom-property)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function feature-exists($feature) {\n  |           ======================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
