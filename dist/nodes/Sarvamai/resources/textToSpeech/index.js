"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeechResourceDescription = void 0;
const textToSpeech_1 = require("./textToSpeech");
const showOnlyForTextToSpeech = {
    resource: ['textToSpeech'],
};
exports.textToSpeechResourceDescription = [
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
    ...textToSpeech_1.textToSpeechDescription,
];
//# sourceMappingURL=index.js.map