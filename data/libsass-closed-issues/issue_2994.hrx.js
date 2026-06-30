export default [
  {
    name: 'input.scss',
    data: '.one-screen-page {\n\t@extend %context-dark;\n}\n\n%context-dark {\n\t.button-secondary-outline {\n\t\t&:hover,\n\t\t&:focus,\n\t\t&:active,\n\t\t&:hover {\n\t\t\tcolor: #fca;\n\t\t}\n\t}\n}\n',
  },
  {
    name: 'output.css',
    data: '.one-screen-page .button-secondary-outline:hover, .one-screen-page .button-secondary-outline:focus, .one-screen-page .button-secondary-outline:active {\n  color: #fca;\n}\n',
  },
]
