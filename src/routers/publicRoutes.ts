import PageHome from '@/pages/public/Home.vue';
import LayoutPublicPage from '@/components/layouts/public/PublicPage.vue';
import { T_Routes } from '@/shared/types';

export const PublicRoutes: T_Routes[] = [
	{
		name: 'home',
		path: '/',
		component: PageHome,
		meta: {
			isPrivatePage: false,
			isAuthPage: false,
			authorization: 'guest',
			layout: LayoutPublicPage,
		},
	},
];
