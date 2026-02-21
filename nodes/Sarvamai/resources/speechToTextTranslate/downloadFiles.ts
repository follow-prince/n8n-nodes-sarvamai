import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDownloadResults = {
	operation: ['downloadResults'],
	resource: ['speechToTextTranslate'],
};

export const speechToTextTranslateDownloadResultsDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDownloadResults,
		},
		description: 'The UUID of the completed speech to text translate bulk job',
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
		type: 'number',
		default: undefined,
		displayOptions: {
			show: showOnlyForDownloadResults,
		},
		description: 'Optional Provisioned Throughput unit ID to use for the request',
		routing: {
			send: {
				type: 'query',
				property: 'ptu_id',
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
			show: showOnlyForDownloadResults,
		},
		description: 'A list of audio filenames to generate presigned download URLs for. These should be the names of the translated transcription output files.',
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
						description: 'The name of the output transcription file to receive a download URL for',
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
