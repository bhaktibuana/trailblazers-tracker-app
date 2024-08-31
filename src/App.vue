<template>
	<component v-if="$route.meta.layout" :is="$route.meta.layout">
		<router-view />
	</component>
	<template v-else>
		<router-view />
	</template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import { setAppTheme } from '@/shared/utils';

const { locale } = useI18n();

onMounted(() => {
	setAppTheme('light');
	locale.value = 'en';
});
</script>
