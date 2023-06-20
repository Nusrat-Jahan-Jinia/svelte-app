<script>
	export let data;
	const title = data.title;
	const people = data.people;
</script>

<div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">{title}</div>
		<div class="flex w-full flex-col">
			<article aria-label="Card example" class="space-y-3 __web-inspector-hide-shortcut__">
				<span class="flex font-bold text-xl text-yellow-600">{people.name}</span>
				<span class="flex font-bold text-base text-black">{people.designation}</span>
				<p class="font-normal text-base text-gray-600">{people.description}</p>
			</article>
			<a href="/people" class="text-yellow-500 font-bold">Back to People</a>
		</div>
	</div>
</div>
