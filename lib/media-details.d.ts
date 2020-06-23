/**
 * @packageDocumentation
 * @module annotoConfig
 */

interface Thumbnails {
    default: string;
    mobile?: string;
}

export interface MediaDetails {
    /**
     * Media Title
     */
    title: string;
    /**
     * Media description
     */
    description?: string;
    thumbnails?: Thumbnails;
    authorName?: string;
    /**
     * Course/group details
     * If provided the analytics will be categorised by groups
     * In addition allows to have private discussions per group for same media.
     */
    group?: {
        /**
         * Unique group identifier
         */
        id: string | number;
        /**
         * Group title
         */
        title: string;
        /**
         * If set to true the The discussion will be private to the group
         * @default false
         */
        privateThread?: boolean;
        /**
         * @default 'playlist'
         */
        type?: 'playlist' | 'users';
        /**
         * Group description
         */
        description?: string;
        thumbnails?: Thumbnails;
    };
}