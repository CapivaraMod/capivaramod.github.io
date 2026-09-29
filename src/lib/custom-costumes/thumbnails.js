// src/lib/custom-costumes/thumbnails.js
//
// Mapa de md5ext -> URL local (gerada pelo webpack) para os costumes
// customizados. Usado pela biblioteca para não buscar a thumbnail
// no CDN oficial do Scratch (onde o asset não existe).

import capivaraURL from './capivara.svg';
import pixel_0URL from './0.png';
import pixel_1URL from './1.png';
import pixel_2URL from './2.png';
import pixel_3URL from './3.png';
import pixel_4URL from './4.png';
import pixel_5URL from './5.png';
import pixel_6URL from './6.png';
import pixel_7URL from './7.png';
import pixel_8URL from './8.png';
import pixel_9URL from './9.png';
import pixel_maisURL from './+.png';
import pixel_menosURL from './-.png';

const CUSTOM_COSTUME_THUMBNAILS = {
    'c9f03a6e0a8997ad0a541af2f8382650.svg': capivaraURL,
    'd21217c351f829fca2fbfbc29263f27c.png': pixel_0URL,
    '0d583fd22c651923f8abc98e95a7505d.png': pixel_1URL,
    '1be39fc5196bff0f98f1e52c900eef4f.png': pixel_2URL,
    'cc09591528e90ad8bf070f7eed9181a7.png': pixel_3URL,
    'dcad369bd530a6128424343cc8e67531.png': pixel_4URL,
    'daca3b9e8fcf379bd48aede9d4702442.png': pixel_5URL,
    '703f8fbb5eae0fbbe4ec20a8b38d290d.png': pixel_6URL,
    'bcd840480bd2fe310a5ffe5d9c35aada.png': pixel_7URL,
    'e505a6a46f06fae935ef188b0fdbe7e7.png': pixel_8URL,
    '09beff0cbdb7299ebfcfaf33570eb95f.png': pixel_9URL,
    '5b0fd81f21a81f7fae3318350dc14c73.png': pixel_maisURL,
    '354b2a84ac960015af78988729cca574.png': pixel_menosURL
};
export default CUSTOM_COSTUME_THUMBNAILS;