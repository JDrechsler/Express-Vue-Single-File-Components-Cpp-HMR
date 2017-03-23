<template>
	<form>
		<h3>SaveProductForm-Component</h3>
		<div class="form-group">
			<label for="productName">Product name</label>
			<input type="text" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
		</div>
		<div class="form-group">
			<label for="productDescription">Product description <small class="text-muted">(optional)</small></label>
			<textarea class="form-control" id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
		</div>
		<div class="form-group">
			<label for="price">Price</label>
			<input type="number" class="form-control" id="price" placeholder="Enter Price" number>
		</div>
		<button type="submit" @click.prevent="onSubmit" class="btn btn-primary">Save product</button>
	</form>
</template>


<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({
		props: {
			product: Object
		}
	})
	export default class SaveProductForm extends Vue {

		onSubmit() {
            console.log("adad")
		}
	}

</script>
