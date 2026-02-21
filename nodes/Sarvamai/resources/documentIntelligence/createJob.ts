import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateJob = {
	operation: ['createJob'],
	resource: ['documentIntelligence'],
};

export const documentIntelligenceCreateJobDescription: INodeProperties[] = [
	{
		displayName: 'Job Parameters',
		name: 'job_parameters',
		type: 'collection',
		placeholder: 'Add Parameter',
		default: {},
		displayOptions: {
			show: showOnlyForCreateJob,
		},
		options: [
			{
				displayName: 'Language',
				name: 'language',
				type: 'options',
				options: [
					{ name: 'Assamese (as-IN)', value: 'as-IN' },
					{ name: 'Bengali (Bn-IN)', value: 'bn-IN' },
					{ name: 'Bodo (Bodo-IN)', value: 'bodo-IN' },
					{ name: 'Dogri (Doi-IN)', value: 'doi-IN' },
					{ name: 'English (en-IN)', value: 'en-IN' },
					{ name: 'Gujarati (Gu-IN)', value: 'gu-IN' },
					{ name: 'Hindi (Hi-IN)', value: 'hi-IN' },
					{ name: 'Kannada (Kn-IN)', value: 'kn-IN' },
					{ name: 'Kashmiri (Ks-IN)', value: 'ks-IN' },
					{ name: 'Konkani (Kok-IN)', value: 'kok-IN' },
					{ name: 'Maithili (Mai-IN)', value: 'mai-IN' },
					{ name: 'Malayalam (Ml-IN)', value: 'ml-IN' },
					{ name: 'Manipuri (Mni-IN)', value: 'mni-IN' },
					{ name: 'Marathi (Mr-IN)', value: 'mr-IN' },
					{ name: 'Nepali (Ne-IN)', value: 'ne-IN' },
					{ name: 'Odia (or-IN)', value: 'or-IN' },
					{ name: 'Punjabi (Pa-IN)', value: 'pa-IN' },
					{ name: 'Sanskrit (Sa-IN)', value: 'sa-IN' },
					{ name: 'Santali (Sat-IN)', value: 'sat-IN' },
					{ name: 'Sindhi (Sd-IN)', value: 'sd-IN' },
					{ name: 'Tamil (Ta-IN)', value: 'ta-IN' },
					{ name: 'Telugu (Te-IN)', value: 'te-IN' },
					{ name: 'Urdu (Ur-IN)', value: 'ur-IN' },
				],
				default: 'hi-IN',
				description: 'Primary language of the document',
			},
			{
				displayName: 'Output Format',
				name: 'output_format',
				type: 'options',
				options: [
					{ name: 'HTML', value: 'html' },
					{ name: 'Markdown', value: 'md' },
					{ name: 'JSON', value: 'json' },
				],
				default: 'md',
				description: 'Output format for the extracted content (delivered as a ZIP file)',
			},
		],
	},
	{
		displayName: 'Callback',
		name: 'callback',
		type: 'collection',
		placeholder: 'Add Callback',
		default: {},
		displayOptions: {
			show: showOnlyForCreateJob,
		},
		options: [
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'HTTPS webhook URL to call upon job completion',
			},
			{
				displayName: 'Auth Token',
				name: 'auth_token',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Authorization token sent in header',
			},
		],
	},
];
