export default [
  {
    name: 'input.scss',
    data: 'foo {\n    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="data:image/png;base64,ABCD",sizingMethod=crop);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="data:image/png;base64,ABCD",sizingMethod=crop);\n}\n',
  },
]
