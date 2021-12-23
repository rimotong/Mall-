<template>
    <div>
        <!-- 全局组件引用 -->
        <TypeNav/>
        <ListContainer />
        <TodayRecommend/>
        <rank/>
        <like/>
        <floor/>
        <floor/>
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
export default {
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

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
