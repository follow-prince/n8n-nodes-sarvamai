import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTransliterate = {
	operation: ['transliterate'],
	resource: ['transliteration'],
};

const transliterationLanguages = [
	{ name: 'Auto Detect', value: 'auto' },
	{ name: 'English (en-IN)', value: 'en-IN' },
	{ name: 'Hindi (Hi-IN)', value: 'hi-IN' },
	{ name: 'Bengali (Bn-IN)', value: 'bn-IN' },
	{ name: 'Gujarati (Gu-IN)', value: 'gu-IN' },
	{ name: 'Kannada (Kn-IN)', value: 'kn-IN' },
	{ name: 'Malayalam (Ml-IN)', value: 'ml-IN' },
	{ name: 'Marathi (Mr-IN)', value: 'mr-IN' },
	{ name: 'Odia (Od-IN)', value: 'od-IN' },
	{ name: 'Punjabi (Pa-IN)', value: 'pa-IN' },
	{ name: 'Tamil (Ta-IN)', value: 'ta-IN' },
	{ name: 'Telugu (Te-IN)', value: 'te-IN' },
];

const targetTransliterationLanguages = transliterationLanguages.filter((l) => l.value !== 'auto');

export const transliterationTransliterateDescription: INodeProperties[] = [
	{
		displayName: 'Input Text',
		name: 'input',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'The text you want to transliterate (convert from one script to another phonetically)',
		routing: {
			send: {
				type: 'body',
				property: 'input',
			},
		},
	},
	{
		displayName: 'Source Language',
		name: 'source_language_code',
		type: 'options',
		options: transliterationLanguages,
		default: 'auto',
		required: true,
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'The language of the input text. Supports Indic languages and English for bidirectional conversion.',
		routing: {
			send: {
				type: 'body',
				property: 'source_language_code',
			},
		},
	},
	{
		displayName: 'Target Language',
		name: 'target_language_code',
		type: 'options',
		options: targetTransliterationLanguages,
		default: 'en-IN',
		required: true,
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'The language/script you want to convert the text into',
		routing: {
			send: {
				type: 'body',
				property: 'target_language_code',
			},
		},
	},
	{
		displayName: 'Numerals Format',
		name: 'numerals_format',
		type: 'options',
		options: [
			{ name: 'International (0-9)', value: 'international', description: 'Use Western Arabic numerals' },
			{ name: 'Native', value: 'native', description: 'Use language-specific native numerals' },
		],
		default: 'international',
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'Controls whether to use standard (0-9) or language-specific native numerals in the output',
		routing: {
			send: {
				type: 'body',
				property: 'numerals_format',
			},
		},
	},
	{
		displayName: 'Spoken Form',
		name: 'spoken_form',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'Whether to convert symbols (like ₹) and numbers into their phonetic spoken equivalents (e.g., "Two Hundred Rupees"). Note: This has no effect if output language is English.',
		routing: {
			send: {
				type: 'body',
				property: 'spoken_form',
			},
		},
	},
	{
		displayName: 'Spoken Form Numerals Language',
		name: 'spoken_form_numerals_language',
		type: 'options',
		options: [
			{ name: 'Native (Default)', value: 'native', description: 'Numbers will be spoken in the native language' },
			{ name: 'English', value: 'english', description: 'Numbers in the text will be spoken in English' },
		],
		default: 'native',
		displayOptions: {
			show: {
				...showOnlyForTransliterate,
				spoken_form: [true],
			},
		},
		description: 'The language used for phonetic representation of numbers. Only applicable when "Spoken Form" is enabled.',
		routing: {
			send: {
				type: 'body',
				property: 'spoken_form_numerals_language',
			},
		},
	},
];
