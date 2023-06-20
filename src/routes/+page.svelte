<script>
	import banner from '$lib/assets/home-banner.jpg'
	import gallery1 from '$lib/assets/gallery1.jpg'
	import gallery2 from '$lib/assets/gallery2.jpg'
	import gallery3 from '$lib/assets/gallery3.jpg'
	import gallery4 from '$lib/assets/gallery4.jpg'
	import gallery5 from '$lib/assets/gallery5.jpg'
	import gallery6 from '$lib/assets/gallery6.jpg'

	import hover1 from '$lib/assets/hover1.jpg'
	import hover2 from '$lib/assets/hover2.jpg'
	import hover3 from '$lib/assets/hover3.jpg'
	import hover4 from '$lib/assets/hover4.jpg'
	import hover5 from '$lib/assets/hover5.jpg'
	import hover6 from '$lib/assets/hover6.jpg'
	import history from '$lib/assets/history.png'
</script>

<div class="w-full flex flex-col md:flex-row">
	<div class="w-full md:w-2/5 flex bg-black items-center pr-0 md:pr-20">
		<div
			class="hidden md:flex md:w-1/4 2xl:w-1/6 min-[1600px]:w-1/4 max-[1700px]:w-1/4 min-[1701px]:w-2/5 max-[1800px]:w-2/5 min-[1801px]:w-1/3 max-[1900px]:w-1/3 min-[1901px]:w-2/5 max-[2000px]:w-2/5"
		/>
		<div
			class="flex w-full p-9 md:p-0 md:w-3/4 2xl:w-5/6 min-[1600px]:w-3/4 max-[1700px]:w-3/4 min-[1600px]:pl-4 max-[1700px]:pl-4 min-[1701px]:w-3/5 max-[1800px]:w-3/5 min-[1801px]:w-2/3 max-[1900px]:w-2/3"
		>
			<div class="flex flex-col pb-10">
				<div class="home-header text-white text-5xl lg:text-7xl">
					Welcome to
					<span class="text-yellow-500 font-bold">Parliament Members Club</span>
				</div>
				<div class="h-1 w-20 flex my-6">
					<span class="bg-red-600 flex w-8" />
					<span class="bg-green-600 flex w-8" />
				</div>
				<p class="white-para text-base lg:text-xl">
					Bangladesh Parliament Members Club' has been established to promote mutual harmony,
					cooperation and good relations among the members of the National Parliament, to practice
					parliamentary etiquette and parliamentary amenities for the institutionalization of
					parliamentary democracy, and to develop physical and mental fitness through leisure time
					entertainment for the members
				</p>
			</div>
		</div>
	</div>
	<div class="w-full md:w-3/5 flex">
		<img class="object-cover w-full" alt="banner img" src={banner} />
	</div>
</div>

<!-- gallery starts -->
<div class="w-full">
	<div class="container mx-auto p-9 lg:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="yellow-header">GALLERY</div>
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
			<div class="flex group h-32 md:h-96">
				<img class="object-cover w-full group-hover:hidden" alt="banner img" src={gallery1} />
				<img class="object-cover w-full hidden group-hover:flex" alt="banner img" src={hover1} />
			</div>
			<div class="flex group h-32 md:h-96">
				<img class="object-cover w-full group-hover:hidden" alt="banner img" src={gallery2} />
				<img class="object-cover w-full hidden group-hover:flex" alt="banner img" src={hover2} />
			</div>
			<div class="flex group h-32 md:h-96">
				<img class="object-cover w-full group-hover:hidden" alt="banner img" src={gallery3} />
				<img class="object-cover w-full hidden group-hover:flex" alt="banner img" src={hover3} />
			</div>
			<div class="flex group h-32 md:h-96">
				<img class="object-cover w-full group-hover:hidden" alt="banner img" src={gallery4} />
				<img class="object-cover w-full hidden group-hover:flex" alt="banner img" src={hover4} />
			</div>
			<div class="flex group h-32 md:h-96">
				<img class="object-cover w-full group-hover:hidden" alt="banner img" src={gallery5} />
				<img class="object-cover w-full hidden group-hover:flex" alt="banner img" src={hover5} />
			</div>
			<div class="flex group h-32 md:h-96">
				<img class="object-cover w-full group-hover:hidden" alt="banner img" src={gallery6} />
				<img class="object-cover w-full hidden group-hover:flex" alt="banner img" src={hover6} />
			</div>
		</div>
	</div>
</div>
<!-- history starts -->
<div class="w-full">
	<div class="container mx-auto px-9 py-9 md:px-0 md:py-20 min-[1536px]:px-20 max-[1800px]:px-20">
		<div class="flex w-full flex-col md:flex-row md:space-x-20">
			<div class="flex w-full md:w-2/5">
				<img alt="facility img" class="object-contain" src={history} />
			</div>
			<div class="flex w-full md:w-3/5">
				<div class="flex flex-col pt-9 md:pt-0">
					<div class="yellow-header">HISTORY</div>
					<div class="flex flex-col">
						<div class="home-header text-5xl md:text-7xl">
							A taste of heritage and the excellence of architecture
						</div>
						<div class="h-1 flex my-6">
							<span class="bg-red-600 flex w-8" />
							<span class="bg-green-600 flex w-8" />
						</div>
						<div class="black-para text-base md:text-xl">
							The Constituent Assembly of Bangladesh and the first Parliament held their sittings in
							the building that now houses the Prime Minister's Office and which is often referred
							as the old Shangshad Bhaban (old Parliament House). The second Parliament also held
							most of its sittings in that building, the last sitting being on 10 July 1981. It was
							during the tenure of the second Parliament that the present Parliament building, or
							Shangshad Bhaban, located at Sher-e-Bangla Nagar, became functional. Its eighth, and
							incidentally the last session, commenced on 15 February 1982 in the new building.
						</div>
						<div class="black-para text-base md:text-xl pt-3">
							The Constituent Assembly of Bangladesh and the first Parliament held their sittings in
							the building that now houses the Prime Minister's Office and which is often referred
							as the old Shangshad Bhaban (old Parliament House). The second Parliament also held
							most of its sittings in that building, the last sitting being on 10 July 1981. It was
							during the tenure of the second Parliament that the present Parliament building, or
							Shangshad Bhaban, located at Sher-e-Bangla Nagar, became functional. Its eighth, and
							incidentally the last session, commenced on 15 February 1982 in the new building.
						</div>
						<span class="flex pt-10"
							><a href="/about" class="readmore text-base md:text-xl">Read More ></a></span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
