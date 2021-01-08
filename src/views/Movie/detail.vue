<template>
  	<div id="detailContainer" class="slide-enter-active">

      <Header title="影片详情">
        <i class="iconfont icon-right" @touchstart="handleToBack"></i>
      </Header>
      <Loading v-if="isLoading"/>
      <div v-else id="content" class="contentDetail">
        <div class="detail_list">
          <div class="detail_list_bg"></div>
          <div class="detail_list_filter"></div>
          <div class="detail_list_content">
            <div class="detail_list_img">
              <img :src="detailMovie.picurl" alt="">
            </div>
            <div class="detail_list_info">
              <h2>{{detailMovie.title}}</h2>
              <p>{{detailMovie.score}}</p>
              <p>{{detailMovie.actor}}</p>
              <p>{{detailMovie.info}}</p>

            </div>
          </div>
        </div>
        <div class="detail_intro">
          <p>{{detailMovie.detail}}</p></div>
        <div class="detail_player swiper-container" ref="detail_player">
          <ul class="swiper-wrapper">
          <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p673.webp" alt="" @click="handleToNolan">
              </div>
              <p>克里斯托弗·诺兰</p>
              <p>导演</p>
            </li>
             <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p814.webp" alt="" @click="handleToLeo">
              </div>
              <p>莱昂纳多·迪卡普里奥</p>
              <p>饰 柯布</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p3517.webp" alt="">
              </div>
              <p>约瑟夫·高登-莱维特</p>
              <p>饰 阿瑟</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p118.webp" alt="">
              </div>
              <p>艾利奥特·佩吉</p>
              <p>饰 艾里阿德妮</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5110.webp" alt="">
              </div>
              <p>汤姆·哈迪</p>
              <p>饰 伊姆斯</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34972.webp" alt="">
              </div>
              <p>渡边谦</p>
              <p>饰 齐藤</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p11710.webp" alt="">
              </div>
              <p>迪利普·劳</p>
              <p>饰 约瑟夫</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1440.webp" alt="">
              </div>
              <p>基里安·墨菲</p>
              <p>饰 罗伯特·费希尔</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1596536566.18.webp" alt="">
              </div>
              <p>汤姆·贝伦杰</p>
              <p>饰 布朗宁</p>
            </li>
            <li class="swiper-slide">
              <div>
                <img src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56212.webp" alt="">
              </div>
              <p>迈克尔·凯恩</p>
              <p>饰 迈尔斯</p>
            </li>


          </ul>
        </div>
      </div>
	</div>

</template>

<script>
import Header from '@/components/Header'

export default {
   name: "Detail",
   data(){
     return{
       detailMovie:{},
       isLoading: true
     }
   },
   components : {
     Header
   },
   props : ['movieId'],
   methods :{
     handleToBack(){
       this.$router.back();
     },
     handleToNolan(){
       window.location.href= 'https://movie.douban.com/celebrity/1054524/';
     },
     handleToLeo(){
       window.location.href= 'https://movie.douban.com/celebrity/1041029/';
     },
   },
   mounted() {
     //console.log(this.movieId);

     this.axios.get('/api/detail/nowdetail'+this.movieId+'.json').then((res)=>{
       var msg = res.data.msg;
       if( msg === 'ok'){
         this.isLoading = false;
         this.detailMovie = res.data.data.detailMovie;
         this.$nextTick(()=>{
           new Swiper(this.$refs.detail_player , {
                slidesPerView : 'auto',
                freeMode : true,
                freeModeSticky: true
              });

         });


       }
     });

   }
}
</script>

<style scoped>
#detailContainer{position: absolute; left:0; top:0; z-index: 100;width: 100%; min-height: 100%; background: white;}
#detailContainer.slide-enter-active{ animation:.5s slideMove;}
@keyframes slideMove{
    0%{ transform : translateX(100%); }
    100%{ transform : translateX(0); }
}
#content.contentDetail{ display: block; margin-bottom:0;}
#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: url(/images/movie_1.jpg) 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
.detail_list .detail_list_img img{ width:108px; height: 150px;}
.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
#content .detail_intro{ padding: 10px;}
#content .detail_player{ margin:20px;}
.detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 14px;}
.detail_player .swiper-slide img{ width:100%; margin-bottom: 5px;}
.detail_player .swiper-slide p:nth-of-type(2){ color:#999;}
</style>