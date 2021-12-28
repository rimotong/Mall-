<template>
<div>
  <div v-permission:role.or="['admin','role']">
      <span>admin和role角色都能看到我</span>
    </div>

    <div v-permission:role="['admin','user']">
      <span>必须同时有admin和user角色才能看到</span>
    </div>

    <div v-permission="['sys:user:select','sys:org:list']">
      <span>必须同时有sys:user:select和sys:org:list权限标识才能看到</span>
    </div>

    <div v-permission.or="['sys:user:select','sys:org:list']">
      <span>sys:user:select和sys:org:list权限标识都能看到我</span>
    </div>
</div>
</template>