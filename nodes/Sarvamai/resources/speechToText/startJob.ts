import type { INodeProperties } from 'n8n-workflow';

const showOnlyForStartJob = {
	operation: ['startJob'],
	resource: ['speechToText'],
};

export const speechToTextStartJobDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'job_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForStartJob,
		},
		description: 'The unique UUID of the batch job to start (obtained from Initiate Job). Ensure all audio files are uploaded before starting.',
	},
	{
		displayName: 'PTU ID',
		name: 'ptu_id',
		type: 'number',
		default: '',
		displayOptions: {
			show: showOnlyForStartJob,
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
];
