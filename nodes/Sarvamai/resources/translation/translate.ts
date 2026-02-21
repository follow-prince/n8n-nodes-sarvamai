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
	{ name: 'Auto Detect (Mayura Only)', value: 'auto' },
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
		displayName: 'Model',
		name: 'model',
		type: 'options',
		default: 'mayura:v1',
		displayOptions: { show: showOnlyForTranslate },
		options: [
			{
				name: 'Mayura V1 (12 Languages, All Modes, Auto-Detect)',
				value: 'mayura:v1',
				description: 'Supports Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu',
			},
			{
				name: 'Sarvam Translate V1 (22 Languages, Formal Only)',
				value: 'sarvam-translate:v1',
				description: 'Supports all 22 scheduled languages of India (Formal mode only)',
			},
		],
		description: 'The translation model to use. Choose based on language support and features required.',
		routing: {
			send: {
				type: 'body',
				property: 'model',
			},
		},
	},
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
			'The text you want to translate. Maximum 1000 characters for Mayura:v1 and 2000 characters for Sarvam-Translate:v1.',
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
			'The language of the input text. Choose "Auto Detect" if using Mayura:v1 and you want the API to identify the language.',
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
		description: 'The language you want the text to be translated into',
		routing: {
			send: {
				type: 'body',
				property: 'target_language_code',
			},
		},
	},

	// ── Optional fields ───────────────────────────────────────────────────────
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
		description: 'Specify the gender of the speaker for more accurate contextual translation',
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
				description: 'Standard formal language style',
			},
			{
				name: 'Modern Colloquial',
				value: 'modern-colloquial',
				displayOptions: { show: showForMayuraV1 },
				description: 'Modern everyday conversational style (Mayura:v1 only)',
			},
			{
				name: 'Classic Colloquial',
				value: 'classic-colloquial',
				displayOptions: { show: showForMayuraV1 },
				description: 'Traditional conversational style (Mayura:v1 only)',
			},
			{
				name: 'Code Mixed',
				value: 'code-mixed',
				displayOptions: { show: showForMayuraV1 },
				description: 'Mixing multiple languages in the same sentence (Mayura:v1 only)',
			},
		],
		description:
			'Determines the tone or style of the translation. Note: Sarvam-Translate:v1 only supports Formal mode.',
		routing: {
			send: {
				type: 'body',
				property: 'mode',
			},
		},
	},
	{
		displayName: 'Output Script (Transliteration)',
		name: 'output_script',
		type: 'options',
		default: 'null',
		displayOptions: { show: showForMayuraV1 },
		options: [
			{
				name: 'None (Default)',
				value: 'null',
				description: 'No transliteration applied to the output',
			},
			{
				name: 'Roman',
				value: 'roman',
				description: 'Output text in Romanized (Latin) script',
			},
			{
				name: 'Fully Native',
				value: 'fully-native',
				description: 'Output in the native script with a formal style',
			},
			{
				name: 'Spoken Form in Native',
				value: 'spoken-form-in-native',
				description: 'Output in the native script with a spoken style',
			},
		],
		description:
			'Controls the transliteration style applied to the output. Useful for reading native scripts in Romanized form. Only supported for Mayura:v1.',
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
				description: 'Use standard Western Arabic numerals',
			},
			{
				name: 'Native (Language-Specific Numerals)',
				value: 'native',
				description: 'Use language-specific native numerals (e.g., ९ instead of 9)',
			},
		],
		description: 'Choose whether to use international numerals or language-specific native numerals in the translation',
		routing: {
			send: {
				type: 'body',
				property: 'numerals_format',
			},
		},
	},
];
