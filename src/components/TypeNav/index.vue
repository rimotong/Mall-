<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="unchenge" @mouseenter="eventshow">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-show="isshow">
          <div class="all-sort-list2" @click="gosearch">
            <div class="item" v-for="list in categoryList" :key="list.categoryId" :class="{bag:listindex == list.categoryId}">
              <h3 @mouseenter="chengelist(list.categoryId)" >
                <a :data-categoryName="list.categoryName" :data-categoryId="list.categoryId">{{list.categoryName}}</a> <!-- 添加自定义属性,自定义属性以:data-开头 -->
              </h3>
              <!-- 二级分类 -->
              <div class="item-list clearfix" :style="{display:listindex == list.categoryId?'block':'none'}">
                <div class="subitem" v-for="list2 in list.categoryChild" :key="list2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="list2.categoryName" :data-category2Id="list2.categoryId">{{list2.categoryName}}</a>
                    </dt>
                    <dd>
                      <!-- 三级分类 -->
                      <em v-for="list3 in list2.categoryChild" :key="list3.categoryId">
                        <a :data-categoryName="list3.categoryName" :data-category3Id="list3.categoryId">{{list3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="nav">
        <router-link to="###">服装城</router-link>
        <router-link to="###">美妆馆</router-link>
        <router-link to="###">尚品汇超市</router-link>
        <router-link to="###">全球购</router-link>
        <router-link to="###">闪购</router-link>
        <router-link to="###">团购</router-link>
        <router-link to="###">有趣</router-link>
        <router-link to="###">秒杀</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash' //全部功能引入
import throttle from 'lodash/throttle'//按需引入加载
import {mapState} from 'vuex'
export default {
  name: 'TypeNav',
  data() {
    return {
      listindex:'-1',
      isshow:true
    }
  },
  created(){
    
  },
  methods: {
    // chengelist(val){
    //   this.listindex = val;
    // },
    chengelist:throttle(function(val) {
      this.listindex = val;
    },10),
    unchenge(){
      this.listindex = -1
      if(this.$route.path !="/home"){
        this.isshow = false
        }
    },
    gosearch(event){
      let element = event.target; //
      let {categoryname,categoryid,category2id,category3id} = element.dataset; //dataset获取节点自定义属性与属性值
      if(categoryname){
        let location = {name:"search"};
        let query = {categoryName:categoryname};
        if(categoryid){
          query.categoryId = categoryid;
        }else if(category2id){
          query.category2Id = category2id;
        }else{
          query.category3Id = category3id;
        }
        //整理参数
        if(this.$route.params){
          location.params = this.$route.params
          location.query = query;
          this.$router.push(location)
        }
      }
    },
    eventshow(){
      this.isshow = true
    }
  },
  mounted(){
    if(this.$route.path !="/home"){
      this.isshow = false
    }
  },
  computed:{
    ...mapState({
      categoryList:state => state.home.categoryList
    }),
  }
}
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #b3b3b3;
      z-index: 999;

      .all-sort-list2 {
        //一级菜单添加背景色
        // .item:hover{
        //   background-color: aqua;
        // }
        .item {
          h3 {
            line-height: 25px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 10px 0 10px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 80px;
                  line-height: 22px;
                  text-align:center;
                  padding: 3px 0px 0 0;
                  // font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .bag{
          background: aquamarine;
        }
      }
    }
  }
}
</style>
