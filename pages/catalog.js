import React, {Component} from "react";
import "./Catalog.scss";
import { withI18next } from '../lib/withI18next'
import Link from 'next/link'
import {Header, Footer, Preloader,CatalogItem} from "../common";
import firebase from "../api/firebase";
import Head from "next/head";
const db = firebase.firestore();

class Catalog extends Component{
    state ={
        catalog: [],
        loading:true,
        headerOpen:false,
        contacts:{}
    }

    async componentDidMount(){
        await this.fetchCatalog();
        await this.fetchContacts();
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
    returnContacts = () =>{
        const {t, i18n, lng} = this.props;

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



    fetchCatalog = async () => {
        try {
            const snapshots = await db.collection('catalog').get();
            let problems = [];
            snapshots.forEach(s => {
                const data = s.data();
                data["id"] = s.id;
                problems.push(data);
            });
            await this.setState({catalog: [...problems]});
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
        const { t, i18n, lng } = this.props;
        return(
            <div className="Catalog d-flex flex-column">
                <Head>
                    <title>{t("titles.catalogList")}</title>
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
                <div className="main-article w-100 d-flex flex-column align-items-center">
                    <h2>{t("catalog.subTitle")}</h2>
                    <h3 className="title">{t("catalog.title")}</h3>
                    <p className="description"><span>{this.state.catalog.length}{t("catalog.descriptionSpan")}</span> {t("catalog.description")}</p>
                    <div className="row">
                        {this.state.catalog.map(item => {
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

                                <div className="col-md-3 col-6">
                                    <CatalogItem date={item.date} image={item.image} id={item.id} item={data}/>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <Footer  contacts={this.state.currentContact} bgColor="#fff" textColor="#000"/>
            </div>
        )
    }
}

export default  withI18next('translation')(Catalog);