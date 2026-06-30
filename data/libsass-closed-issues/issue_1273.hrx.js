export default [
  {
    name: 'input.scss',
    data: "test {\n  src: url(test.eot#{if(true, '?#{42}', '')});\n}",
  },
  {
    name: 'output.css',
    data: 'test {\n  src: url(test.eot?42);\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(true): \"?#{42}\"; else: \"\")\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n2 |   src: url(test.eot#{if(true, '?#{42}', '')});\n  |                      ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:22  root stylesheet\n",
  },
]
