<template>
    <div class="nav" :class="show ? 'menu-close' : 'menu-open'">
		<div @click="show = !show"
			 class="open">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<a href="https://github.com/anton1k" target="_blank" style="text-align: left">Source</a>
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
			show: true
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
.menu-open {
	left: 0;
}
.menu-close {
	left: -300px;
}
.nav {
  padding: 30px;
  background: #10161d;
  margin: 0;
  display: block;
  width: 300px;
  height: 100vh;
  position: fixed;
  border-right: 1px solid rgb(150, 148, 148);
  z-index: 1000;
  transition: all .5s;
  & .open {
	  position: absolute;
	  right: -50px;
	  top: 10px;
	  background: #10161d;
	  width: 50px;
	  height: 45px;
	  border: 1px solid rgb(150, 148, 148);
	  border-left: none;
	  border-top-right-radius: 5px;
	  border-bottom-right-radius: 5px;
	  cursor: pointer;
	  & span {
		  height: 1px;
		  width: 30px;
		  display: block;
		  background: rgb(150, 148, 148);
		  position: absolute;
		  left: 10px;
		  &:nth-child(1) {
			  top: 10px;
		  }
		  &:nth-child(2) {
			  top: 20px;
		  }
		  &:nth-child(3) {
			  top: 30px;
		  }
	  }
  }
  a {
    display: block;
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
