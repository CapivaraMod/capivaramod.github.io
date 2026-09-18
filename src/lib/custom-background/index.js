/* eslint-disable import/no-unresolved */
import fundo1 from '!raw-loader!./fundo1.svg';
import fundo1Url from './fundo1.svg';
/* eslint-enable import/no-unresolved */

import {TextEncoder} from '../tw-text-encoder';

const CUSTOM_BACKDROPS = [
    {
        assetId: 'fundo1backdrop000000000000000001',
        dataFormat: 'svg',
        data: fundo1
    }
];

export const customBackdropThumbnails = {
    fundo1backdrop000000000000000001: fundo1Url
};

const registerCustomBackdrops = storage => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    CUSTOM_BACKDROPS.forEach(backdrop => {
        storage.builtinHelper._store(
            storage.AssetType.ImageVector,
            storage.DataFormat.SVG,
            encoder.encode(backdrop.data),
            backdrop.assetId
        );
    });
};

export default registerCustomBackdrops;