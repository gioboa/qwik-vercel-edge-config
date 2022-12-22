import type { RequestHandler } from '@builder.io/qwik-city';
import { createClient } from '@vercel/edge-config';

export const edgeConfigClient = createClient(import.meta.env.VITE_EDGE_CONFIG);

export const onGet: RequestHandler<{ name: string }> = async () => {
	const name = await edgeConfigClient.get('GOAT');
	return { name };
};
