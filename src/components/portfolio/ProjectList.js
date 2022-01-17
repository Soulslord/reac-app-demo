import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

export default class ProjectList extends Component {
    
    state = {
        projects: portfolioData,
        radios: [
            {id: 1, value: "javascript"},
            {id: 2, value: "css"},
            {id: 3, value: "react"},
            {id: 4, value: "php"}
        ],
        selectedRadio: 'javascript'
    };

    handleRadio = (event) => {
        // console.log(event.target.value);
        //event.target.value donnera la valeur value de l'élément sur lequel je clique
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    };

    render() {

        let {projects, radios, selectedRadio} = this.state;

        // console.log(this.state.radios[0].value);

        // ici cette ligne remplace this.state.projects
        // par projects


        // let projectstab = projects.map(item => {
        //     return <div key={item.id} item={item}></div>
        // });
        // console.log(projectstab);
        return (
            <div className="portfolioContent">

                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                            <li key={radio.id}>
                                <input 
                                type="radio"
                                name="radio"
                                checked={radio.value === selectedRadio}
                                value={radio.value}
                                id={radio.value}
                                onChange={this.handleRadio}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                                {/* Il faut noter qu'on doit lier l'ID de input({radio.value}) avec le htmlfor={radio.value} de label. */}
                            </li>)
                        })
                    }

                </ul>


                <div className="projects">
                    {
                        projects
                        .filter(item => item.languages.includes(selectedRadio))
                        .map(item => {

                            return (
                                <Project
                                key={item.id}
                                item={item}
                                />
                            )
                        })
                    }

                    {/* {projectstab[0].props.item.name} */}
                </div>
            </div>
        );
    }
}

