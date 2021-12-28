/**
 * 权限校验工具
 */
import store from "@/store";
// 用vuex存储用户的所有角色及权限标识，并封装成判断的方法，VUE实例上挂载全局属性方法，方便所有组件调用，同时封装自定义指令，指令中的判断逻辑也是调用此判断方法。
/**
 * 权限校验的类型
 * @type {{ROLE: string, PERMS: string}}
 */
export const PermTypeEnum = {
    PERMS: 'perms',
    ROLE: 'role'
}

/**
 * 权限校验的操作
 * @type {{OR: string, AND: string}}
 */
export const CheckOperateEnum = {
    AND: 'and',
    OR: 'or'
}

/**
 *  检查是否具有全部资源权限
 * @param checkPerms {Array<String>}  检查的资源
 * @param allPerms {Array<String>}   具有的资源
 * @returns {Boolean}  true 具有权限  false 没有权限
 */
export const checkPermsAll = (checkPerms, allPerms) => (checkPerms || []).every((perm) => allPerms.includes(perm))

/**
 *  检查是否具有任意资源权限
 * @param checkPerms {Array<String>}  检查的资源
 * @param allPerms {Array<String>}   具有的资源
 * @returns {Boolean}  true 具有权限  false 没有权限
 */
export const checkPermsAny = (checkPerms, allPerms) => (checkPerms || []).some((perm) => allPerms.includes(perm))

/**
 * 权限校验
 * @param checkPerms {String|Array} 需要检查的权限
 * @param permType  权限的类型，角色或者权限标识
 * @param checkOperate  操作类型，且或者 是 或
 * @returns {Boolean}   是否具有权限， true 有权限， false 无权限
 */
export const checkPermissions = (checkPerms,
    permType = PermTypeEnum.PERMS,
    checkOperate = CheckOperateEnum.AND) => {
    //得到用户具有的权限集合
    const perms = store.getters.perms
        // 得到用户具有的角色集合
    const roles = store.getters.roles.map(role => role.roleId)
        //权限判断结果
    const allPerms = []
        //开始判断是 角色权限校验 还是 权限校验 , 再判断是 或 操作 还是 与 操作
    if (permType === PermTypeEnum.ROLE) {
        allPerms.push(...roles)
    } else {
        allPerms.push(...perms)
    }
    //这里需要对校验的权限标记或者角色进行转换为数组
    const needCheckPerms = []
    if (checkPerms) {
        if ((checkPerms instanceof Array) && (checkPerms.length > 0)) {
            //如果输入数据为数组，则直接加入
            needCheckPerms.push(...checkPerms)
        } else if ((typeof checkPerms) === 'string') {
            needCheckPerms.push(checkPerms)
        }
    }
    let hasPerm = false;
    // 如果包含特殊标识，则视为管理员，全部放行
    if (allPerms.includes('*')) {
        hasPerm = true;
    } else {
        // 判断是 或 操作 还是 与 操作 ， 如果给了or的修饰符，则表示为任意权限
        if (checkOperate === CheckOperateEnum.OR) {
            hasPerm = checkPermsAny(needCheckPerms, allPerms)
        } else {
            hasPerm = checkPermsAll(needCheckPerms, allPerms)
        }
    }
    return hasPerm;
}

export default {
    PermTypeEnum,
    CheckOperateEnum,
    checkPermissions
}