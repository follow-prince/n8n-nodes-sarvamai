import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class SarvamaiApi implements ICredentialType {
    name: string;
    displayName: string;
    icon: {
        readonly light: "file:Sarvamai.svg";
        readonly dark: "file:Sarvamai.dark.svg";
    };
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
    test: ICredentialTestRequest;
}
