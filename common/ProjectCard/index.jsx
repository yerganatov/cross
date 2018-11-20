import React, {Component} from "react";
import "./ProjectCard.scss";
import Link from "next/link";
class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.state = {clicked : false};
    }


    render() {
        const { item, id,image  } = this.props;

        return (
            <Link href={"/detailedproject?id=" + id} as={"/detailedproject/"+ id}>
            <a >
            <div className="ProjectCard">
                <div className="hover-info p-4">
                    <p className="p-4">{item.title}</p>
                    <img src={'/static/card-ornament.png'} alt=""/>
                </div>
                <img className="image-project" src={image} alt=""/>
            </div>
            </a>
            </Link>
        )
    }

}

export default ProjectCard;