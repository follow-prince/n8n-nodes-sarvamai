import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCompletions = {
	operation: ['completions'],
	resource: ['chat'],
};

export const chatCompletionsDescription: INodeProperties[] = [
	{
		displayName: 'Messages',
		name: 'messages',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		placeholder: 'Add Message',
		required: true,
		displayOptions: {
			show: showOnlyForCompletions,
		},
		options: [
			{
				displayName: 'Message',
				name: 'message',
				values: [
					{
						displayName: 'Role',
						name: 'role',
						type: 'options',
						options: [
						
							{
								name: 'User',
								value: 'user',
								description: 'Input from the user that the model responds to',
							}
						],
						default: 'user',
					},
					{
						displayName: 'Content',
						name: 'content',
						type: 'string',
						default: '',
						required: true,
						description: 'The text content of the message',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'messages',
				value: '={{$value.message}}',
			},
		},
	},
	{
		displayName: 'Model Name or ID',
		name: 'model',
		type: 'options',
		default: 'sarvam-m',
		required: true,
		description: 'The ID of the model to use for this request. Supported model(s): sarvam-m.',
		displayOptions: {
			show: showOnlyForCompletions,
		},
		options: [
			{
				name: 'Sarvam M',
				value: 'sarvam-m',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'model',
			},
		},
	},

	{
		displayName: 'Temperature',
		name: 'temperature',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 2,
		},
		default: 0.2,
		description: 'The sampling temperature to use, between 0 and 2. Higher values like 0.8 make output more random, while lower values like 0.2 make it more focused.',
		displayOptions: {
			show: showOnlyForCompletions,
		},
		routing: {
			send: {
				type: 'body',
				property: 'temperature',
			},
		},
	},
	{
		displayName: 'Wiki Grounding',
		name: 'wiki_grounding',
		type: 'boolean',
		default: false,
		description: 'Whether the model uses a RAG based approach to retrieve relevant chunks from Wikipedia and uses them to answer the question',
		displayOptions: {
			show: showOnlyForCompletions,
		},
		routing: {
			send: {
				type: 'body',
				property: 'wiki_grounding',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCompletions,
		},
		options: [
			{
				displayName: 'Frequency Penalty',
				name: 'frequency_penalty',
				type: 'number',
				typeOptions: {
					minValue: -2,
					maxValue: 2,
				},
				default: 0,
				description: 'Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far.',
			},
			{
				displayName: 'Max Tokens',
				name: 'max_tokens',
				type: 'number',
				default: 512,
				description: 'The maximum number of tokens that can be generated in the chat completion',
			},
			{
				displayName: 'N',
				name: 'n',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'How many chat completion choices to generate for each input message',
			},
			{
				displayName: 'Presence Penalty',
				name: 'presence_penalty',
				type: 'number',
				typeOptions: {
					minValue: -2,
					maxValue: 2,
				},
				default: 0,
				description: 'Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far.',
			},
			{
				displayName: 'Reasoning Effort',
				name: 'reasoning_effort',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
					{
						name: 'High',
						value: 'high',
					},
				],
				default: 'medium',
				description: 'The level of reasoning effort to use for the response',
			},
			{
				displayName: 'Seed',
				name: 'seed',
				type: 'number',
				default: 0,
				description: 'If specified, our system will make a best effort to sample deterministically',
			},
			{
				displayName: 'Stop',
				name: 'stop',
				type: 'string',
				default: '',
				description: 'Up to 4 sequences where the API will stop generating further tokens. You can provide a single string or an array of strings.',
			},
			{
				displayName: 'Stream',
				name: 'stream',
				type: 'boolean',
				default: false,
				description: 'Whether the model response data will be streamed to the client as it is generated',
			},
			{
				displayName: 'Top P',
				name: 'top_p',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 1,
				},
				default: 1,
				description: 'An alternative to sampling with temperature, called nucleus sampling. 0.1 means only tokens comprising the top 10% probability mass are considered.',
			},
		],
		routing: {
			send: {
				type: 'body',
				property: '={{$key}}',
				value: '={{$value}}',
			},
		},
	},
];
