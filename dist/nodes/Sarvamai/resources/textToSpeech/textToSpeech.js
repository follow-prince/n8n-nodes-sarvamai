"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeechDescription = void 0;
const showOnlyForTTS = {
    operation: ['convert'],
    resource: ['textToSpeech'],
};
const showForBulbulV3 = {
    ...showOnlyForTTS,
    model: ['bulbul:v3'],
};
const showForBulbulV2 = {
    ...showOnlyForTTS,
    model: ['bulbul:v2'],
};
exports.textToSpeechDescription = [
    {
        displayName: 'Text',
        name: 'text',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForTTS,
        },
        description: 'The text to be converted into speech. Max 2500 chars for v3, 1500 for v2.',
        routing: {
            send: {
                type: 'body',
                property: 'text',
            },
        },
    },
    {
        displayName: 'Target Language Code',
        name: 'target_language_code',
        type: 'options',
        options: [
            { name: 'Bengali', value: 'bn-IN' },
            { name: 'English', value: 'en-IN' },
            { name: 'Gujarati', value: 'gu-IN' },
            { name: 'Hindi', value: 'hi-IN' },
            { name: 'Kannada', value: 'kn-IN' },
            { name: 'Malayalam', value: 'ml-IN' },
            { name: 'Marathi', value: 'mr-IN' },
            { name: 'Odia', value: 'od-IN' },
            { name: 'Punjabi', value: 'pa-IN' },
            { name: 'Tamil', value: 'ta-IN' },
            { name: 'Telugu', value: 'te-IN' },
        ],
        default: 'hi-IN',
        required: true,
        displayOptions: {
            show: showOnlyForTTS,
        },
        description: 'The language code in BCP-47 format',
        routing: {
            send: {
                type: 'body',
                property: 'target_language_code',
            },
        },
    },
    {
        displayName: 'Model',
        name: 'model',
        type: 'options',
        options: [
            { name: 'Bulbul V3', value: 'bulbul:v3' },
            { name: 'Bulbul V2', value: 'bulbul:v2' },
        ],
        default: 'bulbul:v3',
        displayOptions: {
            show: showOnlyForTTS,
        },
        routing: {
            send: {
                type: 'body',
                property: 'model',
            },
        },
    },
    {
        displayName: 'Speaker',
        name: 'speaker',
        type: 'options',
        options: [
            { name: 'Aayan (V3)', value: 'aayan' },
            { name: 'Abhilash (V2 Male)', value: 'abhilash' },
            { name: 'Aditya (V3)', value: 'aditya' },
            { name: 'Advait (V3)', value: 'advait' },
            { name: 'Amelia (V3)', value: 'amelia' },
            { name: 'Amit (V3)', value: 'amit' },
            { name: 'Anand (V3)', value: 'anand' },
            { name: 'Anushka (V2 - Default Female)', value: 'anushka' },
            { name: 'Arya (V2 Female)', value: 'arya' },
            { name: 'Ashutosh (V3)', value: 'ashutosh' },
            { name: 'Dev (V3)', value: 'dev' },
            { name: 'Gokul (V3)', value: 'gokul' },
            { name: 'Hitesh (V2 Male)', value: 'hitesh' },
            { name: 'Ishita (V3)', value: 'ishita' },
            { name: 'Kabir (V3)', value: 'kabir' },
            { name: 'Karun (V2 Male)', value: 'karun' },
            { name: 'Kavitha (V3)', value: 'kavitha' },
            { name: 'Kavya (V3)', value: 'kavya' },
            { name: 'Manan (V3)', value: 'manan' },
            { name: 'Mani (V3)', value: 'mani' },
            { name: 'Manisha (V2 Female)', value: 'manisha' },
            { name: 'Mohit (V3)', value: 'mohit' },
            { name: 'Neha (V3)', value: 'neha' },
            { name: 'Pooja (V3)', value: 'pooja' },
            { name: 'Priya (V3)', value: 'priya' },
            { name: 'Rahul (V3)', value: 'rahul' },
            { name: 'Ratan (V3)', value: 'ratan' },
            { name: 'Rehan (V3)', value: 'rehan' },
            { name: 'Ritu (V3)', value: 'ritu' },
            { name: 'Rohan (V3)', value: 'rohan' },
            { name: 'Roopa (V3)', value: 'roopa' },
            { name: 'Rupali (V3)', value: 'rupali' },
            { name: 'Shreya (V3)', value: 'shreya' },
            { name: 'Shruti (V3)', value: 'shruti' },
            { name: 'Shubh (V3 - Default)', value: 'shubh' },
            { name: 'Simran (V3)', value: 'simran' },
            { name: 'Soham (V3)', value: 'soham' },
            { name: 'Sophia (V3)', value: 'sophia' },
            { name: 'Suhani (V3)', value: 'suhani' },
            { name: 'Sumit (V3)', value: 'sumit' },
            { name: 'Sunny (V3)', value: 'sunny' },
            { name: 'Tanya (V3)', value: 'tanya' },
            { name: 'Tarun (V3)', value: 'tarun' },
            { name: 'Varun (V3)', value: 'varun' },
            { name: 'Vidya (V2 Female)', value: 'vidya' },
            { name: 'Vijay (V3)', value: 'vijay' },
        ],
        default: 'shubh',
        displayOptions: {
            show: showOnlyForTTS,
        },
        description: 'The speaker voice to be used',
        routing: {
            send: {
                type: 'body',
                property: 'speaker',
            },
        },
    },
    {
        displayName: 'Speaker (V2 Default)',
        name: 'speakerV2',
        type: 'hidden',
        default: 'anushka',
        displayOptions: {
            show: showForBulbulV2,
        },
    },
    {
        displayName: 'Pace',
        name: 'pace',
        type: 'number',
        typeOptions: {
            minValue: 0.3,
            maxValue: 3,
        },
        default: 1,
        displayOptions: {
            show: showOnlyForTTS,
        },
        description: 'Controls the speed of the audio',
        routing: {
            send: {
                type: 'body',
                property: 'pace',
            },
        },
    },
    {
        displayName: 'Pitch',
        name: 'pitch',
        type: 'number',
        typeOptions: {
            minValue: -0.75,
            maxValue: 0.75,
        },
        default: 0,
        displayOptions: {
            show: showForBulbulV2,
        },
        description: 'Controls the pitch of the audio (v2 only)',
        routing: {
            send: {
                type: 'body',
                property: 'pitch',
            },
        },
    },
    {
        displayName: 'Loudness',
        name: 'loudness',
        type: 'number',
        typeOptions: {
            minValue: 0.1,
            maxValue: 3,
        },
        default: 1,
        displayOptions: {
            show: showForBulbulV2,
        },
        description: 'Controls the loudness of the audio (v2 only)',
        routing: {
            send: {
                type: 'body',
                property: 'loudness',
            },
        },
    },
    {
        displayName: 'Tempurature',
        name: 'temperature',
        type: 'number',
        typeOptions: {
            minValue: 0.01,
            maxValue: 2,
        },
        default: 0.6,
        displayOptions: {
            show: showForBulbulV3,
        },
        description: 'Controls randomness/expressiveness (v3 only)',
        routing: {
            send: {
                type: 'body',
                property: 'temperature',
            },
        },
    },
    {
        displayName: 'Speech Sample Rate',
        name: 'speech_sample_rate',
        type: 'options',
        options: [
            { name: '8000 Hz', value: 8000 },
            { name: '16000 Hz', value: 16000 },
            { name: '22050 Hz', value: 22050 },
            { name: '24000 Hz', value: 24000 },
            { name: '32000 Hz (V3 Only)', value: 32000 },
            { name: '44100 Hz (V3 Only)', value: 44100 },
            { name: '48000 Hz (V3 Only)', value: 48000 },
        ],
        default: 24000,
        displayOptions: {
            show: showOnlyForTTS,
        },
        description: 'Sample rate of the output audio',
        routing: {
            send: {
                type: 'body',
                property: 'speech_sample_rate',
            },
        },
    },
    {
        displayName: 'Enable Preprocessing',
        name: 'enable_preprocessing',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: showForBulbulV2,
        },
        description: 'Whether to normalize English words and numeric entities (v2 only)',
        routing: {
            send: {
                type: 'body',
                property: 'enable_preprocessing',
            },
        },
    },
    {
        displayName: 'Output Audio Codec',
        name: 'output_audio_codec',
        type: 'options',
        options: [
            { name: 'AAC', value: 'aac' },
            { name: 'ALaw', value: 'alaw' },
            { name: 'FLAC', value: 'flac' },
            { name: 'Linear16', value: 'linear16' },
            { name: 'MP3', value: 'mp3' },
            { name: 'MuLaw', value: 'mulaw' },
            { name: 'Opus', value: 'opus' },
            { name: 'WAV', value: 'wav' },
        ],
        default: 'wav',
        displayOptions: {
            show: showOnlyForTTS,
        },
        routing: {
            send: {
                type: 'body',
                property: 'output_audio_codec',
            },
        },
    },
];
//# sourceMappingURL=textToSpeech.js.map