<script>
	export let data;
	const title = data.title;
	const product = data.product;
</script>

<div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">{title}</div>
		<div class="flex w-full">
			<article aria-label="Card example" class="space-y-3 __web-inspector-hide-shortcut__">
				<span class="flex font-bold text-xl text-yellow-600">{product.name}</span>
				<span class="flex font-bold text-base text-black">{product.price}</span>
				<p class="font-normal text-base text-gray-600">{product.description}</p>
			</article>
		</div>
	</div>
</div>
