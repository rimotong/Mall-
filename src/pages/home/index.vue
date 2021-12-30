<template>
    <div>
        <!-- 全局组件引用 -->
        <TypeNav/>
        <ListContainer />
        <TodayRecommend/>
        <rank/>
        <like/>
        <floor v-for="(floor,index) in floorlist" :key="floor.id" :list="floor" />
        <!-- <floor :list="floorlist[0]" />
        <floor :list="floorlist[1]" /> -->
        <brand/>
    </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer.vue'
import TodayRecommend from './TodayRecommend/TodayRecommend.vue'
import rank from './Rank/Rank.vue'
import like from './Like/Like.vue'
import floor from './Floor/Floor.vue'
import brand from './Brand/Brand.vue'
import { mapState } from "vuex";
export default {
    data() {
        return {

        };
    },
    mounted() {
      //派发action,获取floor组件的数据
      this.$store.dispatch("getFloorlist");
      //this.$store.dispatch('getUserInfo');
      console.log(this.floorlist)
    },
    computed: {
      ...mapState({
        floorlist: (state) => state.home.floorlist,
      }),
    },
    watch: {

    },
    methods: {

    },
    components: {
        ListContainer,
        TodayRecommend,
        rank,
        like,floor,brand
    },
};
</script>

<style scoped lang="less">

</style>
