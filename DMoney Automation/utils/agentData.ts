import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const agentPhoneFile = path.resolve('playwright/.auth/created-agent-phone.txt');
const agentCredentialsFile = path.resolve('playwright/.auth/created-agent-credentials.json');

export interface AgentCredentials {
  email: string;
  password: string;
}

export async function saveAgentPhone(phone: string): Promise<void> {
  await writeFile(agentPhoneFile, phone, 'utf8');
}

export async function getAgentPhone(): Promise<string> {
  const phone = (await readFile(agentPhoneFile, 'utf8')).trim();

  if (!phone) {
    throw new Error('Created agent phone number is empty. Run the agent creation test first.');
  }

  return phone;
}

export async function saveAgentCredentials(credentials: AgentCredentials): Promise<void> {
  await writeFile(agentCredentialsFile, JSON.stringify(credentials), 'utf8');
}

export async function getAgentCredentials(): Promise<AgentCredentials> {
  const credentials = JSON.parse(await readFile(agentCredentialsFile, 'utf8')) as AgentCredentials;

  if (!credentials.email || !credentials.password) {
    throw new Error('Created agent credentials are incomplete. Run the agent creation test first.');
  }

  return credentials;
}
