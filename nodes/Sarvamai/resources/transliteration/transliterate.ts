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
		description: 'The text you want to transliterate',
		routing: {
			send: {
				type: 'body',
				property: 'input',
			},
		},
	},
	{
		displayName: 'Source Language Code',
		name: 'source_language_code',
		type: 'options',
		options: transliterationLanguages,
		default: 'auto',
		required: true,
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'The language code of the input text',
		routing: {
			send: {
				type: 'body',
				property: 'source_language_code',
			},
		},
	},
	{
		displayName: 'Target Language Code',
		name: 'target_language_code',
		type: 'options',
		options: targetTransliterationLanguages,
		default: 'en-IN',
		required: true,
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'The language code of the transliteration text',
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
			{ name: 'International (0-9)', value: 'international' },
			{ name: 'Native', value: 'native' },
		],
		default: 'international',
		displayOptions: {
			show: showOnlyForTransliterate,
		},
		description: 'Controls whether to use regular or language-specific native numerals',
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
		description: 'Whether to convert text into a natural spoken form',
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
			{ name: 'English', value: 'english' },
			{ name: 'Native', value: 'native' },
		],
		default: 'native',
		displayOptions: {
			show: {
				...showOnlyForTransliterate,
				spoken_form: [true],
			},
		},
		description: 'Specifies the language in which numbers will be spoken when spoken form is true',
		routing: {
			send: {
				type: 'body',
				property: 'spoken_form_numerals_language',
			},
		},
	},
];
