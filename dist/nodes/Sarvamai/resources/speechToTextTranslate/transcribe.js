"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speechToTextTranslateTranscribeDescription = void 0;
const showOnlyForTranscribe = {
    operation: ['transcribe'],
    resource: ['speechToTextTranslate'],
};
exports.speechToTextTranslateTranscribeDescription = [
    {
        displayName: 'Binary Property',
        name: 'binaryPropertyName',
        type: 'string',
        default: 'data',
        required: true,
        displayOptions: {
            show: showOnlyForTranscribe,
        },
        description: 'Name of the binary property which contains the audio file to be transcribed and translated',
        routing: {
            send: {
                type: 'body',
                property: 'file',
            },
        },
    },
    {
        displayName: 'Model',
        name: 'model',
        type: 'options',
        default: 'saaras:v2.5',
        required: true,
        displayOptions: {
            show: showOnlyForTranscribe,
        },
        options: [
            {
                name: 'Saaras v2.5 (Default)',
                value: 'saaras:v2.5',
                description: 'Translation model that translates audio from any spoken Indic language to English',
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
        displayName: 'Prompt',
        name: 'prompt',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForTranscribe,
        },
        description: 'Conversation context can be passed as a prompt to boost model accuracy',
        routing: {
            send: {
                type: 'body',
                property: 'prompt',
                value: '={{$value || undefined}}',
            },
        },
    },
    {
        displayName: 'Input Audio Codec',
        name: 'input_audio_codec',
        type: 'options',
        default: 'wav',
        displayOptions: {
            show: showOnlyForTranscribe,
        },
        options: [
            { name: 'AAC', value: 'aac' },
            { name: 'AIFF', value: 'aiff' },
            { name: 'AMR', value: 'amr' },
            { name: 'FLAC', value: 'flac' },
            { name: 'MP3', value: 'mp3' },
            { name: 'MP4/M4A', value: 'mp4' },
            { name: 'OGG', value: 'ogg' },
            { name: 'Opus', value: 'opus' },
            { name: 'PCM L16', value: 'pcm_l16' },
            { name: 'PCM Raw', value: 'pcm_raw' },
            { name: 'PCM S16LE', value: 'pcm_s16le' },
            { name: 'WAV', value: 'wav' },
            { name: 'WebM', value: 'webm' },
            { name: 'WMA', value: 'x-ms-wma' },
        ],
        routing: {
            send: {
                type: 'body',
                property: 'input_audio_codec',
                value: '={{$value || undefined}}',
            },
        },
    },
];
//# sourceMappingURL=transcribe.js.map