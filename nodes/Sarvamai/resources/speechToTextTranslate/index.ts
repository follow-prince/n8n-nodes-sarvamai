import type { INodeProperties } from 'n8n-workflow';
import { speechToTextTranslateTranscribeDescription } from './transcribe';
import { speechToTextTranslateInitiateJobDescription } from './initiateJob';
import { speechToTextTranslateUploadFilesDescription } from './uploadFiles';
import { speechToTextTranslateStartJobDescription } from './startJob';
import { speechToTextTranslateGetStatusDescription } from './getStatus';
import { speechToTextTranslateDownloadResultsDescription } from './downloadFiles';

const showOnlyForSpeechToTextTranslate = {
	resource: ['speechToTextTranslate'],
};

export const speechToTextTranslateDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSpeechToTextTranslate,
		},
		options: [
			{
				name: 'Download Results (Batch)',
				value: 'downloadResults',
				action: 'Download results for a batch job',
				description: 'Generate presigned download URLs for translated transcription output files',
				routing: {
					request: {
						method: 'POST',
						url: '/speech-to-text-translate/job/v1/download-files',
					},
				},
			},
			{
				name: 'Get Status (Batch)',
				value: 'getStatus',
				action: 'Get job status',
				description: 'Retrieve the current status and details of a speech to text translate bulk job',
				routing: {
					request: {
						method: 'GET',
						url: '=/speech-to-text-translate/job/v1/{{$parameter["job_id"]}}/status',
					},
				},
			},
			{
				name: 'Initiate Job (Batch)',
				value: 'initiateJob',
				action: 'Initiate a batch job',
				description: 'Create a new speech to text translate bulk job',
				routing: {
					request: {
						method: 'POST',
						url: '/speech-to-text-translate/job/v1',
					},
				},
			},
			{
				name: 'Start Job (Batch)',
				value: 'startJob',
				action: 'Start a batch job',
				description: 'Trigger the processing of a batch job',
				routing: {
					request: {
						method: 'POST',
						url: '=/speech-to-text-translate/job/v1/{{$parameter["job_id"]}}/start',
					},
				},
			},
			{
				name: 'Transcribe',
				value: 'transcribe',
				action: 'Transcribe and translate audio',
				description: 'Automatically detects language, transcribes speech, and translates to English',
				routing: {
					request: {
						method: 'POST',
						url: '/speech-to-text-translate',
					},
					send: {
						preSend: [
							async function (requestOptions) {
								requestOptions.headers = requestOptions.headers || {};
								requestOptions.headers['Content-Type'] = 'multipart/form-data';
								return requestOptions;
							},
						],
					},
				},
			},
			{
				name: 'Upload Files (Batch)',
				value: 'uploadFiles',
				action: 'Upload files for a batch job',
				description: 'Generate presigned upload URLs for audio files',
				routing: {
					request: {
						method: 'POST',
						url: '/speech-to-text-translate/job/v1/upload-files',
					},
				},
			},
		],
		default: 'transcribe',
	},
	...speechToTextTranslateTranscribeDescription,
	...speechToTextTranslateInitiateJobDescription,
	...speechToTextTranslateUploadFilesDescription,
	...speechToTextTranslateStartJobDescription,
	...speechToTextTranslateGetStatusDescription,
	...speechToTextTranslateDownloadResultsDescription,
];
