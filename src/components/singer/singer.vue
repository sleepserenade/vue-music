<template>
	<div class="singer">
		<listview :data="singers"></listview>
	</div>
</template>

<script type="text/ecmascript-6">
import {getSingerList} from 'api/singer'
import {ERR_Ok} from 'api/config'
import Singer from 'common/js/singer'
import Listview from 'base/listview/listview'

const HOT_NAME = '热门'
const HOT_SINGER_LEN ='10'

	export default {
		data() {
			return {
				singers :[]
			}
		},
		created () {
			this._getSingerList()
			// console.log(this.singers)
			// this._normalizeSinger(this.singers)
		},
		methods: {
			_getSingerList() {
				getSingerList().then((res)=>{
					if(res.code === ERR_Ok) {
						this.singers = this._normalizeSinger(res.data.list)
						// console.log(this.singers)
						// console.log(this._normalizeSinger(this.singers))
					}
				})
			},
			_normalizeSinger(list){
				let map ={
					hot:{
						title : HOT_NAME,
						items : []
					}
				}
				list.forEach((item, index) => {
		          if (index < HOT_SINGER_LEN) {
		            map.hot.items.push(new Singer({
		              id: item.Fsinger_mid,
		              name: item.Fsinger_name
		            }))
		          }
		          const key = item.Findex
		          if (!map[key]) {
		            map[key] = {
		              title: key,
		              items: []
		            }
		          }
		          map[key].items.push(new Singer({
		            id: item.Fsinger_mid,
		            name: item.Fsinger_name
		          }))
		        })
		        // console.log(map)
		        // 为了得到有序列表 处理map
		        let hot = []
		        let ret = []
		        for (let key in map){
		        	// console.log(key)
		        	let val = map[key]
		        	if(val.title.match(/[a-zA-Z]/)){
		        		ret.push(val)
		        	}else if(val.title == HOT_NAME){
		        		hot.push(val)
		        	}
		        }
		        ret.sort((a,b)=>{
		        	return a.title.charCodeAt(0) - b.title.charCodeAt(0)
		        })
		        return hot.concat(ret)
			}
		},
		components:{
			Listview
		}

	}

</script>

<style lang=less>
	.singer{
		position:fixed;
		top:88px;
		bottom: 0;
		width:100%;
	}
</style>