<script>
	import '../app.css'
	import logo from '$lib/assets/logo.jpeg'
	import fb from '$lib/assets/fb.svg'
	import fbhover from '$lib/assets/fb-hover.svg'
	import instagram from '$lib/assets/instagram.svg'
	import instagramhover from '$lib/assets/instagram-hover.svg'
	import Navbar from './header.svelte'
	import Footer from './footer.svelte'
</script>

<Navbar />
<slot />
<Footer />
