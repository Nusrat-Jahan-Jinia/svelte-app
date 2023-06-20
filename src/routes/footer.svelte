<script>
	import '../app.css'
	import logo from '$lib/assets/logo.jpeg'
	import fb from '$lib/assets/fb.svg'
	import fbhover from '$lib/assets/fb-hover.svg'
	import instagram from '$lib/assets/instagram.svg'
	import instagramhover from '$lib/assets/instagram-hover.svg'
</script>

<div class="w-full bg-black hidden lg:flex">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="grid grid-cols-4">
			<div class="flex items-center">
				<div class="flex space-x-4">
					<div class="relative">
						<a href="https://www.instagram.com/"
							><img class="opacity-100 hover:opacity-0" alt="facility img" src={fb} /></a
						>
						<div class="top-0 h-10 w-12 absolute">
							<a
								href="https://www.facebook.com/pages/Parliament-Members-Club/203671286335535"
								target="_blank"
								><img class="opacity-0 hover:opacity-100" alt="facility img" src={fbhover} /></a
							>
						</div>
					</div>
					<div class="relative">
						<a href="https://www.instagram.com/"
							><img class="opacity-100 hover:opacity-0" alt="facility img" src={instagram} /></a
						>
						<div class="top-0 h-10 w-12 absolute">
							<a href="https://www.instagram.com/" target="_blank"
								><img
									class="opacity-0 hover:opacity-100"
									alt="facility img"
									src={instagramhover}
								/></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
