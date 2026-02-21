import type { INodeProperties } from 'n8n-workflow';

const showOnlyForStartJob = {
	operation: ['startJob'],
	resource: ['speechToTextTranslate'],
};

export const speechToTextTranslateStartJobDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForStartJob,
		},
		description: 'The UUID of the batch job to start',
	},
];
