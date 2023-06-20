<script>
	import '../app.css'
	import logo from '$lib/assets/logo.jpeg'
	import fb from '$lib/assets/fb.svg'
	import fbhover from '$lib/assets/fb-hover.svg'
	import instagram from '$lib/assets/instagram.svg'
	import instagramhover from '$lib/assets/instagram-hover.svg'
</script>

<nav>
	<div class="w-full sticky top-0 left-0 right-0 bg-zinc-50 z-10">
		<div
			class="hidden container lg:flex mx-auto justify-between py-4 min-[1536px]:px-20 max-[1800px]:px-20"
		>
			<div class="flex w-1/6">
				<a href="/" class="w-20 h-20">
					<img alt="logo" src={logo} />
				</a>
			</div>
			<div class="flex items-center w-4/6 justify-end">
				<ul class="flex md:space-x-2 lg:space-x-9 xl:space-x-12">
					<li class="py-3"><a href="/" class="menu-link hover:text-yellow-500">Home</a></li>
					<li class="py-3">
						<a href="/about" class="menu-link text-black hover:text-yellow-500">About</a>
					</li>
					<li class="py-3">
						<a href="/products" class="menu-link text-black hover:text-yellow-500">Products</a>
					</li>
				</ul>
			</div>
			<div class="flex w-1/6 justify-end items-center">
				<span class="bg-yellow-600 hover:bg-yellow-500 flex items-center justify-center h-10 w-24"
					><a href="/login" class="text-white font-bold text-base font-deca">Log In</a></span
				>
			</div>
		</div>
	</div>
</nav>
