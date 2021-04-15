import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class MemberPressApi implements ICredentialType {
    name = 'memberPressApi';
    displayName = 'MemberPress API';
    documentationUrl = 'memberPress';
    properties = [
        {
            displayName: 'MemberPress API Key',
            name: 'apiKey',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
		{
			displayName: 'MemberPress Base URL',
			name: 'url',
			type: 'string' as NodePropertyTypes,
			default: '',
			placeholder: 'https://example.com',
		},
    ];
}
