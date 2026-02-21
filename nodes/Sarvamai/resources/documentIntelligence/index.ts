import type { INodeProperties } from 'n8n-workflow';
import { documentIntelligenceCreateJobDescription } from './createJob';
import { documentIntelligenceUploadFilesDescription } from './uploadFiles';
import { documentIntelligenceStartJobDescription } from './startJob';
import { documentIntelligenceGetStatusDescription } from './getStatus';
import { documentIntelligenceDownloadResultsDescription } from './downloadResults';

const showOnlyForDocumentIntelligence = {
	resource: ['documentIntelligence'],
};

export const documentIntelligenceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForDocumentIntelligence,
		},
		options: [
			{
				name: 'Create Job',
				value: 'createJob',
				action: 'Create a digitization job',
				description: 'Creates a new Document Intelligence job',
				routing: {
					request: {
						method: 'POST',
						url: '/doc-digitization/job/v1',
					},
				},
			},
			{
				name: 'Download Results',
				value: 'downloadResults',
				action: 'Get download ur ls',
				description: 'Returns presigned URLs for downloading output files',
				routing: {
					request: {
						method: 'POST',
						url: '/doc-digitization/job/v1/{{$parameter["job_id"]}}/download-files',
					},
				},
			},
			{
				name: 'Get Status',
				value: 'getStatus',
				action: 'Get job status',
				description: 'Returns the current status of a job with page-level metrics',
				routing: {
					request: {
						method: 'GET',
						url: '/doc-digitization/job/v1/{{$parameter["job_id"]}}/status',
					},
				},
			},
			{
				name: 'Start Job',
				value: 'startJob',
				action: 'Start processing',
				description: 'Validates the uploaded file and starts processing',
				routing: {
					request: {
						method: 'POST',
						url: '/doc-digitization/job/v1/{{$parameter["job_id"]}}/start',
					},
				},
			},
			{
				name: 'Upload Files',
				value: 'uploadFiles',
				action: 'Get upload ur ls',
				description: 'Returns presigned URLs for uploading input files',
				routing: {
					request: {
						method: 'POST',
						url: '/doc-digitization/job/v1/upload-files',
					},
				},
			},
		],
		default: 'createJob',
	},
	...documentIntelligenceCreateJobDescription,
	...documentIntelligenceUploadFilesDescription,
	...documentIntelligenceStartJobDescription,
	...documentIntelligenceGetStatusDescription,
	...documentIntelligenceDownloadResultsDescription,
];
