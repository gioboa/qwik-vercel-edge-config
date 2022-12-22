import { $, component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
	const state = useSignal('');
	const onClick = $(async () => {
		const name = await fetch('/api/give-me-the-goat');
		state.value = (await name.json()).name;
	});

	return (
		<div class='flex justify-center mt-10'>
			<div class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-10'>
				<div class='flex flex-col items-center pb-10'>
					{state.value === 'Ronaldo' ? (
						<img
							class='w-24 h-24 mb-3 rounded-full'
							src='https://shorturl.at/dDNSX'
							alt='images'
						/>
					) : state.value === 'Messi' ? (
						<img
							class='w-24 h-24 mb-3 rounded-full'
							src='https://shorturl.at/dwxEN'
							alt='images'
						/>
					) : (
						<img
							class='w-24 h-24 mb-3 rounded-full'
							src='https://shorturl.at/gIJYZ'
							alt='images'
						/>
					)}
					<h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
						{state.value}&nbsp;
					</h5>
					<div class='flex mt-4 space-x-3 md:mt-6'>
						<button
							onClick$={onClick}
							class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
						>
							Who is the GOAT?
						</button>
					</div>
				</div>
			</div>
		</div>
	);
});
