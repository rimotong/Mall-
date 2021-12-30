<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//引入Swiper
import Swiper from "swiper";
export default {
  name: "Carsousel",
  props: ["list"],
  watch: {
    list: {
      //立即监听：不管你数据有没有变化，我上来立即监听一次
      //为什么watch监听list：因为这个数据从来没有发生变化（数据是父亲给的，父亲给的时候就是一个对象，对象里面该有的数据都是有的）
      immediate: true,
      handler() {
        //只能监听到数据已经有了，但是v-for动态渲染结构我们还是没有办法确定的，因此还是需要用nextTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球的时候也切换图片
              clickable: true,
            },
            // 自动播放时间
            autoplay:{
              delay:3000, //3秒切换一次
              disableOnInteraction:false
            },
            //播放的速度
            speed:1000,
            // 这样，即使我们滑动之后， 定时器也不会被清除
// 　　        autoplayDisableOnInteraction : false,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              hideOnClick: false,
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped>
.swiper-button-next{display:none;}
.swiper-button-prev{display:none;}
.swiper-container:hover .swiper-button-next, .swiper-container:hover .swiper-button-prev{display: block; }
.swiper-container{
  --swiper-navigation-color: #02ffff;
  /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px;/* 设置按钮大小 */
}
</style>