import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInitiateJob = {
	operation: ['initiateJob'],
	resource: ['speechToText'],
};

const saarikaLanguages = [
	{ name: 'Auto Detect', value: 'unknown' },
	{ name: 'Bengali', value: 'bn-IN' },
	{ name: 'English', value: 'en-IN' },
	{ name: 'Gujarati', value: 'gu-IN' },
	{ name: 'Hindi', value: 'hi-IN' },
	{ name: 'Kannada', value: 'kn-IN' },
	{ name: 'Malayalam', value: 'ml-IN' },
	{ name: 'Marathi', value: 'mr-IN' },
	{ name: 'Odia', value: 'od-IN' },
	{ name: 'Punjabi', value: 'pa-IN' },
	{ name: 'Tamil', value: 'ta-IN' },
	{ name: 'Telugu', value: 'te-IN' },
];

const saarasLanguages = [
	{ name: 'Assamese', value: 'as-IN' },
	{ name: 'Auto Detect', value: 'unknown' },
	{ name: 'Bengali', value: 'bn-IN' },
	{ name: 'Bodo', value: 'brx-IN' },
	{ name: 'Dogri', value: 'doi-IN' },
	{ name: 'English', value: 'en-IN' },
	{ name: 'Gujarati', value: 'gu-IN' },
	{ name: 'Hindi', value: 'hi-IN' },
	{ name: 'Kannada', value: 'kn-IN' },
	{ name: 'Kashmiri', value: 'ks-IN' },
	{ name: 'Konkani', value: 'kok-IN' },
	{ name: 'Maithili', value: 'mai-IN' },
	{ name: 'Malayalam', value: 'ml-IN' },
	{ name: 'Manipuri', value: 'mni-IN' },
	{ name: 'Marathi', value: 'mr-IN' },
	{ name: 'Nepali', value: 'ne-IN' },
	{ name: 'Odia', value: 'od-IN' },
	{ name: 'Punjabi', value: 'pa-IN' },
	{ name: 'Sanskrit', value: 'sa-IN' },
	{ name: 'Santali', value: 'sat-IN' },
	{ name: 'Sindhi', value: 'sd-IN' },
	{ name: 'Tamil', value: 'ta-IN' },
	{ name: 'Telugu', value: 'te-IN' },
	{ name: 'Urdu', value: 'ur-IN' },
];

export const speechToTextInitiateJobDescription: INodeProperties[] = [
	{
		displayName: 'Model',
		name: 'model',
		type: 'options',
		options: [
			{
				name: 'Saarika v2.5 (Default)',
				value: 'saarika:v2.5',
				description: 'General purpose model for speech to text transcription',
			},
			{
				name: 'Saaras V3',
				value: 'saaras:v3',
				description: 'State-of-the-art model with flexible output formats and advanced modes',
			},
		],
		default: 'saarika:v2.5',
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		description: 'Model to be used for speech to text transcription in the bulk job. Saarika v2.5 is general purpose, while Saaras V3 is state-of-the-art with advanced modes.',
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.model',
			},
		},
	},
	{
		displayName: 'Mode',
		name: 'mode',
		type: 'options',
		default: 'transcribe',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForInitiateJob,
				model: ['saaras:v3'],
			},
		},
		description: 'Mode of operation (Only applicable for saaras:v3 model)',
		options: [
			{
				name: 'Codemix',
				value: 'codemix',
				description: 'Code-mixed text with English words in English and Indic words in native script',
			},
			{
				name: 'Transcribe',
				value: 'transcribe',
				description: 'Standard transcription in original language with proper formatting',
			},
			{
				name: 'Translate',
				value: 'translate',
				description: 'Translates speech from any supported Indic language to English',
			},
			{
				name: 'Translit',
				value: 'translit',
				description: 'Romanization - Transliterates speech to Latin/Roman script only',
			},
			{
				name: 'Verbatim',
				value: 'verbatim',
				description: 'Exact word-for-word transcription without normalization, preserving filler words and spoken numbers as-is',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.mode',
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language_code',
		type: 'options',
		default: 'unknown',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForInitiateJob,
				model: ['saarika:v2.5'],
			},
		},
		description: 'The language of the input audio. Select "Auto Detect" if unknown.',
		options: saarikaLanguages,
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.language_code',
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language_code_saaras',
		type: 'options',
		default: 'unknown',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForInitiateJob,
				model: ['saaras:v3'],
			},
		},
		description: 'The language of the input audio. Select "Auto Detect" if unknown.',
		options: saarasLanguages,
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.language_code',
			},
		},
	},
	{
		displayName: 'With Timestamps',
		name: 'with_timestamps',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForInitiateJob,
		},
		description: 'Whether to include timestamps in the response',
		routing: {
			send: {
				type: 'body',
				property: 'job_parameters.with_timestamps',
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
		description: 'Whether to enable speaker diarization (identifying and separating different speakers). In Beta mode.',
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
