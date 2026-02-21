"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageIdentificationDescription = void 0;
const detect_1 = require("./detect");
const showOnlyForLanguageIdentification = {
    resource: ['languageIdentification'],
};
exports.languageIdentificationDescription = [
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
    ...detect_1.languageIdentificationDetectDescription,
];
//# sourceMappingURL=index.js.map