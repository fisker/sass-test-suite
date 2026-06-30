export default [
  {
    name: 'input.scss',
    data: '$x: 3px;\n/* comment 1 */\n@if/* pre 1 */$x == 3px/* post 1 */{\n    /* if 1 */\n}\n/* comment 2 */\n@elseif/* pre 2 */$x == 2px/* post 2 */{\n    /* else if 2 */\n}\n/* comment 3 */\n@else/* middle 3 */if/* pre 3  */$x == 3px/* post 3 */{\n    /* else if 3 */\n}\n/* comment 4 */\n@else/* post 4 */{\n    /* else 4 */\n}\n/* comment 5 */',
  },
  {
    name: 'output.css',
    data: '/* comment 1 */\n/* if 1 */\n/* comment 5 */\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [elseif]: @elseif is deprecated and will not be supported in future Sass versions.\n\nRecommendation: @else if\n\n  ,\n7 | @elseif/* pre 2 */$x == 2px/* post 2 */{\n  | ^^^^^^^\n  '\n    input.scss 7:1  root stylesheet\n",
  },
]
