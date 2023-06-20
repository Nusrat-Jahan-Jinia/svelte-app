<script>
	import { page } from '$app/stores';
</script>

<h1 class="font-semibold text-base text-red-500">{$page.status}: {$page.error?.message}</h1>
