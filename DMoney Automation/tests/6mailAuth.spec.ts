import { test } from '@playwright/test';
import { getMessageContent } from '../services/gmailAuth';

test('read the latest email', async ({ request }) => {
	const messageBody = await getMessageContent(request);

	console.log(messageBody);
});
