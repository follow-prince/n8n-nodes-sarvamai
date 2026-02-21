"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatCompletionsDescription = void 0;
const showOnlyForCompletions = {
    operation: ['completions'],
    resource: ['chat'],
};
exports.chatCompletionsDescription = [
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
                                name: 'System',
                                value: 'system',
                            },
                            {
                                name: 'User',
                                value: 'user',
                            },
                            {
                                name: 'Assistant',
                                value: 'assistant',
                            },
                        ],
                        default: 'user',
                    },
                    {
                        displayName: 'Content',
                        name: 'content',
                        type: 'string',
                        default: '',
                        required: true,
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
        displayName: 'Model',
        name: 'model',
        type: 'options',
        default: 'sarvam-m',
        required: true,
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
                description: 'Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency.',
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
                    maxValue: 128,
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
                description: 'Up to 4 sequences where the API will stop generating further tokens',
            },
            {
                displayName: 'Stream',
                name: 'stream',
                type: 'boolean',
                default: false,
                description: 'Whether to stream the model response as it is generated',
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
                description: 'What sampling temperature to use, between 0 and 2',
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
                description: 'An alternative to sampling with temperature, called nucleus sampling',
            },
            {
                displayName: 'Wiki Grounding',
                name: 'wiki_grounding',
                type: 'boolean',
                default: false,
                description: 'Whether the model uses a RAG based approach to retrieve relevant chunks from Wikipedia',
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
//# sourceMappingURL=completions.js.map