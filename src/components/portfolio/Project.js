import React, {Component, useState} from 'react';

export default class Project extends Component {

    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {

        let {showInfo} = this.state;
        
        console.log(showInfo);

        console.log(this.state.showInfo);

        let {name, languages, languagesIcons, source, info, picture} = this.props.item;

        //ici le tableau permet de remplacer this.props.item.name(ou lannguage...)
        //par name, language etc

        // console.log(item);
        
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                    <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo}/>
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>


                {showInfo && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>
                                <div className="sourceCode">
                                <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                </div>
                            </div>

                            <p className="text">{info}ws cqx</p>

                            

                            <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
                        </div>
                    </div>
                )}
                


            </div>
        );
    }
}



