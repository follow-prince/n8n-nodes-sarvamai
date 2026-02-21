import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUploadFiles = {
	operation: ['uploadFiles'],
	resource: ['documentIntelligence'],
};

export const documentIntelligenceUploadFilesDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForUploadFiles,
		},
		description: 'The unique identifier for the digitization job',
		routing: {
			send: {
				type: 'body',
				property: 'job_id',
			},
		},
	},
	{
		displayName: 'Filename',
		name: 'filename',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForUploadFiles,
		},
		description: 'The name of the file to upload (must be a .pdf or .zip)',
		routing: {
			send: {
				type: 'body',
				property: 'files',
				value: '={{[$value]}}',
			},
		},
	},
];
