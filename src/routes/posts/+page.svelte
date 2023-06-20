<!-- <script lang="ts">
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		});
	}
</script> -->

<!-- <div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">Form</div>
		<form on:submit|preventDefault={subscribe}>
			<input type="text" name="title" />
			<input type="text" name="description" />
			<button class="py-3 text-yellow-600">Submit</button>
		</form>
	</div>
</div> -->
<script lang="ts">
	import type { Post } from '@prisma/client';

	async function getPosts() {
		const response = await fetch('api/posts');
		const posts: Post[] = await response.json();
		return posts;
	}
</script>

<div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">Our available posts</div>
		<div class="flexflex-col w-full">
			{#await getPosts()}
				<p>Loading data...</p>
			{:then posts}
				<p>Showing {posts.length} posts.</p>
				{#each posts as { slug, title, content }}
					<article class="">
						<a href="posts/{slug}" class="h-44 overflow-hidden space-y-4">
							<p class="font-normal text-base text-black">{title}</p>
							<p class="font-normal text-base text-gray-600">{content}</p>
						</a>
					</article>
				{/each}
			{:catch error}
				<p>{error.message}</p>
			{/await}
		</div>
	</div>
</div>

<div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">Form</div>
		<form method="POST" on:submit|preventDefault={addPost}>
			<input type="text" name="title" />
			<input type="text" name="description" />
			<button type="submit" class="py-3 text-yellow-600">Submit</button>
		</form>
	</div>
</div>
