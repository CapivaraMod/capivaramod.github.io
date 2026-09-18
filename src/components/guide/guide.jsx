import PropTypes from 'prop-types';
import React from 'react';
import DOMPurify from 'dompurify';
import {marked} from 'marked';

import guideMarkdown from '../../lib/guide.md';

import styles from './guide.css';

marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    mangle: false
});

const renderMarkdown = markdown => ({
    __html: DOMPurify.sanitize(marked.parse(markdown), {
        ADD_ATTR: ['target', 'rel']
    })
});

const Guide = ({onClose}) => (
    <aside
        aria-label={'Guia'}
        className={styles.guide}
    >
        <div className={styles.header}>
            <h2>{'Guia'}</h2>
            <button
                aria-label={'Fechar guia'}
                className={styles.closeButton}
                onClick={onClose}
                type="button"
            >
                {'×'}
            </button>
        </div>
        <div
            className={styles.content}
            // Markdown is sanitized with DOMPurify before being inserted.
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={renderMarkdown(guideMarkdown)}
        />
    </aside>
);

Guide.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default Guide;
