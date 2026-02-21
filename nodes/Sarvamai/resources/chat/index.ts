import type { INodeProperties } from 'n8n-workflow';
import { chatCompletionsDescription } from './completions';

const showOnlyForChat = {
	resource: ['chat'],
};

export const chatDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChat,
		},
		options: [
			{
				name: 'Completions',
				value: 'completions',
				action: 'Get chat completions',
				description: 'Get chat completions from Sarvam AI',
				routing: {
					request: {
						method: 'POST',
						url: '/v1/chat/completions',
					},
				},
			},
		],
		default: 'completions',
	},
	...chatCompletionsDescription,
];
