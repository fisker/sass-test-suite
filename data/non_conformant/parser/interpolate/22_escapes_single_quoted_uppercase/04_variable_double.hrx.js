export default [
  {
    name: 'input.scss',
    data: '$input: \'\\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z\';\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: \u000b\f\r\u000e\u000fGHIJKLMNOPQRSTUVWXYZ;\n  output: [\u000b\f\r\u000e\u000fGHIJKLMNOPQRSTUVWXYZ];\n  output: \u000b\f\r\u000e\u000fGHIJKLMNOPQRSTUVWXYZ;\n  output: \u000b\f\r\u000e\u000fGHIJKLMNOPQRSTUVWXYZ;\n  output: ['\u000b\f\r\u000e\u000fGHIJKLMNOPQRSTUVWXYZ'];\n}\n",
  },
]
