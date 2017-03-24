<template>
	<section>
		<h3>Music-Component</h3>
		<h5>Insert YouTube link and click 'load video'.</h5>
		<form>
			<div class="form-group">
				<input class="form-control" v-model="youtubeUrl" placeholder="Enter YouTube url" number>
			</div>
			<span id="youtube"></span>
			<br>
			<button type="submit" @click.prevent="loadUrl" class="btn btn-primary">Load video</button>
		</form>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import * as $ from 'jquery'

	@Component({
		components: {
		}
	})
	export default class Music extends Vue {

		youtubeUrl: String = 'https://www.youtube.com/watch?v=C2RSd1zIRtg'

		loadUrl() {
			$('#youtube').html(`<iframe width="560" height="315" src="${this.youtubeUrl.replace("watch?v=", "embed/")}?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"></iframe>`)
		}
	}

</script>
