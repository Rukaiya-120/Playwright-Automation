import { APIRequestContext } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const accessToken = process.env.Gmail_Access_Token;

if (!accessToken) {
	throw new Error('Gmail_Access_Token is missing from the .env file.');
}

export { accessToken };

export async function getMessageId(request: APIRequestContext): Promise<string> {
	const response = await request.get(
		'https://gmail.googleapis.com/gmail/v1/users/me/messages',
		{ headers: { Authorization: `Bearer ${accessToken}` } },
	);
	const data = await response.json();
	return data.messages[0].id;
}

export async function getMessageContent(request: APIRequestContext): Promise<string> {
	const messageId = await getMessageId(request);
	const response = await request.get(
		`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
		{ headers: { Authorization: `Bearer ${accessToken}` } },
	);
	const message = await response.json();
	return message.snippet;
}

