export default [
  {
    name: 'input.scss',
    data: '.foo {\n    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(\n        src="#{foo}",\n        sizingMethod=\'scale\');\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader( src="foo", sizingMethod=\'scale\');\n}\n',
  },
]
