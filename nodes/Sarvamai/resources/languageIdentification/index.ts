import type { INodeProperties } from 'n8n-workflow';
import { languageIdentificationDetectDescription } from './detect';

const showOnlyForLanguageIdentification = {
	resource: ['languageIdentification'],
};

export const languageIdentificationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLanguageIdentification,
		},
		options: [
			{
				name: 'Identify',
				value: 'identify',
				action: 'Identify language and script',
				description: 'Identifies the language and script of the input text',
				routing: {
					request: {
						method: 'POST',
						url: '/text-lid',
					},
				},
			},
		],
		default: 'identify',
	},
	...languageIdentificationDetectDescription,
];
