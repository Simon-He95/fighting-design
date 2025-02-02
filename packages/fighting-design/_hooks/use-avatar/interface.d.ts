import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListInterface } from '../../_interface'

/**
 * useAvatar 内部样式 hook 方法返回值类型接口
 *
 * @param nodeClassList img 元素的类名列表
 * @param classList 类名列表
 * @param styleList 样式列表
 */
export interface UseAvatarReturnInterface {
  nodeClassList: ComputedRef<ClassListInterface>
  classList: ComputedRef<ClassListInterface>
  styleList: ComputedRef<CSSProperties>
}
