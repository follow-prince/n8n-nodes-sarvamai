import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTranslate = {
	operation: ['translate'],
	resource: ['translation'],
};

const showForMayuraV1 = {
	...showOnlyForTranslate,
	model: ['mayura:v1'],
};

const languageOptions = [
	{ name: 'Auto Detect (mayura:V1 Only)', value: 'auto' },
	{ name: 'Assamese (as-IN)', value: 'as-IN' },
	{ name: 'Bengali (Bn-IN)', value: 'bn-IN' },
	{ name: 'Bodo (Brx-IN)', value: 'brx-IN' },
	{ name: 'Dogri (Doi-IN)', value: 'doi-IN' },
	{ name: 'English (en-IN)', value: 'en-IN' },
	{ name: 'Gujarati (Gu-IN)', value: 'gu-IN' },
	{ name: 'Hindi (Hi-IN)', value: 'hi-IN' },
	{ name: 'Kannada (Kn-IN)', value: 'kn-IN' },
	{ name: 'Kashmiri (Ks-IN)', value: 'ks-IN' },
	{ name: 'Konkani (Kok-IN)', value: 'kok-IN' },
	{ name: 'Maithili (Mai-IN)', value: 'mai-IN' },
	{ name: 'Malayalam (Ml-IN)', value: 'ml-IN' },
	{ name: 'Manipuri / Meiteilon (Mni-IN)', value: 'mni-IN' },
	{ name: 'Marathi (Mr-IN)', value: 'mr-IN' },
	{ name: 'Nepali (Ne-IN)', value: 'ne-IN' },
	{ name: 'Odia (Od-IN)', value: 'od-IN' },
	{ name: 'Punjabi (Pa-IN)', value: 'pa-IN' },
	{ name: 'Sanskrit (Sa-IN)', value: 'sa-IN' },
	{ name: 'Santali (Sat-IN)', value: 'sat-IN' },
	{ name: 'Sindhi (Sd-IN)', value: 'sd-IN' },
	{ name: 'Tamil (Ta-IN)', value: 'ta-IN' },
	{ name: 'Telugu (Te-IN)', value: 'te-IN' },
	{ name: 'Urdu (Ur-IN)', value: 'ur-IN' },
];

const targetLanguageOptions = languageOptions.filter((l) => l.value !== 'auto');

export const translationTranslateDescription: INodeProperties[] = [
	// ── Required fields ──────────────────────────────────────────────────────
	{
		displayName: 'Input Text',
		name: 'input',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		default: '',
		required: true,
		displayOptions: { show: showOnlyForTranslate },
		description:
			'The text to translate. Max 1 000 characters for mayura:v1 and 2 000 characters for sarvam-translate:v1.',
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
		default: 'auto',
		required: true,
		displayOptions: { show: showOnlyForTranslate },
		options: languageOptions,
		description:
			'Source language of the input text. Use "Auto Detect" for automatic detection (mayura:v1 only).',
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
		default: 'hi-IN',
		required: true,
		displayOptions: { show: showOnlyForTranslate },
		options: targetLanguageOptions,
		description: 'The language the text should be translated into',
		routing: {
			send: {
				type: 'body',
				property: 'target_language_code',
			},
		},
	},

	// ── Optional fields ───────────────────────────────────────────────────────
	{
		displayName: 'Model',
		name: 'model',
		type: 'options',
		default: 'mayura:v1',
		displayOptions: { show: showOnlyForTranslate },
		options: [
			{
				name: 'Mayura V1 (12 Languages, All Modes, Auto-Detect)',
				value: 'mayura:v1',
			},
			{
				name: 'Sarvam Translate V1 (22 Languages, Formal Only)',
				value: 'sarvam-translate:v1',
			},
		],
		description: 'The translation model to use',
		routing: {
			send: {
				type: 'body',
				property: 'model',
			},
		},
	},
	{
		displayName: 'Speaker Gender',
		name: 'speaker_gender',
		type: 'options',
		default: '',
		displayOptions: { show: showOnlyForTranslate },
		options: [
			{ name: 'Not Specified', value: '' },
			{ name: 'Male', value: 'Male' },
			{ name: 'Female', value: 'Female' },
		],
		description: 'Gender of the speaker for better translations',
		routing: {
			send: {
				type: 'body',
				property: 'speaker_gender',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'Mode',
		name: 'mode',
		type: 'options',
		default: 'formal',
		displayOptions: { show: showOnlyForTranslate },
		options: [
			{
				name: 'Formal',
				value: 'formal',
				description: 'Supported by both models',
			},
			{
				name: 'Modern Colloquial',
				value: 'modern-colloquial',
				displayOptions: { show: showForMayuraV1 },
				description: 'Mayura:v1 only',
			},
			{
				name: 'Classic Colloquial',
				value: 'classic-colloquial',
				displayOptions: { show: showForMayuraV1 },
				description: 'Mayura:v1 only',
			},
			{
				name: 'Code Mixed',
				value: 'code-mixed',
				displayOptions: { show: showForMayuraV1 },
				description: 'Mayura:v1 only',
			},
		],
		description:
			'Tone/style of the translation. Only "Formal" is supported for sarvam-translate:v1.',
		routing: {
			send: {
				type: 'body',
				property: 'mode',
			},
		},
	},
	{
		displayName: 'Output Script',
		name: 'output_script',
		type: 'options',
		default: 'null',
		displayOptions: { show: showForMayuraV1 },
		options: [
			{
				name: 'None (Default)',
				value: 'null',
				description: 'No transliteration applied',
			},
			{
				name: 'Roman',
				value: 'roman',
				description: 'Output in romanized script',
			},
			{
				name: 'Fully Native',
				value: 'fully-native',
				description: 'Native script with formal style',
			},
			{
				name: 'Spoken Form in Native',
				value: 'spoken-form-in-native',
				description: 'Native script with spoken style',
			},
		],
		description:
			'Controls transliteration style of the output. Only supported for mayura:v1.',
		routing: {
			send: {
				type: 'body',
				property: 'output_script',
				value: '={{$value === "null" ? null : $value}}',
			},
		},
	},
	{
		displayName: 'Numerals Format',
		name: 'numerals_format',
		type: 'options',
		default: 'international',
		displayOptions: { show: showOnlyForTranslate },
		options: [
			{
				name: 'International (0–9)',
				value: 'international',
			},
			{
				name: 'Native (Language-Specific Numerals)',
				value: 'native',
			},
		],
		description: 'Controls whether to use standard or language-specific native numerals',
		routing: {
			send: {
				type: 'body',
				property: 'numerals_format',
			},
		},
	},
];
