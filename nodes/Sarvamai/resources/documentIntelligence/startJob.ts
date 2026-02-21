import type { INodeProperties } from 'n8n-workflow';

const showOnlyForStartJob = {
	operation: ['startJob'],
	resource: ['documentIntelligence'],
};

export const documentIntelligenceStartJobDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForStartJob,
		},
		description: 'The unique identifier for the job. Starts processing after validating file (max 200MB, 500 pages).',
	},
];
