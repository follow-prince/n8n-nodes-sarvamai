"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sarvamai = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const company_1 = require("./resources/company");
const translation_1 = require("./resources/translation");
const documentIntelligence_1 = require("./resources/documentIntelligence");
const speechToText_1 = require("./resources/speechToText");
const chat_1 = require("./resources/chat");
const languageIdentification_1 = require("./resources/languageIdentification");
const speechToTextTranslate_1 = require("./resources/speechToTextTranslate");
const textToSpeech_1 = require("./resources/textToSpeech");
const transliteration_1 = require("./resources/transliteration");
class Sarvamai {
    constructor() {
        this.description = {
            displayName: 'Sarvamai',
            name: 'sarvamai',
            icon: { light: 'file:Sarvamai.svg', dark: 'file:Sarvamai.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Sarvamai API',
            defaults: {
                name: 'Sarvamai',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'sarvamaiApi', required: true }],
            requestDefaults: {
                baseURL: 'https://api.sarvam.ai',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Chat Completion',
                            value: 'chat',
                        },
                        {
                            name: 'Company',
                            value: 'company',
                        },
                        {
                            name: 'Document Intelligence',
                            value: 'documentIntelligence',
                        },
                        {
                            name: 'Language Detection',
                            value: 'languageIdentification',
                        },
                        {
                            name: 'Speech to Text',
                            value: 'speechToText',
                        },
                        {
                            name: 'Speech to Text Translate',
                            value: 'speechToTextTranslate',
                        },
                        {
                            name: 'Text to Speech',
                            value: 'textToSpeech',
                        },
                        {
                            name: 'Translation',
                            value: 'translation',
                        },
                        {
                            name: 'Transliteration',
                            value: 'transliteration',
                        },
                        {
                            name: 'User',
                            value: 'user',
                        },
                    ],
                    default: 'translation',
                },
                ...translation_1.translationDescription,
                ...documentIntelligence_1.documentIntelligenceDescription,
                ...chat_1.chatDescription,
                ...speechToText_1.speechToTextDescription,
                ...speechToTextTranslate_1.speechToTextTranslateDescription,
                ...languageIdentification_1.languageIdentificationDescription,
                ...textToSpeech_1.textToSpeechResourceDescription,
                ...transliteration_1.transliterationDescription,
                ...company_1.companyDescription,
            ],
        };
    }
}
exports.Sarvamai = Sarvamai;
//# sourceMappingURL=Sarvamai.node.js.map