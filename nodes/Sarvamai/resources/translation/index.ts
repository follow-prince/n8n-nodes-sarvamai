import type { INodeProperties } from 'n8n-workflow';
import { translationTranslateDescription } from './translate';

const showOnlyForTranslation = {
	resource: ['translation'],
};

export const translationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTranslation,
		},
		options: [
			{
				name: 'Translate',
				value: 'translate',
				action: 'Translate text',
				description: 'Translate text between supported Indian languages',
				routing: {
					request: {
						method: 'POST',
						url: '/translate',
					},
				},
			},
		],
		default: 'translate',
	},
	...translationTranslateDescription,
];
