import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUploadFiles = {
	operation: ['uploadFiles'],
	resource: ['speechToTextTranslate'],
};

export const speechToTextTranslateUploadFilesDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForUploadFiles,
		},
		description: 'The UUID of the batch job (obtained from Initiate Job). Use this to upload audio files for processing. Note: All files must be uploaded before starting the job.',
		routing: {
			send: {
				type: 'body',
				property: 'job_id',
			},
		},
	},
	{
		displayName: 'PTU ID',
		name: 'ptu_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForUploadFiles,
		},
		description: 'Unique identifier for the Provisioned Throughput Unit (PTU) to be used for this job',
		routing: {
			send: {
				type: 'query',
				property: 'ptu_id',
				value: '={{$value || undefined}}',
			},
		},
	},
	{
		displayName: 'Files',
		name: 'files',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		placeholder: 'Add File',
		required: true,
		displayOptions: {
			show: showOnlyForUploadFiles,
		},
		description: 'A list of audio filenames to generate presigned upload URLs for. Supported formats: WAV, MP3, AAC, AIFF, OGG, OPUS, FLAC, MP4/M4A, AMR, WMA, WebM.',
		options: [
			{
				displayName: 'File',
				name: 'file',
				values: [
					{
						displayName: 'Filename',
						name: 'filename',
						type: 'string',
						default: '',
						required: true,
						description: 'The name of the audio file to be uploaded',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'files',
				value: '={{$value.file.map((f) => f.filename)}}',
			},
		},
	},
];
