<template>
	<div class="_topnav-left-content">
		<div class="_topnav-left-content-title-wrapper">
			<img :src="TaikoLogo" alt="taiko" />

			<h1 class="_topnav-left-content-title">
				<span class="t1">t</span>
				<span class="t2">racker</span>
			</h1>
		</div>
	</div>
</template>

<script setup lang="ts">
import TaikoLogo from '@/assets/icons/taiko.svg';
</script>

<style scoped lang="scss">
._topnav-left-content {
	width: auto;
	height: 65%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

._topnav-left-content-title-wrapper {
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 8px;

	& > h1._topnav-left-content-title {
		margin: 0;
		font-weight: 600;
		font-size: 24px;

		& > .t1 {
			color: var(--color-primary);
		}

		& > .t2 {
			color: var(--color-text-001);
		}
	}
}
</style>
