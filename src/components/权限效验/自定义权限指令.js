import { CheckOperateEnum, checkPermissions, PermTypeEnum } from '@/utils/permissionUtils'

/**
 * 权限校验命令，支持：
 * * 角色权限校验
 * * 权限标识校验
 * * 输入为字符串或者数组
 * * 任意权限或者全部权限校验
 * 使用例子 :
 *  权限标识校验：
 *    全部存在  v-permission="['sys:user:create','sys:user:list']" 或者 v-permission="'sys:user:create'"
 *    任意存在  v-permission.or="['sys:user:create','sys:user:list']"
 *
 *  角色权限校验：
 *    全部存在  v-permission:role="['user1','user2']" 或者 v-permission="'user'"
 *    任意任意  v-permission:role.or="['user1','user2']"
 *
 */
export default {

    //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    /*
    el：指令所绑定的元素，可以用来直接操作 DOM。
    binding：一个对象，包含以下 property：
        name：指令名，不包括 v- 前缀。
        value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
        oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
        expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
        arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
        modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
    vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
    */
    inserted(el, binding, vnode) {
        // 得到指令的绑定值，此值为js计算完成后的值,当前为需要的权限
        const { value, arg, modifiers } = binding
        if (value) {
            //权限判断结果 ， 这里会处理字符串及数组的情况
            const hasPermission = checkPermissions(value,
                (arg === 'role') ? PermTypeEnum.ROLE : PermTypeEnum.PERMS,
                modifiers.or ? CheckOperateEnum.OR : CheckOperateEnum.AND
            )
            if (!hasPermission) {
                //如果没有权限则直接删除此节点
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error(`缺少权限标识 例如 v-permission="['sys:user:create','sys:user:list']" 或者 v-permission:role="['user']" `)
        }
    }
}