import type { ExtractPropTypes, PropType, VNode, Component } from 'vue'
import type {
  InputType,
  InputSizeType,
  InputChangeInterface,
  InputSearchInterface
} from './interface'
import type {
  HandleFocusEventInterface,
  HandleEventInterface
} from '../../_interface'

export const Props = {
  /**
   * 绑定值
   */
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null
  },
  /**
   * 类型
   *
   * 文字输入框或者密码输入框
   */
  type: {
    type: String as PropType<InputType>,
    default: (): InputType => 'text',
    validator: (val: InputType): boolean => {
      return (['text', 'password', 'number'] as const).includes(val)
    }
  },
  /**
   * 尺寸
   *
   * @values large middle small mini
   * @defaultValue middle
   */
  size: {
    type: String as PropType<InputSizeType>,
    default: (): InputSizeType => 'middle',
    validator: (val: InputSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  /**
   * 是否禁用
   *
   * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
   */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 最大（数字或日期时间）值
   *
   * @see max https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-max
   */
  max: {
    type: Number,
    default: (): null => null
  },
  /**
   * 最小（数字或日期时间）值
   *
   * @see min https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-min
   */
  min: {
    type: Number,
    default: (): null => null
  },
  /**
   * 最大输入长度
   *
   * @see maxLength https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-maxlength
   */
  maxLength: {
    type: Number,
    default: (): null => null,
    validator: (val: number): boolean => val >= 0
  },
  /**
   * 是否自动获取焦点
   *
   * @see autofocus https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-autofocus
   */
  autofocus: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 原生 name 属性
   *
   * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
   */
  name: {
    type: String,
    default: (): string => 'f-input'
  },
  /**
   * 占位符
   *
   * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
   */
  placeholder: {
    type: String,
    default: (): null => null
  },
  /**
   * 是否可清除
   */
  clear: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否可搜索
   */
  search: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否只读
   *
   * @see readonly https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-readonly
   */
  readonly: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否显示查看密码的按钮
   */
  showPassword: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否按下回车进行搜索
   */
  enterSearch: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 自定义 icon
   */
  icon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  },
  /**
   * 点击搜索之后触发的回调
   */
  onSearch: {
    type: Function as PropType<InputSearchInterface>,
    default: (): null => null
  },
  /**
   * 绑定值发生改变时触发的回调
   */
  onChange: {
    type: Function as PropType<InputChangeInterface>,
    default: (): null => null
  },
  /**
   * 失去焦点时触发的回调
   */
  onBlur: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  /**
   * 获得焦点时触发的回调
   */
  onFocus: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  /**
   * input 事件触发的回调
   */
  onInput: {
    type: Function as PropType<HandleFocusEventInterface>,
    default: (): null => null
  },
  /**
   * 按下回车触发的
   */
  onEnter: {
    type: Function as PropType<HandleEventInterface>,
    default: (): null => null
  },
  /**
   * 后缀 icon
   */
  afterIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null
  }
} as const

export type InputPropsType = ExtractPropTypes<typeof Props>
