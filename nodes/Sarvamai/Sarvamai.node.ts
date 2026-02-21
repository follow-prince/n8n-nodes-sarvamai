import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { translationDescription } from './resources/translation';
import { documentIntelligenceDescription } from './resources/documentIntelligence';
import { speechToTextDescription } from './resources/speechToText';
import { chatDescription } from './resources/chat';
import { languageIdentificationDescription } from './resources/languageIdentification';
import { speechToTextTranslateDescription } from './resources/speechToTextTranslate';
import { textToSpeechResourceDescription } from './resources/textToSpeech';
import { transliterationDescription } from './resources/transliteration';

export class Sarvamai implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Sarvamai',
		name: 'sarvamai',
		icon: { light: 'file:Sarvamai.svg', dark: 'file:Sarvamai.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Sarvamai API',
		defaults: {
			name: 'Sarvamai',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'sarvamaiApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.sarvam.ai',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Chat Completion',
						value: 'chat',
					},
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'Document Intelligence',
						value: 'documentIntelligence',
					},
					{
						name: 'Language Detection',
						value: 'languageIdentification',
					},
					{
						name: 'Speech to Text',
						value: 'speechToText',
					},
					{
						name: 'Speech to Text Translate',
						value: 'speechToTextTranslate',
					},
					{
						name: 'Text to Speech',
						value: 'textToSpeech',
					},
					{
						name: 'Translation',
						value: 'translation',
					},
					{
						name: 'Transliteration',
						value: 'transliteration',
					},
					{
						name: 'User',
						value: 'user',
					},
				],
				default: 'translation',
			},
			...translationDescription,
			...documentIntelligenceDescription,
			...chatDescription,
			...speechToTextDescription,
			...speechToTextTranslateDescription,
			...languageIdentificationDescription,
			...textToSpeechResourceDescription,
			...transliterationDescription,
		],
	};
}
