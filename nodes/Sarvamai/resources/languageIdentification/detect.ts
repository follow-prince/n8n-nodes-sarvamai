import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDetect = {
	operation: ['identify'],
	resource: ['languageIdentification'],
};

export const languageIdentificationDetectDescription: INodeProperties[] = [
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
			show: showOnlyForDetect,
		},
		description: 'The text input for language and script identification. Max 1000 characters.',
		routing: {
			send: {
				type: 'body',
				property: 'input',
			},
		},
	},
];
