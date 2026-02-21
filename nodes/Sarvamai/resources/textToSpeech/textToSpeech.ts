import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTTS = {
	operation: ['convert'],
	resource: ['textToSpeech'],
};

const showForBulbulV3 = {
	...showOnlyForTTS,
	model: ['bulbul:v3'],
};

const showForBulbulV2 = {
	...showOnlyForTTS,
	model: ['bulbul:v2'],
};

export const textToSpeechDescription: INodeProperties[] = [
	{
		displayName: 'Model',
		name: 'model',
		type: 'options',
		options: [
			{
				name: 'Bulbul V3 (Latest, 30+ Voices, Temperature Control)',
				value: 'bulbul:v3',
				description: 'Improved quality, support for expressive speech, and more voices',
			},
			{
				name: 'Bulbul V2 (Legacy, Pitch & Loudness Control)',
				value: 'bulbul:v2',
				description: 'Legacy model supporting pitch and loudness adjustments',
			},
		],
		default: 'bulbul:v3',
		displayOptions: {
			show: showOnlyForTTS,
		},
		description: 'The model to use for TTS conversion. Choose V3 for best quality.',
		routing: {
			send: {
				type: 'body',
				property: 'model',
			},
		},
	},
	{
		displayName: 'Target Language',
		name: 'target_language_code',
		type: 'options',
		options: [
			{ name: 'Bengali (Bn-IN)', value: 'bn-IN' },
			{ name: 'English (en-IN)', value: 'en-IN' },
			{ name: 'Gujarati (Gu-IN)', value: 'gu-IN' },
			{ name: 'Hindi (Hi-IN)', value: 'hi-IN' },
			{ name: 'Kannada (Kn-IN)', value: 'kn-IN' },
			{ name: 'Malayalam (Ml-IN)', value: 'ml-IN' },
			{ name: 'Marathi (Mr-IN)', value: 'mr-IN' },
			{ name: 'Odia (Od-IN)', value: 'od-IN' },
			{ name: 'Punjabi (Pa-IN)', value: 'pa-IN' },
			{ name: 'Tamil (Ta-IN)', value: 'ta-IN' },
			{ name: 'Telugu (Te-IN)', value: 'te-IN' },
		],
		default: 'hi-IN',
		required: true,
		displayOptions: {
			show: showOnlyForTTS,
		},
		description: 'The language for text processing and normalization',
		routing: {
			send: {
				type: 'body',
				property: 'target_language_code',
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTTS,
		},
		description: 'The text to convert to speech. Use commas for large numbers (e.g., 10,000). bulbul:v3 supports max 2500 chars, bulbul:v2 max 1500 chars.',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Speaker',
		name: 'speaker',
		type: 'options',
		displayOptions: {
			show: showForBulbulV3,
		},
		options: [
			{ name: 'Aayan', value: 'aayan' },
			{ name: 'Aditya', value: 'aditya' },
			{ name: 'Advait', value: 'advait' },
			{ name: 'Amelia', value: 'amelia' },
			{ name: 'Amit', value: 'amit' },
			{ name: 'Anand', value: 'anand' },
			{ name: 'Ashutosh', value: 'ashutosh' },
			{ name: 'Dev', value: 'dev' },
			{ name: 'Gokul', value: 'gokul' },
			{ name: 'Ishita', value: 'ishita' },
			{ name: 'Kabir', value: 'kabir' },
			{ name: 'Kavitha', value: 'kavitha' },
			{ name: 'Kavya', value: 'kavya' },
			{ name: 'Manan', value: 'manan' },
			{ name: 'Mani', value: 'mani' },
			{ name: 'Mohit', value: 'mohit' },
			{ name: 'Neha', value: 'neha' },
			{ name: 'Pooja', value: 'pooja' },
			{ name: 'Priya', value: 'priya' },
			{ name: 'Rahul', value: 'rahul' },
			{ name: 'Ratan', value: 'ratan' },
			{ name: 'Rehan', value: 'rehan' },
			{ name: 'Ritu', value: 'ritu' },
			{ name: 'Rohan', value: 'rohan' },
			{ name: 'Roopa', value: 'roopa' },
			{ name: 'Rupali', value: 'rupali' },
			{ name: 'Shreya', value: 'shreya' },
			{ name: 'Shruti', value: 'shruti' },
			{ name: 'Shubh (Default)', value: 'shubh' },
			{ name: 'Simran', value: 'simran' },
			{ name: 'Soham', value: 'soham' },
			{ name: 'Sophia', value: 'sophia' },
			{ name: 'Suhani', value: 'suhani' },
			{ name: 'Sumit', value: 'sumit' },
			{ name: 'Sunny', value: 'sunny' },
			{ name: 'Tanya', value: 'tanya' },
			{ name: 'Tarun', value: 'tarun' },
			{ name: 'Varun', value: 'varun' },
			{ name: 'Vijay', value: 'vijay' },
		],
		default: 'shubh',
		description: 'The speaker voice to be used (bulbul:v3 compatibility)',
		routing: {
			send: {
				type: 'body',
				property: 'speaker',
			},
		},
	},
	{
		displayName: 'Speaker',
		name: 'speaker',
		type: 'options',
		displayOptions: {
			show: showForBulbulV2,
		},
		options: [
			{ name: 'Abhilash (Male)', value: 'abhilash' },
			{ name: 'Anushka (Default Female)', value: 'anushka' },
			{ name: 'Arya (Female)', value: 'arya' },
			{ name: 'Hitesh (Male)', value: 'hitesh' },
			{ name: 'Karun (Male)', value: 'karun' },
			{ name: 'Manisha (Female)', value: 'manisha' },
			{ name: 'Vidya (Female)', value: 'vidya' },
		],
		default: 'anushka',
		description: 'The speaker voice to be used (bulbul:v2 compatibility)',
		routing: {
			send: {
				type: 'body',
				property: 'speaker',
			},
		},
	},
	{
		displayName: 'Additional Settings',
		name: 'additionalSettings',
		type: 'collection',
		placeholder: 'Add Setting',
		default: {},
		displayOptions: {
			show: showOnlyForTTS,
		},
		options: [
			{
				displayName: 'Enable Preprocessing',
				name: 'enable_preprocessing',
				type: 'boolean',
				default: false,
				displayOptions: {
					show: showForBulbulV2,
				},
				description: 'Whether to normalize English words and numeric entities (v2 only)',
				routing: {
					send: {
						type: 'body',
						property: 'enable_preprocessing',
					},
				},
			},
			{
				displayName: 'Loudness',
				name: 'loudness',
				type: 'number',
				typeOptions: {
					minValue: 0.3,
					maxValue: 3.0,
				},
				default: 1,
				displayOptions: {
					show: showForBulbulV2,
				},
				description: 'Controls the loudness of the audio (v2 only). Suitable range: 0.3 to 3.0.',
				routing: {
					send: {
						type: 'body',
						property: 'loudness',
					},
				},
			},
			{
				displayName: 'Output Audio Codec',
				name: 'output_audio_codec',
				type: 'options',
				options: [
					{ name: 'AAC', value: 'aac' },
					{ name: 'ALaw', value: 'alaw' },
					{ name: 'FLAC', value: 'flac' },
					{ name: 'Linear16', value: 'linear16' },
					{ name: 'MP3', value: 'mp3' },
					{ name: 'MuLaw', value: 'mulaw' },
					{ name: 'Opus', value: 'opus' },
					{ name: 'WAV (Default)', value: 'wav' },
				],
				default: 'wav',
				description: 'Specifies the audio codec for the output audio file',
				routing: {
					send: {
						type: 'body',
						property: 'output_audio_codec',
					},
				},
			},
			{
				displayName: 'Pace (bulbul:V2)',
				name: 'paceV2',
				type: 'number',
				typeOptions: {
					minValue: 0.3,
					maxValue: 3.0,
				},
				default: 1,
				description: 'Controls the speed of the audio for bulbul:v2 (0.3 to 3.0)',
				routing: {
					send: {
						type: 'body',
						property: 'pace',
					},
				},
				displayOptions: {
					show: showForBulbulV2,
				},
			},
			{
				displayName: 'Pace (bulbul:V3)',
				name: 'paceV3',
				type: 'number',
				typeOptions: {
					minValue: 0.5,
					maxValue: 2.0,
				},
				default: 1,
				description: 'Controls the speed of the audio for bulbul:v3 (0.5 to 2.0)',
				routing: {
					send: {
						type: 'body',
						property: 'pace',
					},
				},
				displayOptions: {
					show: showForBulbulV3,
				},
			},
			{
				displayName: 'Pitch',
				name: 'pitch',
				type: 'number',
				typeOptions: {
					minValue: -0.75,
					maxValue: 0.75,
				},
				default: 0,
				displayOptions: {
					show: showForBulbulV2,
				},
				description: 'Controls the pitch of the audio (v2 only). Suitable range: -0.75 to 0.75.',
				routing: {
					send: {
						type: 'body',
						property: 'pitch',
					},
				},
			},
			{
				displayName: 'Speech Sample Rate',
				name: 'speech_sample_rate',
				type: 'options',
				options: [
					{ name: '8000 Hz', value: '8000' },
					{ name: '16000 Hz', value: '16000' },
					{ name: '22050 Hz', value: '22050' },
					{ name: '24000 Hz (Default)', value: '24000' },
					{ name: '32000 Hz (V3 Only)', value: '32000' },
					{ name: '44100 Hz (V3 Only)', value: '44100' },
					{ name: '48000 Hz (V3 Only)', value: '48000' },
				],
				default: '24000',
				description: 'Sample rate of the output audio. Higher rates are V3 only.',
				routing: {
					send: {
						type: 'body',
						property: 'speech_sample_rate',
					},
				},
			},
			{
				displayName: 'Temperature',
				name: 'temperature',
				type: 'number',
				typeOptions: {
					minValue: 0.01,
					maxValue: 2.0,
				},
				default: 0.6,
				description: 'Controls randomness and expressiveness (v3 only). Lower is stable, higher is more expressive.',
				routing: {
					send: {
						type: 'body',
						property: 'temperature',
					},
				},
				displayOptions: {
					show: showForBulbulV3,
				},
			},
		],
	},
];
