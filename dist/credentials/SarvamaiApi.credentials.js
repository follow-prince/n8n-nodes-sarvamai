"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarvamaiApi = void 0;
class SarvamaiApi {
    constructor() {
        this.name = 'sarvamaiApi';
        this.displayName = 'Sarvamai API';
        this.icon = { light: 'file:Sarvamai.svg', dark: 'file:Sarvamai.dark.svg' };
        this.documentationUrl = 'https://github.com/org/@follow-prince/-sarvamai?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
                description: 'Your Sarvam AI API subscription key',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'api-subscription-key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.sarvam.ai',
                url: '/translate',
                method: 'POST',
                body: {
                    input: 'Hello',
                    source_language_code: 'auto',
                    target_language_code: 'hi-IN',
                },
            },
        };
    }
}
exports.SarvamaiApi = SarvamaiApi;
//# sourceMappingURL=SarvamaiApi.credentials.js.map