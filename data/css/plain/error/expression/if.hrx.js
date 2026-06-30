export default [
  {
    name: 'sass/direct/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'sass/direct/plain.css',
    data: 'a {b: if(sass(true): c)}\n',
  },
  {
    name: 'sass/direct/error',
    data: "Error: sass() conditions aren't allowed in plain CSS\n  ,\n1 | a {b: if(sass(true): c)}\n  |          ^^^^^^^^^^\n  '\n  plain.css 1:10  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'sass/not/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'sass/not/plain.css',
    data: 'a {b: if(not sass(true): c)}\n',
  },
  {
    name: 'sass/not/error',
    data: "Error: sass() conditions aren't allowed in plain CSS\n  ,\n1 | a {b: if(not sass(true): c)}\n  |              ^^^^^^^^^^\n  '\n  plain.css 1:14  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'sass/and/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'sass/and/plain.css',
    data: 'a {b: if(sass(true) and css(): c)}\n',
  },
  {
    name: 'sass/and/error',
    data: "Error: sass() conditions aren't allowed in plain CSS\n  ,\n1 | a {b: if(sass(true) and css(): c)}\n  |          ^^^^^^^^^^\n  '\n  plain.css 1:10  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'sass/or/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'sass/or/plain.css',
    data: 'a {b: if(sass(true) or css(): c)}\n',
  },
  {
    name: 'sass/or/error',
    data: "Error: sass() conditions aren't allowed in plain CSS\n  ,\n1 | a {b: if(sass(true) or css(): c)}\n  |          ^^^^^^^^^^\n  '\n  plain.css 1:10  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'sass/paren/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'sass/paren/plain.css',
    data: 'a {b: if((sass(true)): c)}\n',
  },
  {
    name: 'sass/paren/error',
    data: "Error: sass() conditions aren't allowed in plain CSS\n  ,\n1 | a {b: if((sass(true)): c)}\n  |           ^^^^^^^^^^\n  '\n  plain.css 1:11  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interp/direct/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interp/direct/plain.css',
    data: 'a {b: if(#{css()}: c)}\n',
  },
  {
    name: 'interp/direct/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | a {b: if(#{css()}: c)}\n  |          ^^^^^^^^\n  '\n  plain.css 1:10  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interp/not/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interp/not/plain.css',
    data: 'a {b: if(not #{css()}: c)}\n',
  },
  {
    name: 'interp/not/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | a {b: if(not #{css()}: c)}\n  |              ^^^^^^^^\n  '\n  plain.css 1:14  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interp/and/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interp/and/plain.css',
    data: 'a {b: if(#{css(1)} and css(2): c)}\n',
  },
  {
    name: 'interp/and/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | a {b: if(#{css(1)} and css(2): c)}\n  |          ^^^^^^^^^\n  '\n  plain.css 1:10  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interp/or/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interp/or/plain.css',
    data: 'a {b: if(#{css(1)} or css(2): c)}\n',
  },
  {
    name: 'interp/or/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | a {b: if(#{css(1)} or css(2): c)}\n  |          ^^^^^^^^^\n  '\n  plain.css 1:10  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interp/paren/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'interp/paren/plain.css',
    data: 'a {b: if((#{css()}): c)}\n',
  },
  {
    name: 'interp/paren/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | a {b: if((#{css()}): c)}\n  |           ^^^^^^^^\n  '\n  plain.css 1:11  @use\n  input.scss 1:1  root stylesheet\n",
  },
]
