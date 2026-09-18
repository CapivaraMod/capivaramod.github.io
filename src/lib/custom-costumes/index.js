// src/lib/custom-costumes/index.js
//
// Registra costumes locais no storage do scratch-gui, sem precisar
// de nenhum servidor externo. Baseado no mesmo mecanismo usado por
// src/lib/default-project/index.js (cacheDefaultProject).

/* eslint-disable import/no-unresolved */
import capivara from '!raw-loader!./capivara.svg';
/* eslint-enable import/no-unresolved */

import {TextEncoder} from '../tw-text-encoder';

const CUSTOM_COSTUMES = [
    {
        assetId: 'c9f03a6e0a8997ad0a541af2f8382650',
        dataFormat: 'svg',
        data: capivara
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
        storage.builtinHelper._store(
            storage.AssetType.ImageVector,
            storage.DataFormat[costume.dataFormat.toUpperCase()],
            encoder.encode(costume.data),
            costume.assetId
        );
    });
};

export default registerCustomCostumes;
