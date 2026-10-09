import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import classNames from 'classnames';
import log from '../../lib/log';
import styles from './example-projects.css';

import terraelua from '!arraybuffer-loader!./examples/terraelua.sb3';
import capivaraclicker from '!arraybuffer-loader!./examples/capivaraclicker.sb3';
import wikipediacapivaramod from '!arraybuffer-loader!./examples/wikipediacapivaramod.sb3';
import flappybara from '!arraybuffer-loader!./examples/flappybara.sb3';


import thumbTerraelua from './examples/terraelua.png';
import thumbCapivaraclicker from './examples/capivaraclicker.png';
import thumbWikipediacapivaramod from './examples/wikipediacapivaramod.png';
import thumbFlappybara from './examples/flappybara.png';

const EXAMPLE_PROJECTS = [
    {
        id: 'terraelua',
        title: 'Terra e lua',
        thumbnail: thumbTerraelua,
        data: terraelua
    },
    {
        id: 'capivaraclicker',
        title: 'Capivara Clicker',
        thumbnail: thumbCapivaraclicker,
        data: capivaraclicker
    },
    {
        id: 'wikipediacapivaramod',
        title: 'Wikipédia Capivara Mod',
        thumbnail: thumbWikipediacapivaramod,
        data: wikipediacapivaramod
    },
    {
        id: 'flappybara',
        title: 'Capi Fly',
        thumbnail: thumbFlappybara,
        data: flappybara
    }
];

class ExampleProjects extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleSelect'
        ]);
        this.state = {
            loading: false
        };
    }
    handleSelect (project) {
        if (this.state.loading) return;
        if (this.props.projectChanged) {
            // eslint-disable-next-line no-alert
            const ok = confirm(
                'Isso vai substituir o projeto atual sem salvar. Continuar?'
            );
            if (!ok) return;
        }
        this.setState({loading: true});
        const vm = this.props.vm;
        vm.quit();
        vm.loadProject(project.data)
            .then(() => {
                this.props.onSetProjectTitle(project.title);
                vm.renderer.draw();
            })
            .catch(error => {
                log.error(error);
            })
            .then(() => {
                this.setState({loading: false});
            });
    }
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <FormattedMessage
                        defaultMessage="Projetos de exemplo"
                        description="Título da seção de projetos de exemplo"
                        id="tw.exampleProjects.title"
                    />
                </div>
                <div className={styles.grid}>
                    {EXAMPLE_PROJECTS.map(project => (
                        <div
                            key={project.id}
                            className={classNames(styles.card, {
                                [styles.disabled]: this.state.loading
                            })}
                            onClick={() => this.handleSelect(project)}
                        >
                            <img
                                className={styles.thumbnail}
                                src={project.thumbnail}
                                draggable={false}
                            />
                            <div className={styles.cardTitle}>
                                {project.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ExampleProjects.propTypes = {
    vm: PropTypes.shape({
        quit: PropTypes.func,
        loadProject: PropTypes.func,
        renderer: PropTypes.shape({
            draw: PropTypes.func
        })
    }),
    projectChanged: PropTypes.bool,
    onSetProjectTitle: PropTypes.func
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
    projectChanged: state.scratchGui.projectChanged
});

const mapDispatchToProps = dispatch => ({
    onSetProjectTitle: title => dispatch(require('../../reducers/project-title').setProjectTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExampleProjects);
