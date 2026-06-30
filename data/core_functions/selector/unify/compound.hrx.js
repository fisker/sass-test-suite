// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/unify/compound.hrx

export default [
  {
    name: 'no_overlap/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.d", ".e.f")}\n',
  },
  {
    name: 'no_overlap/output.css',
    data: 'a {\n  b: .c.d.e.f;\n}\n',
  },
  {
    name: 'partial_overlap/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.d", ".d.e")}\n',
  },
  {
    name: 'partial_overlap/output.css',
    data: 'a {\n  b: .c.d.e;\n}\n',
  },
  {
    name: 'full_overlap/class/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.d", ".c.d")}\n',
  },
  {
    name: 'full_overlap/class/output.css',
    data: 'a {\n  b: .c.d;\n}\n',
  },
  {
    name: 'full_overlap/pseudo_element/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c::d", ".c::d")}\n',
  },
  {
    name: 'full_overlap/pseudo_element/output.css',
    data: 'a {\n  b: .c::d;\n}\n',
  },
  {
    name: 'full_overlap/pseudo_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c:d", ".c:d")}\n',
  },
  {
    name: 'full_overlap/pseudo_class/output.css',
    data: 'a {\n  b: .c:d;\n}\n',
  },
  {
    name: 'full_overlap/pseudo_selector_and_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c:d::e", ".c:d::e")}\n',
  },
  {
    name: 'full_overlap/pseudo_selector_and_class/output.css',
    data: 'a {\n  b: .c:d::e;\n}\n',
  },
  {
    name: 'order/preserved_by_default/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c.d", ".e.f")}\n',
  },
  {
    name: 'order/preserved_by_default/output.css',
    data: 'a {\n  b: .c.d.e.f;\n}\n',
  },
  {
    name: 'order/element_at_start/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".c", "d")}\n',
  },
  {
    name: 'order/element_at_start/output.css',
    data: 'a {\n  b: d.c;\n}\n',
  },
  {
    name: 'order/pseudo_element_at_end/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::c", ".d")}\n',
  },
  {
    name: 'order/pseudo_element_at_end/output.css',
    data: 'a {\n  b: .d::c;\n}\n',
  },
  {
    name: 'order/pseudo_class_at_end/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":c", ".d")}\n',
  },
  {
    name: 'order/pseudo_class_at_end/output.css',
    data: 'a {\n  b: .d:c;\n}\n',
  },
  {
    name: 'order/pseudo_element_after_pseudo_class/element_first/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::c", ":d")}\n',
  },
  {
    name: 'order/pseudo_element_after_pseudo_class/element_first/output.css',
    data: 'a {\n  b: :d::c;\n}\n',
  },
  {
    name: 'order/pseudo_element_after_pseudo_class/class_first/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":c", "::d")}\n',
  },
  {
    name: 'order/pseudo_element_after_pseudo_class/class_first/output.css',
    data: 'a {\n  b: :c::d;\n}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".x::scrollbar:horizontal", ".y")}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_simple/output.css',
    data: 'a {\n  b: .x.y::scrollbar:horizontal;\n}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_pseudo_element/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::bar:baz", ":foo")}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_pseudo_element/output.css',
    data: 'a {\n  b: :foo::bar:baz;\n}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_same_pseudo_element_and_different_pseudo_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::foo:bar", "::foo:baz")}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_same_pseudo_element_and_different_pseudo_class/output.css',
    data: 'a {\n  b: ::foo:bar:baz;\n}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_different_pseudo_element_and_different_pseudo_class/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::foo:bar", "::other:baz")}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_class_and_element/into_different_pseudo_element_and_different_pseudo_class/output.css',
    data: '',
  },
  {
    name: 'order/do_not_cross_pseudo_element/simple/into_pseudo_class_and_element/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".x", ".y::scrollbar:horizontal")}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/simple/into_pseudo_class_and_element/output.css',
    data: 'a {\n  b: .x.y::scrollbar:horizontal;\n}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_element/into_pseudo_class_and_element/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(":foo", "::bar:baz")}\n',
  },
  {
    name: 'order/do_not_cross_pseudo_element/pseudo_element/into_pseudo_class_and_element/output.css',
    data: 'a {\n  b: :foo::bar:baz;\n}\n',
  },
]
