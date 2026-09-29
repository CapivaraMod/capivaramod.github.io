// src/lib/custom-costumes/index.js
//
// Registra costumes locais no storage do scratch-gui, sem precisar
// de nenhum servidor externo.

/* eslint-disable import/no-unresolved */
import capivara from '!raw-loader!./capivara.svg';
import pixel_0 from '!arraybuffer-loader!./0.png';
import pixel_1 from '!arraybuffer-loader!./1.png';
import pixel_2 from '!arraybuffer-loader!./2.png';
import pixel_3 from '!arraybuffer-loader!./3.png';
import pixel_4 from '!arraybuffer-loader!./4.png';
import pixel_5 from '!arraybuffer-loader!./5.png';
import pixel_6 from '!arraybuffer-loader!./6.png';
import pixel_7 from '!arraybuffer-loader!./7.png';
import pixel_8 from '!arraybuffer-loader!./8.png';
import pixel_9 from '!arraybuffer-loader!./9.png';
import pixel_mais from '!arraybuffer-loader!./+.png';
import pixel_menos from '!arraybuffer-loader!./-.png';
/* eslint-enable import/no-unresolved */

import {TextEncoder} from '../tw-text-encoder';

const CUSTOM_COSTUMES = [
    {
        assetId: 'c9f03a6e0a8997ad0a541af2f8382650',
        dataFormat: 'svg',
        assetType: 'ImageVector',
        data: capivara // SVG é texto: passa pelo TextEncoder
    },
    {
        assetId: 'd21217c351f829fca2fbfbc29263f27c',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_0
    },
    {
        assetId: '0d583fd22c651923f8abc98e95a7505d',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_1
    },
    {
        assetId: '1be39fc5196bff0f98f1e52c900eef4f',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_2
    },
    {
        assetId: 'cc09591528e90ad8bf070f7eed9181a7',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_3
    },
    {
        assetId: 'dcad369bd530a6128424343cc8e67531',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_4
    },
    {
        assetId: 'daca3b9e8fcf379bd48aede9d4702442',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_5
    },
    {
        assetId: '703f8fbb5eae0fbbe4ec20a8b38d290d',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_6
    },
    {
        assetId: 'bcd840480bd2fe310a5ffe5d9c35aada',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_7
    },
    {
        assetId: 'e505a6a46f06fae935ef188b0fdbe7e7',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_8
    },
    {
        assetId: '09beff0cbdb7299ebfcfaf33570eb95f',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_9
    },
    {
        assetId: '5b0fd81f21a81f7fae3318350dc14c73',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_mais
    },
    {
        assetId: '354b2a84ac960015af78988729cca574',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: pixel_menos
    }
];

/**
 * Registra os costumes customizados diretamente no builtinHelper do storage,
 * fazendo o storage "pensar" que já buscou o asset da rede.
 * @param {Storage} storage instância do storage do scratch-gui
 */
const registerCustomCostumes = storage => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    CUSTOM_COSTUMES.forEach(costume => {
        // SVG = texto (TextEncoder). PNG = binário (ArrayBuffer direto).
        const bytes = typeof costume.data === 'string' ?
            encoder.encode(costume.data) :
            new Uint8Array(costume.data);
        storage.builtinHelper._store(
            storage.AssetType[costume.assetType],
            storage.DataFormat[costume.dataFormat.toUpperCase()],
            bytes,
            costume.assetId
        );
    });
};

export default registerCustomCostumes;