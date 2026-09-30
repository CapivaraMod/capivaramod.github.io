/* eslint-disable import/no-unresolved */
import fundo1 from '!raw-loader!./fundo1.svg';
import fundo1Url from './fundo1.svg';
import cenario_amazonia from '!arraybuffer-loader!./cenario-amazonia.png';
import cenario_amazoniaUrl from './cenario-amazonia.png';
import cenario_caatinga from '!arraybuffer-loader!./cenario-caatinga.png';
import cenario_caatingaUrl from './cenario-caatinga.png';
import cenario_cerrado from '!arraybuffer-loader!./cenario-cerrado.png';
import cenario_cerradoUrl from './cenario-cerrado.png';
import cenario_espaco_de_voxel from '!arraybuffer-loader!./cenario-espaco-de-voxel.png';
import cenario_espaco_de_voxelUrl from './cenario-espaco-de-voxel.png';
import cenario_paisagem_de_voxel from '!arraybuffer-loader!./cenario-paisagem-de-voxel.png';
import cenario_paisagem_de_voxelUrl from './cenario-paisagem-de-voxel.png';
import cenario_pampa from '!arraybuffer-loader!./cenario-pampa.png';
import cenario_pampaUrl from './cenario-pampa.png';
import cenario_cenario_de_teste from '!arraybuffer-loader!./cenario-cenario-de-teste.png';
import cenario_cenario_de_testeUrl from './cenario-cenario-de-teste.png';
/* eslint-enable import/no-unresolved */

import {TextEncoder} from '../tw-text-encoder';

const CUSTOM_BACKDROPS = [
    {
        assetId: '16061c1694a3e4446e709711ea35f9d0',
        dataFormat: 'svg',
        data: fundo1
    },
    {
        assetId: '484ea3ba96f67dd99ee551d9e35497b9',
        dataFormat: 'png',
        data: cenario_amazonia
    },
    {
        assetId: '88a8a4754769b43dba49c73782e80c24',
        dataFormat: 'png',
        data: cenario_caatinga
    },
    {
        assetId: '161c466cd087841ead1a6246a33b77bf',
        dataFormat: 'png',
        data: cenario_cerrado
    },
    {
        assetId: 'a0f1ba4e0323a350e79c0a882d02d7e4',
        dataFormat: 'png',
        data: cenario_espaco_de_voxel
    },
    {
        assetId: 'c78af54c9b0fdf3fac03b37bcfde361e',
        dataFormat: 'png',
        data: cenario_paisagem_de_voxel
    },
    {
        assetId: '40929a56cc23990254b6f13366bda3d4',
        dataFormat: 'png',
        data: cenario_pampa
    },
    {
        assetId: '1964d8e0aab729226da1275a460733b5',
        dataFormat: 'png',
        data: cenario_cenario_de_teste
    }
];

export const customBackdropThumbnails = {
    '16061c1694a3e4446e709711ea35f9d0': fundo1Url,
    '16061c1694a3e4446e709711ea35f9d0.svg': fundo1Url,
    '484ea3ba96f67dd99ee551d9e35497b9': cenario_amazoniaUrl,
    '484ea3ba96f67dd99ee551d9e35497b9.png': cenario_amazoniaUrl,
    '88a8a4754769b43dba49c73782e80c24': cenario_caatingaUrl,
    '88a8a4754769b43dba49c73782e80c24.png': cenario_caatingaUrl,
    '161c466cd087841ead1a6246a33b77bf': cenario_cerradoUrl,
    '161c466cd087841ead1a6246a33b77bf.png': cenario_cerradoUrl,
    'a0f1ba4e0323a350e79c0a882d02d7e4': cenario_espaco_de_voxelUrl,
    'a0f1ba4e0323a350e79c0a882d02d7e4.png': cenario_espaco_de_voxelUrl,
    'c78af54c9b0fdf3fac03b37bcfde361e': cenario_paisagem_de_voxelUrl,
    'c78af54c9b0fdf3fac03b37bcfde361e.png': cenario_paisagem_de_voxelUrl,
    '40929a56cc23990254b6f13366bda3d4': cenario_pampaUrl,
    '40929a56cc23990254b6f13366bda3d4.png': cenario_pampaUrl,
    '1964d8e0aab729226da1275a460733b5': cenario_cenario_de_testeUrl,
    '1964d8e0aab729226da1275a460733b5.png': cenario_cenario_de_testeUrl
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
        const isSvg = backdrop.dataFormat === 'svg';
        storage.builtinHelper._store(
            isSvg ? storage.AssetType.ImageVector : storage.AssetType.ImageBitmap,
            isSvg ? storage.DataFormat.SVG : storage.DataFormat.PNG,
            // SVG = texto (TextEncoder). PNG = binário (ArrayBuffer direto).
            isSvg ? encoder.encode(backdrop.data) : new Uint8Array(backdrop.data),
            backdrop.assetId
        );
    });
};

export default registerCustomBackdrops;
