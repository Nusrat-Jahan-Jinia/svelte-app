<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const title = 'Single Post Details';

	function FormatData(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date);
	}
</script>

<div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">{title}</div>
		<div class="flex w-full flex-col">
			<article aria-label="Card example" class="space-y-3 __web-inspector-hide-shortcut__">
				<span class="flex font-bold text-xl text-yellow-600">{data.post.title}</span>
				<span class="flex font-normal text-base text-gray-600">{data.post.content}</span>
			</article>
			<a href="/posts" class="text-yellow-500 font-bold">Back to Posts</a>
		</div>
	</div>
</div>
