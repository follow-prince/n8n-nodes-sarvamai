import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTranscribe = {
	operation: ['transcribe'],
	resource: ['speechToText'],
};

const saarikaLanguages = [
	{ name: 'Auto Detect', value: 'unknown' },
	{ name: 'Hindi', value: 'hi-IN' },
	{ name: 'Bengali', value: 'bn-IN' },
	{ name: 'Kannada', value: 'kn-IN' },
	{ name: 'Malayalam', value: 'ml-IN' },
	{ name: 'Marathi', value: 'mr-IN' },
	{ name: 'Odia', value: 'od-IN' },
	{ name: 'Punjabi', value: 'pa-IN' },
	{ name: 'Tamil', value: 'ta-IN' },
	{ name: 'Telugu', value: 'te-IN' },
	{ name: 'English', value: 'en-IN' },
	{ name: 'Gujarati', value: 'gu-IN' },
];

const saarasLanguages = [
	...saarikaLanguages,
	{ name: 'Assamese', value: 'as-IN' },
	{ name: 'Urdu', value: 'ur-IN' },
	{ name: 'Nepali', value: 'ne-IN' },
	{ name: 'Konkani', value: 'kok-IN' },
	{ name: 'Kashmiri', value: 'ks-IN' },
	{ name: 'Sindhi', value: 'sd-IN' },
	{ name: 'Sanskrit', value: 'sa-IN' },
	{ name: 'Santali', value: 'sat-IN' },
	{ name: 'Manipuri', value: 'mni-IN' },
	{ name: 'Bodo', value: 'brx-IN' },
	{ name: 'Maithili', value: 'mai-IN' },
	{ name: 'Dogri', value: 'doi-IN' },
];

export const speechToTextTranscribeDescription: INodeProperties[] = [
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		required: true,
		displayOptions: {
			show: showOnlyForTranscribe,
		},
		description: 'Name of the binary property which contains the audio file to be transcribed. Best for quick responses (< 30s). For longer files or speaker identification (diarization), use the Batch API.',
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
		default: 'saarika:v2.5',
		required: true,
		displayOptions: {
			show: showOnlyForTranscribe,
		},
		options: [
			{
				name: 'Saarika v2.5 (Default)',
				value: 'saarika:v2.5',
				description: 'Transcribes audio in the spoken language. Best for general use.',
			},
			{
				name: 'Saaras V3',
				value: 'saaras:v3',
				description: 'State-of-the-art model with flexible output formats and advanced modes',
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
		displayName: 'Mode',
		name: 'mode',
		type: 'options',
		default: 'transcribe',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForTranscribe,
				model: ['saaras:v3'],
			},
		},
		description: 'Mode of operation (Only applicable for saaras:v3 model)',
		options: [
			{
				name: 'Codemix',
				value: 'codemix',
				description: 'Code-mixed text with English words in English and Indic words in native script. Example: "मेरा phone number है 9840950950".',
			},
			{
				name: 'Transcribe',
				value: 'transcribe',
				description: 'Standard transcription in original language with proper formatting. Example: "मेरा फोन नंबर है 9840950950".',
			},
			{
				name: 'Translate',
				value: 'translate',
				description: 'Translates speech from any supported Indic language to English. Example: "My phone number is 9840950950".',
			},
			{
				name: 'Translit',
				value: 'translit',
				description: 'Romanization - Transliterates speech to Latin/Roman script only. Example: "mera phone number hai 9840950950".',
			},
			{
				name: 'Verbatim',
				value: 'verbatim',
				description: 'Exact word-for-word transcription without normalization. Example: "मेरा फोन नंबर है नौ आठ चार zero नौ पांच zero नौ पांच zero".',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'mode',
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
				...showOnlyForTranscribe,
				model: ['saarika:v2.5'],
			},
		},
		description: 'The language of the input audio. Select "Auto Detect" if unknown.',
		options: saarikaLanguages,
		routing: {
			send: {
				type: 'body',
				property: 'language_code',
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
				...showOnlyForTranscribe,
				model: ['saaras:v3'],
			},
		},
		description: 'The language of the input audio. Select "Auto Detect" if unknown.',
		options: saarasLanguages,
		routing: {
			send: {
				type: 'body',
				property: 'language_code',
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
		description: 'Codec/format of the input file. For PCM files, you must specify the codec; they are supported only at 16kHz sample rate.',
		options: [
			{ name: 'AAC', value: 'aac' },
			{ name: 'AAC (Alias)', value: 'x-aac' },
			{ name: 'AIFF', value: 'aiff' },
			{ name: 'AIFF (Alias)', value: 'x-aiff' },
			{ name: 'AMR', value: 'amr' },
			{ name: 'FLAC', value: 'flac' },
			{ name: 'FLAC (Alias)', value: 'x-flac' },
			{ name: 'MP3', value: 'mp3' },
			{ name: 'MP3 (Mpeg)', value: 'mpeg' },
			{ name: 'MP3 (Mpeg3)', value: 'mpeg3' },
			{ name: 'MP3 (X-Mp3)', value: 'x-mp3' },
			{ name: 'MP3 (X-Mpeg-3)', value: 'x-mpeg-3' },
			{ name: 'MP4/M4A', value: 'mp4' },
			{ name: 'MP4/M4A (Alias)', value: 'x-m4a' },
			{ name: 'OGG', value: 'ogg' },
			{ name: 'Opus', value: 'opus' },
			{ name: 'PCM L16', value: 'pcm_l16' },
			{ name: 'PCM Raw', value: 'pcm_raw' },
			{ name: 'PCM S16LE', value: 'pcm_s16le' },
			{ name: 'WAV', value: 'wav' },
			{ name: 'WAV (Wave)', value: 'wave' },
			{ name: 'WAV (X-Wav)', value: 'x-wav' },
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
