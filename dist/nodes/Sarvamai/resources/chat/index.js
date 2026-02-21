"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatDescription = void 0;
const completions_1 = require("./completions");
const showOnlyForChat = {
    resource: ['chat'],
};
exports.chatDescription = [
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
    ...completions_1.chatCompletionsDescription,
];
//# sourceMappingURL=index.js.map