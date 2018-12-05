import React,{Component} from 'react';
import { withI18next } from '../lib/withI18next'
import Head from 'next/head'

import {Header, Footer, ProjectCard, CatalogItem, Preloader, OrderModal} from "../common";
import firebase from "../api/firebase";
const db = firebase.firestore();
import "./ProjectList.scss";


class plist extends Component {
    state={
        projects:[],
        loading: true,
        headerOpen:false,
        contacts: {},
        

    }
    async componentDidMount(){
        await this.fetchProjects();
        await this.fetchContacts()
        this.setState({
            loading:false
        })
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
    returnContacts = () => {
        const { t, i18n, lng } = this.props;

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


    }



    fetchProjects = async () => {
        try {
            const snapshots = await db.collection('projects').get();
            let problems = [];
            snapshots.forEach(s => {
                const data = s.data();
                data["id"] = s.id;
                problems.push(data);
            });
            await this.setState({projects: [...problems]});
        } catch (error) {
            alert(error.message);
        }
    };

    closeHeader = () =>{
        this.setState({
            headerOpen:false
        })
    }
    toggleHeader = () =>{
        this.setState({
            headerOpen:!this.state.headerOpen
        })
    }

    render(){
        const { t, i18n, lng} = this.props;
        return(

            <div className="ProjectList">
                <Head>
                    <title>{t("titles.projectList")}</title>
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

                <div className="info-project-list d-flex flex-column align-items-center">
                    <h2 className="text-md-center text-left">{t("mainPage.ourWorks.subTitle")}</h2>
                    <h3 className="text-md-center text-left">{t("mainPage.ourWorks.title")}</h3>
                    <div className="row mx-0 mt-md-5 mb-md-4 mt-3 w-100">
                        <div className="col-12 d-flex mb-md-5 justify-content-between align-items-center">
                            <div className="line pr-5"></div>
                            <p className="year-of-event mb-0 text-center">2018 год</p>
                            <div className="line pl-5"></div>
                        </div>
                        {this.state.projects.map(item => {
                            let data;
                            switch (lng) {
                                case "ru": {
                                    if(item.ru.title === ""){
                                        return;
                                    }
                                    data = item.ru;
                                    break;
                                }
                                case "en": {
                                    if(item.en.title === ""){
                                        return;
                                    }
                                    data = item.en;
                                    break;
                                }
                                case "ru-RU": {
                                    if(item.ru.title === ""){
                                        return;
                                    }
                                    data = item.ru;
                                    break;
                                }
                                case "en-US": {
                                    if(item.en.title === ""){
                                        return;
                                    }
                                    data = item.en;
                                    break;
                                }
                                case "gr": {
                                    if(item.gr.title === ""){
                                        return;
                                    }
                                    data = item.gr
                                    break;
                                }
                                default: {
                                    break;
                                }
                            }
                            return (
                                <div className="col-md-6 col-12 p-3">
                                    <ProjectCard image={item.images !== undefined ? item.images[0]: ""} id={item.id} item={data}/>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <Footer   contacts={this.state.currentContact}  bgColor="#000"/>
            </div>
        )
    }
}
export default withI18next('translation')(plist);