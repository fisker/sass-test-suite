export default [
  {
    name: 'README.md',
    data: 'These will be errors in Dart Sass 2.0.0.\n',
  },
  {
    name: 'matching/dash/input.scss',
    data: '@use "other" with ($-a: b);\n',
  },
  {
    name: 'matching/dash/_other.scss',
    data: '$-a: c !default;\nd {e: $-a}\n',
  },
  {
    name: 'matching/dash/output.css',
    data: 'd {\n  e: b;\n}\n',
  },
  {
    name: 'matching/dash/warning',
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n1 | @use "other" with ($-a: b);\n  |                    ^^^\n  \'\n    input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'matching/underscore/input.scss',
    data: '@use "other" with ($_a: b);\n',
  },
  {
    name: 'matching/underscore/_other.scss',
    data: '$_a: c !default;\nd {e: $_a}\n',
  },
  {
    name: 'matching/underscore/output.css',
    data: 'd {\n  e: b;\n}\n',
  },
  {
    name: 'matching/underscore/warning',
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n1 | @use "other" with ($_a: b);\n  |                    ^^^\n  \'\n    input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'different/input.scss',
    data: '@use "other" with ($-a: b);\n',
  },
  {
    name: 'different/_other.scss',
    data: '$_a: c !default;\nd {e: $_a}\n',
  },
  {
    name: 'different/output.css',
    data: 'd {\n  e: b;\n}\n',
  },
  {
    name: 'different/warning',
    data: 'DEPRECATION WARNING [with-private]: Configuring private variables is deprecated.\nThis will be an error in Dart Sass 2.0.0.\n\n  ,\n1 | @use "other" with ($-a: b);\n  |                    ^^^\n  \'\n    input.scss 1:20  root stylesheet\n',
  },
]
