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
import img_16bit_0001 from '!arraybuffer-loader!./16bit-0001.png';
import img_16bit_0002 from '!arraybuffer-loader!./16bit-0002.png';
import img_16bit_0003 from '!arraybuffer-loader!./16bit-0003.png';
import img_16bit_0004 from '!arraybuffer-loader!./16bit-0004.png';
import img_16bit_0005 from '!arraybuffer-loader!./16bit-0005.png';
import img_16bit_0006 from '!arraybuffer-loader!./16bit-0006.png';
import img_16bit_0007 from '!arraybuffer-loader!./16bit-0007.png';
import img_16bit_0008 from '!arraybuffer-loader!./16bit-0008.png';
import img_16bit_0010 from '!arraybuffer-loader!./16bit-0010.png';
import img_16bit_cara_normal from '!arraybuffer-loader!./16bit-cara-normal.png';
import img_16bit_cara_triste from '!arraybuffer-loader!./16bit-cara-triste.png';
import img_16bit_cara_brava from '!arraybuffer-loader!./16bit-cara-brava.png';
import img_16bit_piscando from '!arraybuffer-loader!./16bit-piscando.png';
import img_voxel_arvore from '!arraybuffer-loader!./voxel-arvore.png';
import img_voxel_folha from '!arraybuffer-loader!./voxel-folha.png';
import img_voxel_tronco from '!arraybuffer-loader!./voxel-tronco.png';
import img_forma_cubo from '!arraybuffer-loader!./forma-cubo.png';
import img_forma_esfera from '!arraybuffer-loader!./forma-esfera.png';
import img_forma_piramide from '!arraybuffer-loader!./forma-piramide.png';
import img_forma_plano from '!arraybuffer-loader!./forma-plano.png';
import img_forma_toro from '!arraybuffer-loader!./forma-toro.png';
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
    },
    {
        assetId: '8f6a55fe64ab8b8bbcf477b06c4058de',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0001
    },
    {
        assetId: '0f3874207ef32409f4cd4fa2eedd0834',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0002
    },
    {
        assetId: '793ad4dbda270a957313694c2287ad3b',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0003
    },
    {
        assetId: '0b2e444a3b6028b677275c5657f24490',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0004
    },
    {
        assetId: '67cce954c83daaea0adcdb3e3d1989c7',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0005
    },
    {
        assetId: '404862ac991dd122c3dc8f1cf63633e2',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0006
    },
    {
        assetId: '2d033cb72cb543ed6cdcad97e20996a8',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0007
    },
    {
        assetId: '99a4ccad0ca41ce272235a1ce6503437',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0008
    },
    {
        assetId: '7f84de3cc11ceff67e5bc82bb7bfb252',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_0010
    },
    {
        assetId: 'e130dcd1f25d6e63cf6c33cd65f4f96c',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_cara_normal
    },
    {
        assetId: 'ef36ecc33cf4514b97ac626ae0ddec1f',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_cara_triste
    },
    {
        assetId: '63c1a5cb5e998c0a50aa25f89dd59a0f',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_cara_brava
    },
    {
        assetId: '25818fc0513f0e02c0272eac36aa08a3',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_16bit_piscando
    },
    {
        assetId: 'bfb3b6464d706a922fd3f91c1be76276',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_voxel_arvore
    },
    {
        assetId: '77cf47f593323ace8e0cb4b89f486d6e',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_voxel_folha
    },
    {
        assetId: 'daacb396b5f57156c92d47804d5e6a54',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_voxel_tronco
    },
    {
        assetId: 'b4512fd7eb05562a32a48c11b3b2108a',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_forma_cubo
    },
    {
        assetId: '65313ef86a1385debbbb2ad9f2536e96',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_forma_esfera
    },
    {
        assetId: '0c007e80b3121a7a930caf128fff8399',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_forma_piramide
    },
    {
        assetId: '256194cdfeb8e780bf574b1f2e2b3e30',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_forma_plano
    },
    {
        assetId: '73b4b937cb745ccf5f911f9cba047f7b',
        dataFormat: 'png',
        assetType: 'ImageBitmap',
        data: img_forma_toro
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