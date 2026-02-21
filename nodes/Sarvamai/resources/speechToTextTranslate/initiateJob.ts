import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInitiateJob = {
	operation: ['initiateJob'],
	resource: ['speechToTextTranslate'],
};

export const speechToTextTranslateInitiateJobDescription: INodeProperties[] = [
	{
		displayName: 'Model',
		name: 'model',
		type: 'options',
		options: [
			{
				name: 'Saaras v2.5 (Default)',
				value: 'saaras:v2.5',
				description: 'Translation model that translates audio from any spoken Indic language to English (e.g., Hindi audio → English text output)',
			},
		],
		default: 'saaras:v2.5',
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		description: 'Model to be used for speech to text translation in the bulk job. Saaras v2.5 translates audio from any spoken Indic language to English.',
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.model',
			},
		},
	},
	{
		displayName: 'PTU ID',
		name: 'ptu_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		description: 'Unique identifier for the Provisioned Throughput Unit (PTU) to be used for this job',
		routing: {
			send: {
				type: 'query',
				property: 'ptu_id',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		description: 'Conversation context can be passed as a prompt to boost model accuracy. (Note: Experimental feature).',
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.prompt',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'With Diarization',
		name: 'with_diarization',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		description: 'Whether to enable speaker diarization (identifying and separating different speakers). In Beta mode. Providing speaker-specific segments in response.',
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.with_diarization',
			},
		},
	},
	{
		displayName: 'Number of Speakers',
		name: 'num_speakers',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 1,
		displayOptions: {
			show: {
				...showOnlyForInitiateJob,
				with_diarization: [true],
			},
		},
		description: 'Number of speakers to be detected in the audio. Used when diarization is enabled.',
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.num_speakers',
			},
		},
	},
	{
		displayName: 'Callback',
		name: 'callback',
		type: 'fixedCollection',
		placeholder: 'Add Callback',
		default: {},
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		options: [
			{
				displayName: 'Callback Details',
				name: 'callbackDetails',
				values: [
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						required: true,
						description: 'Webhook URL to call upon job completion',
					},
					{
						displayName: 'Auth Token',
						name: 'auth_token',
						type: 'string',
						typeOptions: { password: true },
						default: '',
						description: 'Authorization token required for the callback URL',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'callback',
				value: '={{$value.callbackDetails}}',
			},
		},
	},
];
