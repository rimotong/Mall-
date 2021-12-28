<template>
        <div class="footer">
            <div class="footer-container">
                <div class="footerList">
                    <div class="footerItem">
                        <h3>购物指南</h3>
                        <ul class="footerItemCon">
                            <li>购物流程</li>
                        </ul>

                    </div>
                    <div class="footerItem">
                        <h3>配送方式</h3>
                        <ul class="footerItemCon">
                            <li>上门自提</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h3>支付方式</h3>
                        <ul class="footerItemCon">
                            <li>货到付款</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h3>售后服务</h3>
                        <ul class="footerItemCon">
                            <li>售后政策</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h3>特色服务</h3>
                        <ul class="footerItemCon">
                            <li>夺宝岛</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h3>帮助中心</h3>
                        <img src="./img/my.png">
                    </div>
                </div>
                <div class="copyright">
                    <ul class="helpLink">
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>联系我们
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>商家入驻
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们</li>
                    </ul>
                    <p>© 2021 深圳市智联云网科技有限公司 版权所有</p>
                    <p>粤ICP备15075375号粤公安网备11029018729887</p>
                </div>
            </div>
        </div>

</template>

<script>
export default {
    props: {

    },
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

    },
};
</script>

<style scoped lang="less">
.footer{
    background-color: azure;
    .footer-container{
        width: 1200px;
        margin: 0 auto;
        padding: 0 15px;

        .footerList{
            padding: 20px;
            border-bottom: 1px solid #e4e1e1;
            border-top:1px solid #e4e1e1;
            overflow: hidden;
            padding-left: 40px;

            .footerItem{
                width: 16.6666667%;
                float: left;

                h3{font-size: 14px;}

                .footerItemCon{
                    li{
                        line-height: 18px;
                    }
                }
                &:last-child img{
                    width: 121px;
                }
            }
        }
        .copyright{
            padding: 20px;

            .helpLink{
                text-align: center;

                li{
                    display: inline;

                    .space{
                        border-left: 1px solid #666;
                        width: 1px;
                        height: 13px;
                        background: #666;
                        margin: 0 10px;
                    }
                }
            }
            p{
                margin: 10px 0;
                text-align: center;
            }
        }
    }
}
</style>
