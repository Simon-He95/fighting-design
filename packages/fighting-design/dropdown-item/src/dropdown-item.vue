<script lang="ts" setup name="FDropdownItem">
  import { Props } from './props'
  import { runCallback } from '../../_utils'
  import { inject } from 'vue'
  import { TRIGGER_CLOSE_KEY } from '../../trigger/src/props'
  import type { DropdownItemPropsType } from './interface'
  import type { HandleMouseEventInterface } from '../../_interface'
  import type { TriggerProvideInterface } from '../../trigger'

  const prop: DropdownItemPropsType = defineProps(Props)

  /**
   * 获取到 trigger 注入的依赖项
   */
  const INJECT_DEPEND: TriggerProvideInterface =
    inject<TriggerProvideInterface>(
      TRIGGER_CLOSE_KEY
    ) as TriggerProvideInterface

  /**
   * 点击时触发
   *
   * @param evt 事件对象
   */
  const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
    if (prop.disabled) return
    runCallback(INJECT_DEPEND.handelClose)
    runCallback(prop.onClick, evt)
  }
</script>

<template>
  <div
    :class="[
      'f-dropdown-item',
      {
        'f-dropdown-item__disabled': disabled
      }
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>
