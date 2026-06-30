export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "\\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z";\n  output: #{"\\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z"};\n  output: "[#{"\\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z"}]";\n  output: "#{"\\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z"}";\n  output: \'#{"\\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z"}\';\n  output: "[\'#{"\\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "\\b\\c\\d\\e\\fGHIJKLMNOPQRSTUVWXYZ";\n  output: \u000b\f\r\u000e\u000fGHIJKLMNOPQRSTUVWXYZ;\n  output: "[\\b\\c\\d\\e\\fGHIJKLMNOPQRSTUVWXYZ]";\n  output: "\\b\\c\\d\\e\\fGHIJKLMNOPQRSTUVWXYZ";\n  output: "\\b\\c\\d\\e\\fGHIJKLMNOPQRSTUVWXYZ";\n  output: "[\'\\b\\c\\d\\e\\fGHIJKLMNOPQRSTUVWXYZ\']";\n}\n',
  },
]
