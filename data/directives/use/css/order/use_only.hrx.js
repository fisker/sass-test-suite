// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/css/order/use_only.hrx

export default [
  {
    name: 'once/input.scss',
    data: '@use "other" as o1;\n@use "other" as o2;\n@use "other" as o3;\n',
  },
  {
    name: 'once/_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'once/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'use_into_use/input.scss',
    data: '@use "midstream";\n\na {file: input}\n',
  },
  {
    name: 'use_into_use/midstream.scss',
    data: '@use "upstream";\n\na {file: midstream}\n',
  },
  {
    name: 'use_into_use/upstream.scss',
    data: 'a {file: upstream}\n',
  },
  {
    name: 'use_into_use/output.css',
    data: 'a {\n  file: upstream;\n}\n\na {\n  file: midstream;\n}\n\na {\n  file: input;\n}\n',
  },
  {
    name: 'use_order/input.scss',
    data: '@use "other1";\n@use "other2";\n@use "other3";\n\na {file: input}\n',
  },
  {
    name: 'use_order/other1.scss',
    data: 'a {file: other1}\n',
  },
  {
    name: 'use_order/other2.scss',
    data: 'a {file: other2}\n',
  },
  {
    name: 'use_order/other3.scss',
    data: 'a {file: other3}\n',
  },
  {
    name: 'use_order/output.css',
    data: 'a {\n  file: other1;\n}\n\na {\n  file: other2;\n}\n\na {\n  file: other3;\n}\n\na {\n  file: input;\n}\n',
  },
  {
    name: 'diamond/input.scss',
    data: '@use "left";\n@use "right";\n\na {file: input}\n',
  },
  {
    name: 'diamond/left.scss',
    data: '@use "shared";\n\na {file: left}\n',
  },
  {
    name: 'diamond/right.scss',
    data: '@use "shared";\n\na {file: right}\n',
  },
  {
    name: 'diamond/shared.scss',
    data: 'a {file: shared}\n',
  },
  {
    name: 'diamond/output.css',
    data: 'a {\n  file: shared;\n}\n\na {\n  file: left;\n}\n\na {\n  file: right;\n}\n\na {\n  file: input;\n}\n',
  },
  {
    name: 'triangle/input.scss',
    data: '@use "midstream";\n@use "upstream";\n\na {file: input}\n',
  },
  {
    name: 'triangle/midstream.scss',
    data: '@use "upstream";\n\na {file: midstream}\n',
  },
  {
    name: 'triangle/upstream.scss',
    data: 'a {file: upstream}\n',
  },
  {
    name: 'triangle/output.css',
    data: 'a {\n  file: upstream;\n}\n\na {\n  file: midstream;\n}\n\na {\n  file: input;\n}\n',
  },
  {
    name: 'unrelated_branches/input.scss',
    data: '@use "left_midstream";\n@use "right_midstream";\n\na {file: input}\n',
  },
  {
    name: 'unrelated_branches/left_midstream.scss',
    data: '@use "left_upstream";\n\na {file: left midstream}\n',
  },
  {
    name: 'unrelated_branches/left_upstream.scss',
    data: 'a {file: left upstream}\n',
  },
  {
    name: 'unrelated_branches/right_midstream.scss',
    data: '@use "right_upstream";\n\na {file: right midstream}\n',
  },
  {
    name: 'unrelated_branches/right_upstream.scss',
    data: 'a {file: right upstream}\n',
  },
  {
    name: 'unrelated_branches/output.css',
    data: 'a {\n  file: left upstream;\n}\n\na {\n  file: left midstream;\n}\n\na {\n  file: right upstream;\n}\n\na {\n  file: right midstream;\n}\n\na {\n  file: input;\n}\n',
  },
  {
    name: 'comment_order/sequence/comment_only/input.scss',
    data: '/* before use in input */\n@use "midstream";\n/* after use in input */\n',
  },
  {
    name: 'comment_order/sequence/comment_only/_midstream.scss',
    data: '/* before use in midstream */\n@use "upstream";\n/* after use in midstream */\n',
  },
  {
    name: 'comment_order/sequence/comment_only/_upstream.scss',
    data: '/* in upstream */\n',
  },
  {
    name: 'comment_order/sequence/comment_only/output.css',
    data: '/* before use in input */\n/* before use in midstream */\n/* in upstream */\n/* after use in midstream */\n/* after use in input */\n',
  },
  {
    name: 'comment_order/sequence/comment_and_css/input.scss',
    data: '/* before use in input */\n@use "midstream";\n/* after use in input */\na {in: input}\n/* after css in input */\n',
  },
  {
    name: 'comment_order/sequence/comment_and_css/_midstream.scss',
    data: '/* before use in midstream */\n@use "upstream";\n/* after use in midstream */\na {in: midstream}\n/* after css in midstream */\n',
  },
  {
    name: 'comment_order/sequence/comment_and_css/_upstream.scss',
    data: '/* before css in upstream */\na {in: upstream}\n/* after css in upstream */\n',
  },
  {
    name: 'comment_order/sequence/comment_and_css/output.css',
    data: '/* before use in input */\n/* before use in midstream */\n/* before css in upstream */\na {\n  in: upstream;\n}\n\n/* after css in upstream */\n/* after use in midstream */\na {\n  in: midstream;\n}\n\n/* after css in midstream */\n/* after use in input */\na {\n  in: input;\n}\n\n/* after css in input */\n',
  },
  {
    name: 'comment_order/sequence/comment_css_and_plain_import/input.scss',
    data: '/* before use in input */\n@use "midstream";\n/* after use in input */\n@import "input.css";\n/* after import in input */\na {in: input}\n/* after css in input */\n',
  },
  {
    name: 'comment_order/sequence/comment_css_and_plain_import/_midstream.scss',
    data: '/* before use in midstream */\n@use "upstream";\n/* after use in midstream */\n@import "midstream.css";\n/* after import in input */\na {in: midstream}\n/* after css in midstream */\n',
  },
  {
    name: 'comment_order/sequence/comment_css_and_plain_import/_upstream.scss',
    data: '/* before css in upstream */\n@import "upstream.css";\n/* after import in upstream */\na {in: upstream}\n/* after css in upstream */\n',
  },
  {
    name: 'comment_order/sequence/comment_css_and_plain_import/output.css',
    data: '/* before use in input */\n/* before use in midstream */\n/* before css in upstream */\n@import "upstream.css";\n/* after use in midstream */\n@import "midstream.css";\n/* after use in input */\n@import "input.css";\n/* after import in upstream */\na {\n  in: upstream;\n}\n\n/* after css in upstream */\n/* after import in input */\na {\n  in: midstream;\n}\n\n/* after css in midstream */\n/* after import in input */\na {\n  in: input;\n}\n\n/* after css in input */\n',
  },
  {
    name: 'comment_order/diamond/comment_only/input.scss',
    data: '/* before use in input */\n@use "left";\n/* between use in input */\n@use "right";\n/* after use in input */\n',
  },
  {
    name: 'comment_order/diamond/comment_only/_left.scss',
    data: '/* before use in left */\n@use "shared";\n/* after use in left */\n',
  },
  {
    name: 'comment_order/diamond/comment_only/_right.scss',
    data: '/* before use in right */\n@use "shared";\n/* after use in right */\n',
  },
  {
    name: 'comment_order/diamond/comment_only/_shared.scss',
    data: '/* in shared */\n',
  },
  {
    name: 'comment_order/diamond/comment_only/output.css',
    data: '/* before use in input */\n/* before use in left */\n/* in shared */\n/* after use in left */\n/* between use in input */\n/* before use in right */\n/* after use in right */\n/* after use in input */\n',
  },
]
