"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transliterationDescription = void 0;
const transliterate_1 = require("./transliterate");
const showOnlyForTransliteration = {
    resource: ['transliteration'],
};
exports.transliterationDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForTransliteration,
        },
        options: [
            {
                name: 'Transliterate',
                value: 'transliterate',
                action: 'Transliterate text',
                description: 'Convert text from one script to another preserving pronunciation',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/transliterate',
                    },
                },
            },
        ],
        default: 'transliterate',
    },
    ...transliterate_1.transliterationTransliterateDescription,
];
//# sourceMappingURL=index.js.map