import type { INodeProperties } from 'n8n-workflow';
import { textToSpeechDescription } from './textToSpeech';

const showOnlyForTextToSpeech = {
	resource: ['textToSpeech'],
};

export const textToSpeechResourceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTextToSpeech,
		},
		options: [
			{
				name: 'Convert',
				value: 'convert',
				action: 'Convert text to speech',
				description: 'Convert text into spoken audio',
				routing: {
					request: {
						method: 'POST',
						url: '/text-to-speech',
					},
				},
			},
		],
		default: 'convert',
	},
	...textToSpeechDescription,
];
