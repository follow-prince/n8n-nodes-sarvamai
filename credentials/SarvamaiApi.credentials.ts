import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SarvamaiApi implements ICredentialType {
	name = 'sarvamaiApi';

	displayName = 'Sarvamai API';

	icon = { light: 'file:Sarvamai.svg', dark: 'file:Sarvamai.dark.svg' } as const;

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/@follow-prince/-sarvamai?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Your Sarvam AI API subscription key',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api-subscription-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.sarvam.ai',
			url: '/translate',
			method: 'POST',
			body: {
				input: 'Hello',
				source_language_code: 'auto',
				target_language_code: 'hi-IN',
			},
		},
	};
}
