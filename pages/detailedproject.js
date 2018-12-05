import React, {Component} from "react";
import "./DetailedProject.scss";
import {withI18next} from '../lib/withI18next'
import Head from 'next/head';
import Router from 'next/router'


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
            img: "",
            id: "",
            headerOpen: false

        }
    }

    static async getInitialProps({query}) {
        return {url: query.id}
    }

    async componentDidMount() {
        this.fetchProject();
        this.fetchContacts();

    }

    fetchContacts = async () => {
        try {
            const snapshot = await db.collection('contacts').doc("fHjNkcn2zz7XE7EyImdh").get();

            let project = snapshot.data();
            this.setState({
                contacts: project
            })
            this.returnContacts();

        } catch (error) {
            alert(error.message);
        }
    }
    returnContacts = () =>{
        const {t, i18n, lng} = this.props;
        console.log("ss")

        switch (lng) {
            case "ru": {
                this.setState({
                    currentContact: this.state.contacts.ru
                })
                break;
            }
            case "en": {

                this.setState({
                    currentContact: this.state.contacts.en
                })
                break;
            }
            case "ru-RU": {
                this.setState({
                    currentContact: this.state.contacts.ru
                })

                break;
            }
            case "en-US": {
                this.setState({
                    currentContact: this.state.contacts.en
                })

                break;
            }
            case "gr": {
                this.setState({
                    currentContact: this.state.contacts.gr
                })

                break;
            }
            default: {
                break;
            }
        }
        console.log(this.state.currentContact)


    }


    fetchProject = async () => {
        try {
            const snapshot = await db.collection('projects').doc(this.props.url).get();
            let project = snapshot.data();
            console.log(project);
            await this.setState({
                project:project,

            })

            if(project !== undefined) {
                this.setState({
                    img: project.images[0]
                })
            }

            this.setState({
                loading: false,
            })
        } catch (error) {
            console.log(error);
        }
    };

    closeHeader = () => {
        this.setState({
            headerOpen: false
        })
    }
    toggleHeader = () => {
        console.log("dasd")
        this.setState({
            headerOpen: !this.state.headerOpen
        })
    }


    render() {
        const {t, lng} = this.props;
        if (this.state.project !== undefined) {

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
            const {en, ru, gr} = project;
            let data = {
                aboutClient: "",
                done: "",
                goal: "",
                result: "",
                tags: [],
                title: ""
            };
            switch (lng) {
                case "ru": {
                    data = project.ru;
                    break;
                }
                case "en": {
                    data = project.en;
                    break;
                }
                case "ru-RU": {
                    data = project.ru;
                    break;
                }
                case "en-US": {
                    data = project.en;
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
                    <Head>
                        <title>{t("titles.projectItem")}{data.title}</title>
                        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png"/>
                        <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png"/>
                        <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png"/>
                        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png"/>
                        <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png"/>
                        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png"/>
                        <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png"/>
                        <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png"/>
                        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png"/>
                        <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png"/>
                        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
                        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png"/>
                        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
                        <link rel="manifest" href="/static/manifest.json"/>
                        <meta name="msapplication-TileColor" content="#ffffff"/>
                        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                        <meta name="theme-color" content="#ffffff"/>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    </Head>
                    {this.state.loading && <Preloader></Preloader>}

                    <Header contacts={this.state.currentContact} opened={this.state.headerOpen} toggleHeader={this.toggleHeader} bgColor={"#000"}/>

                    <div className="landing">
                        <div className="col-md-6 col-12 px-0">
                            <span className="sub-title">{t("detailedProject.project")}</span>
                            <h1>{data.title}</h1>

                            <div className="tag-list d-flex flex-wrap">
                                {
                                    data.tags.map((item, index) => {
                                        return (
                                            <p className="tag" key={index}>{item.text}</p>
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

                                        <li><img src={this.state.img} alt=""/></li>


                                    </ul>

                                    <ul className="thumbnails row d-flex mx-0">
                                        {
                                            project.images.map((image, index) => {
                                                return (
                                                    <li onClick={() => {
                                                        this.setState({img: image})
                                                    }}>
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
                    <Footer contacts={this.state.currentContact} bgColor="#000"/>
                </div>
            )
        }
        return(
            <div className="d-flex flex-column">
                <Head>
                    <title>{t("titles.projectItem")}</title>
                    <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
                    <link rel="manifest" href="/static/manifest.json"/>
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                {this.state.loading && <Preloader></Preloader>}
                <Header contacts={this.state.currentContact} opened={this.state.headerOpen} toggleHeader={this.toggleHeader} bgColor={"#fff"}
                        textColor={"#000"}/>
                <div className="DetailedCatalogProject d-flex align-items-center justify-content-center">
                    <div className="landing h-100">
                        {t("page404")}
                    </div>
                </div>
                <Footer contacts={this.state.currentContact} bgColor={"#fff"} textColor={"#000"}/>
            </div>
        )

    }
}

export default withI18next('translation')(detailedProject);