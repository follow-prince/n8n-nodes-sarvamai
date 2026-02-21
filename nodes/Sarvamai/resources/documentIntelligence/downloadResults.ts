import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDownloadResults = {
	operation: ['downloadResults'],
	resource: ['documentIntelligence'],
};

export const documentIntelligenceDownloadResultsDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDownloadResults,
		},
		description: 'The unique identifier for the job. Returns presigned URLs for downloading output files. Job must be in Completed or PartiallyCompleted state.',
	},
];
