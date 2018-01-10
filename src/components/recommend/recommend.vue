<template>
	<div class="recommend"> 
		<scroll class="recommend-content" :data="discList">
			<div>
				<div v-if="recommends.length" class="slider-wrapper">
				<slider ref="slider">
					<div v-for="item in recommends">
						<a :href="item.linkUrl">
							<img class="needsclick" @load="loadImage" :src="item.picUrl" alt="">							
						</a>
					</div>
				</slider>
			</div>
			<div class="recommend-list">
          		<h1 class="list-title">热门歌单推荐</h1>
         		 <ul>
            		<li v-for="item in discList" class="item">
             		 <div class="icon">
               			 <img v-lazy="item.imgUrl">
             		 </div>
             		 <div class="text">
              		  <h2 class="name">{{item.name}}</h2>
              		  <p class="desc">{{item.disc}}</p>
             		 </div>
           			 </li>
         		 </ul>
       		 </div>
			</div>
			<div class="loading-containter" v-show="!discList.length"	>
				<loading></loading>
			</div>
			
		</scroll>
		<div class="loading-container" v-show="!discList.length">
        	<!-- <loading></loading> -->
      	</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import {getRecommend} from 'api/recommend'
	import {ERR_Ok} from 'api/config'
	import Slider from 'base/slider/slider'
	import Scroll from 'base/scroll/scroll'
	import Loading from 'base/loading/loading'

	export default{
		data(){
			return{
				recommends : [],
				discList: []
			}
		},
		created(){
			this._getRecommend()
			 setTimeout(() => {
        		this._getDiscList()
      		}, 400)
		},
		
		methods: {
			_getRecommend(){
				getRecommend().then((res)=>{
					if(res.code === ERR_Ok){
						console.log(res.data.slider)
						this.recommends=res.data.slider
					}
				})
			},
			// _getDiscList(){
			// 	getDiscList().then((res)=>{
			// 	if(res.code === ERR_Ok){
			// 		console.log(res.data.list )
			// 		this.discList=res.data.list
			// 	}
			// })
			// }
			_getDiscList () {
        setTimeout(() => {
          const a = [
            {
              imgUrl: 'http://p1.music.126.net/Od7bmbicRIpLQ6K1qsmWew==/18907201951587534.jpg?param=140y140',
              name: '翻唱简史：欧美六百首',
              disc: '丑萌的猫'
            },
            {
              imgUrl: 'http://p1.music.126.net/q1NrWVdK9sFmizOoL0pI7w==/109951163025047328.jpg?param=140y140',
              name: '「致过去」关于我和你的故事 到此为止',
              disc: '腐女__'
            },
            {
              imgUrl: 'http://p1.music.126.net/Xd6h-xOoPj2yTUuQXOhyCQ==/18612532836990988.jpg?param=140y140',
              name: '粤语男声：我爱你依旧如初，不曾改变。',
              disc: '情思天鹅'
            },
            {
              imgUrl: 'http://p1.music.126.net/3O9Bek9NT5ZOF6lxAJPQsQ==/18530069464958974.jpg?param=140y140',
              name: '岁月留声‖故时旧曲，道出多少往日情愁',
              disc: '飞行员Shooxxx'
            },
            {
              imgUrl: 'http://p1.music.126.net/n6xJUTMT-sUAKY53ba_V4A==/18923694625993927.jpg?param=140y140',
              name: '引擎里的速度人生',
              disc: 'suehebe'
            },
            {
              imgUrl: 'http://p1.music.126.net/Cl0MX1yd72mKqq31pkH52A==/109951163023336424.jpg?param=140y140',
              name: '「想在秋天和你一起做的事情」',
              disc: ' _____少女熊酱'
            },
            {
              imgUrl: 'http://p1.music.126.net/JWr7c__AH0dpo1QcaZb4Tg==/19066631137576063.jpg?param=140y140',
              name: '「双剑合璧」那些双人EDM制作人的强势之作',
              disc: ' 驴子鬼'
            },
            {
              imgUrl: 'http://p1.music.126.net/ADue3JW35J7b9eMhETZJcw==/19060034067796900.jpg?param=140y140',
              name: '他们不只唱得好，写得也非常nice',
              disc: ' 浮梦沉生 '
            },
            {
              imgUrl: 'http://p1.music.126.net/HvlIdazMr-IMxV_F-kD7Ag==/109951163026788047.jpg?param=140y140',
              name: '论正确背诗的方式【文言已补充',
              disc: ' 江宇直x'
            },
            {
              imgUrl: 'http://p1.music.126.net/NjFgSAmT3YNIfMi24uIzxg==/19113910137620310.jpg?param=140y140',
              name: '加拿大乡村 | 温煦醉心的异域民间风情',
              disc: ' Festschrift'
            },
            {
              imgUrl: 'http://p1.music.126.net/2Ru-VwrBY0k3ROEcI7poyQ==/109951163022926005.jpg?param=140y140',
              name: 'R&B柔情男嗓丨萦绕心间的温暖细腻',
              disc: ' 顾白丶Goodbye'
            }
          ]
          this.discList = a
        	console.log(this.discList)

        }, 200)
      },
      loadImage(){
      	if(!this.checkLoaded){
      		this.$refs.scroll.refresh()
      		this.checkLoaded = true
      		// 只执行一次家在图片  不需要每次加载都计算
      	}
      }
			
		},
		components: {
			Slider,
			Scroll,
			Loading
		}
	}
</script>

<style scoped lang="less">
  @import "../../common/less/variable";
  .recommend{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content{
      height: 100%;
      overflow: hidden;
      .slider-wrapper{
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .recommend-list{
        .list-title{
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: @font-size-medium;
          color: @color-theme;
        }
        .item{
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon{
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
            img{
              width: 100%;
            }
          }
          .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: @font-size-medium;
            .name{
              margin-bottom: 10px;
              color: @color-text;
            }
            .desc{
              color: @color-text-d;
            }
          }
        }
      .loading-container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
