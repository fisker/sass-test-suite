// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/import/conditions.hrx

export default [
  {
    name: 'unknown/function/empty/input.scss',
    data: '@import "a" b();\n',
  },
  {
    name: 'unknown/function/empty/output.css',
    data: '@import "a" b();\n',
  },
  {
    name: 'unknown/function/argument/input.scss',
    data: '@import "a" b(a !&$ZH()&;*{&A}_=-+#/><);\n',
  },
  {
    name: 'unknown/function/argument/output.css',
    data: '@import "a" b(a !&$ZH()&;*{&A}_=-+#/><);\n',
  },
  {
    name: 'unknown/function/interpolated/input.scss',
    data: '$a: "a";\n@import "b" c(#{$a});\n',
  },
  {
    name: 'unknown/function/interpolated/output.css',
    data: '@import "b" c(a);\n',
  },
  {
    name: 'unknown/function/followed_by_import_arg/input.scss',
    data: '@import "b" c(d), "e.css";\n',
  },
  {
    name: 'unknown/function/followed_by_import_arg/output.css',
    data: '@import "b" c(d);\n@import "e.css";\n',
  },
  {
    name: 'unknown/identifier/static/input.scss',
    data: '@import "a" b;\n',
  },
  {
    name: 'unknown/identifier/static/output.css',
    data: '@import "a" b;\n',
  },
  {
    name: 'unknown/identifier/interpolated/input.scss',
    data: '$a: "a";\n@import "b" c#{$a}d;\n',
  },
  {
    name: 'unknown/identifier/interpolated/output.css',
    data: '@import "b" cad;\n',
  },
  {
    name: 'unknown/identifier/interpolation/input.scss',
    data: '$a: "a";\n@import "b" #{$a};\n',
  },
  {
    name: 'unknown/identifier/interpolation/output.css',
    data: '@import "b" a;\n',
  },
  {
    name: 'supports/declaration/prop/input.scss',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/prop/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/custom_prop/value/input.scss',
    data: '@import "a.css" supports(--a: b);\n',
  },
  {
    name: 'supports/declaration/custom_prop/value/output.css',
    data: '@import "a.css" supports(--a: b);\n',
  },
  {
    name: 'supports/declaration/custom_prop/whitespace/input.scss',
    data: '@import "a.css" supports(--a: );\n',
  },
  {
    name: 'supports/declaration/custom_prop/whitespace/output.css',
    data: '@import "a.css" supports(--a: );\n',
  },
  {
    name: 'supports/declaration/custom_prop/punctuation/input.scss',
    data: '@import "a.css" supports(--a: ,);\n',
  },
  {
    name: 'supports/declaration/custom_prop/punctuation/output.css',
    data: '@import "a.css" supports(--a: ,);\n',
  },
  {
    name: 'supports/declaration/followed_by_import_arg/input.scss',
    data: '@import "a" supports(b: c), "d.css";\n',
  },
  {
    name: 'supports/declaration/followed_by_import_arg/output.css',
    data: '@import "a" supports(b: c);\n@import "d.css";\n',
  },
  {
    name: 'supports/condition/input.scss',
    data: '@import "a.css" supports((a: b));\n',
  },
  {
    name: 'supports/condition/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/condition_and/input.scss',
    data: '@import "a.css" supports((a: b) and (c: d));\n',
  },
  {
    name: 'supports/condition_and/output.css',
    data: '@import "a.css" supports((a: b) and (c: d));\n',
  },
  {
    name: 'supports/condition_function/input.scss',
    data: '@import "a.css" supports(a(b));\n',
  },
  {
    name: 'supports/condition_function/output.css',
    data: '@import "a.css" supports(a(b));\n',
  },
  {
    name: 'supports/condition_negation/input.scss',
    data: '@import "a.css" supports(not (a: b));\n',
  },
  {
    name: 'supports/condition_negation/output.css',
    data: '@import "a.css" supports(not (a: b));\n',
  },
  {
    name: 'supports/calc/input.scss',
    data: '@import "a.css" supports(calc(1));\n',
  },
  {
    name: 'supports/calc/output.css',
    data: '@import "a.css" supports(calc(1));\n',
  },
  {
    name: 'media/simple/input.scss',
    data: '@import url("a.css") print;\n',
  },
  {
    name: 'media/simple/output.css',
    data: '@import url("a.css") print;\n',
  },
  {
    name: 'media/complex/input.scss',
    data: '@import url("a.css") handheld and (max-width: 400px);\n',
  },
  {
    name: 'media/complex/output.css',
    data: '@import url("a.css") handheld and (max-width: 400px);\n',
  },
  {
    name: 'media/list/after_ident/input.scss',
    data: '@import "a" b, (c: d) and (e: f), g;\n',
  },
  {
    name: 'media/list/after_ident/output.css',
    data: '@import "a" b, (c: d) and (e: f), g;\n',
  },
  {
    name: 'media/list/after_feature/input.scss',
    data: '@import "a" (b: c), (d: e) and (f: g), h;\n',
  },
  {
    name: 'media/list/after_feature/output.css',
    data: '@import "a" (b: c), (d: e) and (f: g), h;\n',
  },
  {
    name: 'media/list/and_without_space/input.scss',
    data: '@import "a" b and(c: d), e;\n',
  },
  {
    name: 'media/list/and_without_space/output.css',
    data: '@import "a" b and (c: d), e;\n',
  },
  {
    name: 'multiple/supports_then/media/input.scss',
    data: '@import "a" supports(b: c) (d: e);\n',
  },
  {
    name: 'multiple/supports_then/media/output.css',
    data: '@import "a" supports(b: c) (d: e);\n',
  },
  {
    name: 'multiple/supports_then/unknown_ident/input.scss',
    data: '@import "a" supports(b: c) d;\n',
  },
  {
    name: 'multiple/supports_then/unknown_ident/output.css',
    data: '@import "a" supports(b: c) d;\n',
  },
  {
    name: 'multiple/supports_then/unknown_function/input.scss',
    data: '@import "a" supports(b: c) d(e);\n',
  },
  {
    name: 'multiple/supports_then/unknown_function/output.css',
    data: '@import "a" supports(b: c) d(e);\n',
  },
  {
    name: 'multiple/supports_then/supports/input.scss',
    data: '@import "a" supports(b: c) supports(e: f);\n',
  },
  {
    name: 'multiple/supports_then/supports/output.css',
    data: '@import "a" supports(b: c) supports(e: f);\n',
  },
  {
    name: 'multiple/unknown_ident_then/media/input.scss',
    data: '@import "a" b (c: d);\n',
  },
  {
    name: 'multiple/unknown_ident_then/media/output.css',
    data: '@import "a" b (c: d);\n',
  },
  {
    name: 'multiple/unknown_ident_then/unknown_ident/input.scss',
    data: '@import "a" b c;\n',
  },
  {
    name: 'multiple/unknown_ident_then/unknown_ident/output.css',
    data: '@import "a" b c;\n',
  },
  {
    name: 'multiple/unknown_ident_then/unknown_function/input.scss',
    data: '@import "a" b c(d);\n',
  },
  {
    name: 'multiple/unknown_ident_then/unknown_function/output.css',
    data: '@import "a" b c(d);\n',
  },
  {
    name: 'multiple/unknown_ident_then/supports/input.scss',
    data: '@import "a" b supports(c: d);\n',
  },
  {
    name: 'multiple/unknown_ident_then/supports/output.css',
    data: '@import "a" b supports(c: d);\n',
  },
  {
    name: 'multiple/unknown_function_then/media/input.scss',
    data: '@import "a" b(c) (d: e);\n',
  },
  {
    name: 'multiple/unknown_function_then/media/output.css',
    data: '@import "a" b(c) (d: e);\n',
  },
  {
    name: 'multiple/unknown_function_then/unknown_ident/input.scss',
    data: '@import "a" b(c) d;\n',
  },
  {
    name: 'multiple/unknown_function_then/unknown_ident/output.css',
    data: '@import "a" b(c) d;\n',
  },
  {
    name: 'multiple/unknown_function_then/unknown_function/input.scss',
    data: '@import "a" b(c) d(e);\n',
  },
  {
    name: 'multiple/unknown_function_then/unknown_function/output.css',
    data: '@import "a" b(c) d(e);\n',
  },
  {
    name: 'multiple/unknown_function_then/supports/input.scss',
    data: '@import "a" b(c) supports(e: f);\n',
  },
  {
    name: 'multiple/unknown_function_then/supports/output.css',
    data: '@import "a" b(c) supports(e: f);\n',
  },
  {
    name: 'multiple/many/input.scss',
    data: '@import "a" b c d(e) supports(f: g) h i j(k) l m (n: o), (p: q);\n',
  },
  {
    name: 'multiple/many/output.css',
    data: '@import "a" b c d(e) supports(f: g) h i j(k) l m (n: o), (p: q);\n',
  },
  {
    name: 'error/wrong_order/media_before_supports/input.scss',
    data: '@import "a" (b: c) supports(d: e);\n',
  },
  {
    name: 'error/wrong_order/media_before_supports/error',
    data: 'Error: expected ";".\n  ,\n1 | @import "a" (b: c) supports(d: e);\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'error/wrong_order/media_before_unknown_ident/input.scss',
    data: '@import "a" (b: c) d;\n',
  },
  {
    name: 'error/wrong_order/media_before_unknown_ident/error',
    data: 'Error: expected ";".\n  ,\n1 | @import "a" (b: c) d;\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'error/wrong_order/media_before_unknown_function/input.scss',
    data: '@import "a" (b: c) d(e);\n',
  },
  {
    name: 'error/wrong_order/media_before_unknown_function/error',
    data: 'Error: expected ";".\n  ,\n1 | @import "a" (b: c) d(e);\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'error/wrong_order/supports_after_comma/input.scss',
    data: '@import "a" b, supports(c: d);\n',
  },
  {
    name: 'error/wrong_order/supports_after_comma/error',
    data: 'Error: expected ";".\n  ,\n1 | @import "a" b, supports(c: d);\n  |                        ^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'error/wrong_order/unknown_function_after_comma/input.scss',
    data: '@import "a" b, c(d);\n',
  },
  {
    name: 'error/wrong_order/unknown_function_after_comma/error',
    data: 'Error: expected ";".\n  ,\n1 | @import "a" b, c(d);\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'error/wrong_order/url_after_comma/input.scss',
    data: '@import "a" b, "c";\n',
  },
  {
    name: 'error/wrong_order/url_after_comma/error',
    data: 'Error: Expected identifier.\n  ,\n1 | @import "a" b, "c";\n  |                ^\n  \'\n  input.scss 1:16  root stylesheet\n',
  },
  {
    name: 'error/supports/declaration/custom_prop/empty/input.scss',
    data: '@import url("a.css") supports(--a:);\n',
  },
  {
    name: 'error/supports/declaration/custom_prop/empty/error',
    data: 'Error: Expected token.\n  ,\n1 | @import url("a.css") supports(--a:);\n  |                                   ^\n  \'\n  input.scss 1:35  root stylesheet\n',
  },
]
