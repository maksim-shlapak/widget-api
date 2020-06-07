/**
 * @packageDocumentation
 * @module annotoConfig
 */

interface Thumbnails {
    default: string;
    mobile?: string;
}

export interface MediaDetails {
    title: string; // Media Title
    description?: string; // (Optional) Media description
    thumbnails?: Thumbnails;
    authorName?: string;
    group?: {             // (Optional) Course/group
        id: string | number; // Unique group identifier
        type?: 'playlist' | 'users'; // playlist is the default
        title: string; // Group title
        privateThread?: boolean; // false by default. If set to true the The discussion will be private to the group.
        description?: string; // (Optional) Group description
        thumbnails?: Thumbnails;
    };
}