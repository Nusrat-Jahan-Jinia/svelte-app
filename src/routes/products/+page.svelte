<script>
	import { products } from '$lib/products';

	export let data;
</script>

<div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">{data.title}</div>
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
			{#each products as product}
				<a href="/products/{product.id}">
					<article
						aria-label="Card example"
						class="space-y-3 border border-transparent hover:border hover:border-yellow-600 __web-inspector-hide-shortcut__"
					>
						<span class="flex font-bold text-xl text-yellow-600">{product.name}</span>
						<span class="flex font-bold text-base text-black">{product.price}</span>
						<p class="font-normal text-base text-gray-600">{product.description}</p>
					</article>
				</a>
			{/each}
		</div>
	</div>
</div>
