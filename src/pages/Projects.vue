<template>
	<v-slide-y-transition mode="out-in">
		<v-layout>
			<v-flex>

				<h1 class="page-heading mb-3">Projects
					<v-btn color="primary">Add New</v-btn>
				</h1>

				<v-card class="mb-3">
					<v-card-media src="/static/doc-images/desert.jpg" height="200px"></v-card-media>
					<v-card-title primary-title>
						<div>
							<h3 class="headline mb-0">Kangaroo Valley Safari</h3>
							<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn flat color="orange">Share</v-btn>
						<v-btn flat color="orange">Explore</v-btn>
					</v-card-actions>
				</v-card>
				
			</v-flex>
		</v-layout>
	</v-slide-y-transition>
</template>



<style scoped>

</style>
