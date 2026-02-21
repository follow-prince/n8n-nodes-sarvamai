"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageIdentificationDetectDescription = void 0;
const showOnlyForDetect = {
    operation: ['identify'],
    resource: ['languageIdentification'],
};
exports.languageIdentificationDetectDescription = [
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
//# sourceMappingURL=detect.js.map