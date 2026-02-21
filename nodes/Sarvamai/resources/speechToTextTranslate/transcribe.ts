import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTranscribe = {
	operation: ['transcribe'],
	resource: ['speechToTextTranslate'],
};

export const speechToTextTranslateTranscribeDescription: INodeProperties[] = [
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		required: true,
		displayOptions: {
			show: showOnlyForTranscribe,
		},
		description: 'Name of the binary property which contains the audio file to be transcribed and translated to English. Best for quick responses (< 30s). For longer files or diarization, use the Batch API.',
		routing: {
			send: {
				type: 'body',
				property: 'file',
			},
		},
	},
	{
		displayName: 'Model',
		name: 'model',
		type: 'options',
		default: 'saaras:v2.5',
		required: true,
		displayOptions: {
			show: showOnlyForTranscribe,
		},
		options: [
			{
				name: 'Saaras v2.5 (Default)',
				value: 'saaras:v2.5',
				description: 'Translation model that translates audio from any spoken Indic language to English (e.g., Hindi audio → English text output)',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'model',
			},
		},
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForTranscribe,
		},
		description: 'Optional conversation context can be passed as a prompt to boost model accuracy. (Note: Experimental feature).',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'Input Audio Codec',
		name: 'input_audio_codec',
		type: 'options',
		default: 'wav',
		displayOptions: {
			show: showOnlyForTranscribe,
		},
		description: 'Audio format of the input file. Required ONLY for PCM files (supported at 16kHz only). Most other formats are detected automatically.',
		options: [
			{ name: 'AAC', value: 'aac' },
			{ name: 'AAC (Alias)', value: 'x-aac' },
			{ name: 'AIFF', value: 'aiff' },
			{ name: 'AIFF (Alias)', value: 'x-aiff' },
			{ name: 'AMR', value: 'amr' },
			{ name: 'FLAC', value: 'flac' },
			{ name: 'FLAC (Alias)', value: 'x-flac' },
			{ name: 'MP3', value: 'mp3' },
			{ name: 'MP3 (MPEG)', value: 'mpeg' },
			{ name: 'MP3 (MPEG3)', value: 'mpeg3' },
			{ name: 'MP3 (X-MP3)', value: 'x-mp3' },
			{ name: 'MP3 (X-MPEG-3)', value: 'x-mpeg-3' },
			{ name: 'MP4/M4A', value: 'mp4' },
			{ name: 'MP4/M4A (Alias)', value: 'x-m4a' },
			{ name: 'OGG', value: 'ogg' },
			{ name: 'Opus', value: 'opus' },
			{ name: 'PCM L16', value: 'pcm_l16' },
			{ name: 'PCM Raw', value: 'pcm_raw' },
			{ name: 'PCM S16LE', value: 'pcm_s16le' },
			{ name: 'WAV', value: 'wav' },
			{ name: 'WAV (Wave)', value: 'wave' },
			{ name: 'WAV (X-WAV)', value: 'x-wav' },
			{ name: 'WebM', value: 'webm' },
			{ name: 'WMA', value: 'x-ms-wma' },
		],
		routing: {
			send: {
				type: 'body',
				property: 'input_audio_codec',
				value: '={{$value || undefined}}',
			},
		},
	},
];
