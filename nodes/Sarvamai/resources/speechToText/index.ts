import type { INodeProperties } from 'n8n-workflow';
import { speechToTextTranscribeDescription } from './transcribe';
import { speechToTextUploadFilesDescription } from './uploadFiles';
import { speechToTextStartJobDescription } from './startJob';
import { speechToTextGetStatusDescription } from './getStatus';
import { speechToTextDownloadResultsDescription } from './downloadFiles';

const showOnlyForSpeechToText = {
	resource: ['speechToText'],
};

export const speechToTextDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSpeechToText,
		},
		options: [
			{
				name: 'Download Results (Batch)',
				value: 'downloadResults',
				action: 'Download results for a batch job',
				description: 'Generate presigned download URLs for transcription output files',
				routing: {
					request: {
						method: 'POST',
						url: '/speech-to-text/job/v1/download-files',
					},
				},
			},
			{
				name: 'Get Status (Batch)',
				value: 'getStatus',
				action: 'Get job status',
				description: 'Retrieve the current status and details of a speech to text bulk job',
				routing: {
					request: {
						method: 'GET',
						url: '=/speech-to-text/job/v1/{{$parameter["job_id"]}}/status',
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
						url: '=/speech-to-text/job/v1/{{$parameter["job_id"]}}/start',
					},
				},
			},
			{
				name: 'Transcribe',
				value: 'transcribe',
				action: 'Transcribe audio',
				description: 'Transcribe speech to text from an audio file',
				routing: {
					request: {
						method: 'POST',
						url: '/speech-to-text',
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
						url: '/speech-to-text/job/v1/upload-files',
					},
				},
			},
		],
		default: 'transcribe',
	},
	...speechToTextTranscribeDescription,
	...speechToTextUploadFilesDescription,
	...speechToTextStartJobDescription,
	...speechToTextGetStatusDescription,
	...speechToTextDownloadResultsDescription,
];
