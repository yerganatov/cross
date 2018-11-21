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
        loading:true
    }

    async componentDidMount(){
        await this.fetchCatalog();
        this.setState({
            loading:false
        })
    }


    fetchCatalog = async () => {
        try {
            const snapshots = await db.collection('catalog').get();
            let problems = [];
            snapshots.forEach(s => {
                console.log(s);
                const data = s.data();
                data["id"] = s.id;
                problems.push(data);
            });
            await this.setState({catalog: [...problems]});
        } catch (error) {
            alert(error.message);
        }
    };

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
                <Header bgColor="#fff" textColor="#000"/>
                <div className="main-article w-100 d-flex flex-column align-items-center">
                    <h2>{t("catalog.subTitle")}</h2>
                    <h3 className="title">{t("catalog.title")}</h3>
                    <p className="description"><span>{this.state.catalog.length}{t("catalog.descriptionSpan")}</span> {t("catalog.description")}</p>
                    <div className="row">
                        {this.state.catalog.map(item => {
                            let data;
                            switch (lng) {
                                case "ru-RU": {
                                    data = item.ru;
                                    break;
                                }
                                case "en": {
                                    data = item.ru;
                                    break;
                                }
                                case "gr": {
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
                <Footer bgColor="#fff" textColor="#000"/>
            </div>
        )
    }
}

export default  withI18next('translation')(Catalog);