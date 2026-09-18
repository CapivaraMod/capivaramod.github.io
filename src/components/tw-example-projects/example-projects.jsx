import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import classNames from 'classnames';
import log from '../../lib/log';
import styles from './example-projects.css';

// tw: lista local de projetos de exemplo.
// Cada .sb3 fica em ./examples e é empacotado no build via arraybuffer-loader,
// então não depende de scratch.mit.edu nem de internet para abrir.
/* eslint-disable import/no-unresolved */
import gato from '!arraybuffer-loader!./examples/exemploum.sb3';


import thumbGato from './examples/exemploum.png';


// Adicione/edite itens aqui para trocar os projetos de exemplo exibidos.
const EXAMPLE_PROJECTS = [
    {
        id: 'gato',
        title: 'Exemplo: Gato dançando',
        thumbnail: thumbGato,
        data: gato
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
