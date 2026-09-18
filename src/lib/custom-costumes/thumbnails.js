// src/lib/custom-costumes/thumbnails.js
//
// Mapa de assetId -> URL local (gerada pelo webpack) para os costumes
// customizados. Usado pela biblioteca para não tentar buscar a thumbnail
// no CDN oficial do Scratch (onde o asset não existe).

import capivaraURL from './capivara.svg';

const CUSTOM_COSTUME_THUMBNAILS = {
    'c9f03a6e0a8997ad0a541af2f8382650.svg': capivaraURL
};
export default CUSTOM_COSTUME_THUMBNAILS;
