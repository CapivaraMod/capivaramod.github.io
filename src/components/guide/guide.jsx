import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import DOMPurify from 'dompurify';
import {marked} from 'marked';

import styles from './guide.css';

const GUIDE_URL =
    'https://raw.githubusercontent.com/CapivaraMod/guide/refs/heads/main/README.md';

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

const Guide = ({onClose}) => {
    const [guideMarkdown, setGuideMarkdown] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchGuide = async () => {
            try {
                setLoading(true);
                setError(false);

                const response = await fetch(GUIDE_URL, {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error(
                        `Falha ao carregar o guia: HTTP ${response.status}`
                    );
                }

                const markdown = await response.text();
                setGuideMarkdown(markdown);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Erro ao carregar o guia:', err);
                    setError(true);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchGuide();

        return () => controller.abort();
    }, []);

    return (
        <aside
            aria-label="Guia"
            className={styles.guide}
        >
            <div className={styles.header}>
                <h2>Guia</h2>

                <button
                    aria-label="Fechar guia"
                    className={styles.closeButton}
                    onClick={onClose}
                    type="button"
                >
                    {'×'}
                </button>
            </div>

            <div className={styles.content}>
                {loading ? (
                    <p>Carregando guia...</p>
                ) : error ? (
                    <p>
                        Não foi possível carregar o guia.
                        Verifique sua conexão e tente novamente.
                    </p>
                ) : (
                    <>
                        {/* Markdown is sanitized with DOMPurify before insertion. */}
                        {/* eslint-disable-next-line react/no-danger */}
                        <div
                            dangerouslySetInnerHTML={renderMarkdown(
                                guideMarkdown
                            )}
                        />
                    </>
                )}
            </div>
        </aside>
    );
};

Guide.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default Guide;
