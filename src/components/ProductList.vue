<template>
	<div>
		<h3>ProductList-Component</h3>
		<table class="table table-hover product-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in products" track-by="id">
					<td>{{product.name}}</td>
					<td>{{product.description}}</td>
					<td>{{product.price}}:-</td>
					<td>{{product.price}}:-</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({
		props: {
			products: Array
		}
	})
	export default class ProductList extends Vue {

	    alter:Number = 2
	}

</script>
