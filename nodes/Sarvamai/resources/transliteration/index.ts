import type { INodeProperties } from 'n8n-workflow';
import { transliterationTransliterateDescription } from './transliterate';

const showOnlyForTransliteration = {
	resource: ['transliteration'],
};

export const transliterationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTransliteration,
		},
		options: [
			{
				name: 'Transliterate',
				value: 'transliterate',
				action: 'Transliterate text',
				description: 'Convert text from one script to another preserving pronunciation',
				routing: {
					request: {
						method: 'POST',
						url: '/transliterate',
					},
				},
			},
		],
		default: 'transliterate',
	},
	...transliterationTransliterateDescription,
];
