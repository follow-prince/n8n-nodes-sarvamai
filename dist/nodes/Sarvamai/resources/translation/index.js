"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translationDescription = void 0;
const translate_1 = require("./translate");
const showOnlyForTranslation = {
    resource: ['translation'],
};
exports.translationDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForTranslation,
        },
        options: [
            {
                name: 'Translate',
                value: 'translate',
                action: 'Translate text',
                description: 'Translate text between supported Indian languages',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/translate',
                    },
                },
            },
        ],
        default: 'translate',
    },
    ...translate_1.translationTranslateDescription,
];
//# sourceMappingURL=index.js.map