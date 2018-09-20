<template>
    <div class="home">
		<div class="top-block"></div>
		<div class="info">
			<h3>Выберите категорию и наслаждайтесь космическими фотографиями!</h3>
		</div>
       <router-link v-for="(item, index) in items"
					:key="index"
					:to="item.url"
					tag="a"
					>
					<span @click="show = true">{{ item.text }}</span>
		</router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
    
export default {
	data() {
		return {
			
		}
	},
    computed: {
		...mapGetters([
            'items'
        ])
    }
}
</script>
<style lang="scss" scoped>
.top-block {
  height: 70px;
  width: 100%;
  background: rgb(19, 17, 34);
  position: fixed;
  top: 0;
  z-index: 100;
}
.home {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	align-items: center;
	& .info {
		color: gainsboro;
		padding-top: 60px;
		& h3 {
			font-weight: normal;
			text-align: center;
			line-height: 30px;
			padding: 0 15px;
		}
	}
	a {
		display: block;
		border: 1px solid gainsboro;
		padding: 10px;
		background: #342d38;
    	text-align: center;
    	margin-bottom: 15px;
    	font-weight: normal;
    	color: gainsboro;
    	padding-right: 15px;
    	font-size: 20px;
		text-decoration: none;
		transition: all .5s;
		& span {
			width: 300px;
			display: block;
			margin-left: -30px;
		}
		&:hover {
			color: #42b983;
		}
    	&.router-link-exact-active {
    	  color: #42b983;
    	}
	  }
}

</style>
