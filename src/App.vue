<template>
	<div id="app" class="container-fluid">
		<img src="./assets/logo.png">

		<div class="row">
			<div class="col-md-12">
				<ManageProducts></ManageProducts>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<SocketTest></SocketTest>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<Music></Music>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import ManageProducts from './components/ManageProducts.vue'
	import SocketTest from './components/SocketTest.vue'
	import Music from './components/Music.vue'

	@Component({
		components: {
			ManageProducts,
			SocketTest,
			Music
		}
	})

	export default class App extends Vue {

	}

</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		background-color: mintcream;
	}

</style>
