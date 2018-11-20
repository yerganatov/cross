import React, {Component} from "react";
import "./DetailedProject.scss";
import { withI18next } from '../lib/withI18next'
import Link from 'next/link'
import {Header, Footer, Preloader} from "../common";
import firebase from "../api/firebase";
const db = firebase.firestore();

class detailedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                en: {
                    aboutClient: "",
                    done: "",
                    goal: "",
                    result: "",
                    tags: [],
                    title: ""
                },
                ru: {
                    aboutClient: "",
                    done: "",
                    goal: "",
                    result: "",
                    tags: [],
                    title: ""
                },
                gr: {
                    aboutClient: "",
                    done: "",
                    goal: "",
                    result: "",
                    tags: [],
                    title: ""
                },
                images: []
            },
            loading: true,
            img:"",
            id:""
        }
    }
    static async getInitialProps({query}) {
        return{url : query.id}
    }

    async componentDidMount() {
        this.fetchProject();
        this.setState({
            loading: false,
        })
    }


    fetchProject = async () => {
        try {
            const snapshot = await db.collection('projects').doc(this.props.url).get();
            let project = snapshot.data();
            this.setState({
                project,
                img:project.images[0]

            })
        }
        catch (error) {
            alert(error.message);
        }
    };


    render() {

        const {t, lng} = this.props;
        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/1000/600/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/1000/600/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/1000/600/nature/3/'
            }
        ]
        const {project} = this.state;
        const {en ,ru,gr} = project;
        let data = {
            aboutClient: "",
            done: "",
            goal: "",
            result: "",
            tags: [],
            title: ""
        };
        switch (lng) {
            case "ru-RU": {
                data = project.ru;
                break;
            }
            case "en": {
                data = project.ru;
                break;
            }
            case "gr": {
                data = project.gr
                break;
            }
            default: {
                break;
            }

        }
        return (
            <div className="DetailedProduct">
                {this.state.loading && <Preloader></Preloader>}
                <Header bgColor="#000"/>
                <div className="landing">
                    <div className="col-md-6 col-12 px-0">
                        <span className="sub-title">{t("detailedProject.project")}</span>
                        <h1>{data.title}</h1>

                        <div className="tag-list d-flex flex-wrap">
                            {
                                data.tags.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <p className="tag" key={index}>{item}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row flex-column-reverse flex-md-row">
                        <div className="col-md-6 col-12 d-flex flex-column pr-md-5">
                            <div className="details">
                                <h3>{t("detailedProject.aboutClient")}</h3>
                                <p>{data.aboutClient}</p>
                            </div>
                            <div className="details">
                                <h3>{t("detailedProject.task")}</h3>
                                <p>{data.goal}
                                </p>
                            </div>
                            <div className="details">
                                <h3>{t("detailedProject.work")}</h3>
                                <p>{data.done}
                                </p>
                            </div>
                            <div className="details">
                                <h3>{t("detailedProject.result")}</h3>
                                <p>{data.result}
                                </p>
                            </div>


                        </div>
                        <div className="col-md-6 col-12">
                            <div className="container px-0">
                                <ul className="slides">

                                    <li ><img src={this.state.img} alt=""/></li>


                                </ul>

                                <ul className="thumbnails row d-flex mx-0">
                                    {
                                        project.images.map((image, index) => {
                                            return (
                                                <li onClick={() => {
                                                    this.setState({img: image})}}>
                                                    <a href={"#slide" + index}><img
                                                        src={image}/></a>
                                                </li>
                                            )

                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer bgColor="#000"/>
            </div>
        )
    }
}

export default withI18next('translation')(detailedProject);