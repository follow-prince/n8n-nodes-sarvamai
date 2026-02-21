import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInitiateJob = {
	operation: ['initiateJob'],
	resource: ['speechToTextTranslate'],
};

export const speechToTextTranslateInitiateJobDescription: INodeProperties[] = [
	{
		displayName: 'Job Parameters',
		name: 'jobParameters',
		type: 'collection',
		placeholder: 'Add Parameter',
		default: {},
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		required: true,
		options: [
			{
				displayName: 'Model',
				name: 'model',
				type: 'options',
				options: [
					{
						name: 'Saaras v2.5',
						value: 'saaras:v2.5',
					},
				],
				default: 'saaras:v2.5',
				description: 'Model to be used for speech to text translation',
			},
			{
				displayName: 'Prompt',
				name: 'prompt',
				type: 'string',
				default: '',
				description: 'Prompt to assist the transcription',
			},
			{
				displayName: 'With Diarization',
				name: 'with_diarization',
				type: 'boolean',
				default: false,
				description: 'Whether to enable speaker diarization',
			},
			{
				displayName: 'Number of Speakers',
				name: 'num_speakers',
				type: 'number',
				default: 1,
				description: 'Number of speakers to be detected in the audio',
				displayOptions: {
					show: {
						with_diarization: [true],
					},
				},
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters',
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
