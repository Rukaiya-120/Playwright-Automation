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
	const data = await response.json() as { messages?: Array<{ id?: string }>; error?: { message?: string } };

	if (!response.ok()) {
		throw new Error(`Gmail API request failed (${response.status()}): ${data.error?.message ?? 'Unknown error'}`);
	}

	const messageId = data.messages?.[0]?.id;
	if (!messageId) {
		throw new Error('Gmail API returned no messages. Check the mailbox and Gmail access token.');
	}

	return messageId;
}

export async function getMessageContent(request: APIRequestContext): Promise<string> {
	const messageId = await getMessageId(request);
	const response = await request.get(
		`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
		{ headers: { Authorization: `Bearer ${accessToken}` } },
	);
	const message = await response.json() as { snippet?: string; error?: { message?: string } };

	if (!response.ok()) {
		throw new Error(`Gmail message request failed (${response.status()}): ${message.error?.message ?? 'Unknown error'}`);
	}

	if (!message.snippet) {
		throw new Error('Gmail message did not contain a snippet.');
	}

	return message.snippet;
}

