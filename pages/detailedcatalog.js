import React, {Component} from "react";
import "./DetailedCatalogProject.scss";
import { withI18next } from '../lib/withI18next'
import {Header, Footer, Preloader, OrderModal, MainButton } from "../common";
import firebase from "../api/firebase";
import Head from "next/head";
const db = firebase.firestore();


class Detailedcatalog extends Component {
    state = {
        createOrder:false,
        catalog:{
            en:{
                aboutCatalog: "",
                title: "",
                requestPartners:""
            },
            ru:{
                aboutCatalog: "",
                title: "",
                requestPartners:""
            },
            gr:{
                aboutCatalog: "",
                title: "",
                requestPartners:""
            }
        },
        loading:true,
        headerOpen:false

    };
    static async getInitialProps({query}) {
        return{url : query.id}
    }

    async componentDidMount(){
        await this.fetchCatalog();
        this.setState({
            loading:false
        })
    }

    fetchCatalog = async () =>{
        try{
            const snapshot = await db.collection('catalog').doc(this.props.url).get();
            let project = snapshot.data();
            this.setState({
                catalog:project
            })
        }
        catch (error){
            alert(error.message);
        }
    }

    createOrder = () =>{
        this.setState({
            createOrder:!this.state.createOrder
        })
    };

    isActive = () =>{
        return "modalViewWrap " + ((this.state.createOrder === true) ? "opened": "")
    }

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


    render() {
        const { lng } = this.props;
        const { catalog } = this.state;
        const {en = {} , ru = {}, gr = {}} = catalog;
        let data = {
            aboutCatalog: "",
            title: "",
            requestPartners:""
        };
        switch (lng) {
            case "ru-RU": {
                data = catalog.ru;
                break;
            }
            case "en": {
                data = catalog.ru;
                break;
            }
            case "gr": {
                data = catalog.gr
                break;
            }
            default: {
                break;
            }

        }
        const { t } = this.props;
        return (
            <div className="d-flex flex-column">
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
                <Header opened={this.state.headerOpen} toggleHeader={this.toggleHeader} bgColor={"#fff"} textColor={"#000"}/>
                <div className={this.isActive()}>
                    <OrderModal closeModal={this.createOrder}/>
                </div>

                <div className="DetailedCatalogProject">
                    <div className="landing">
                        <div className="col-md-6 px-0">
                            <span className="sub-title">{t("detailedCatalog.catalog")}</span>
                            <h1>{data.title}</h1>
                        </div>
                        <div className="row flex-column-reverse flex-md-row">
                            <div className="col-md-6 col-12 d-flex flex-column pr-md-5">
                                <div className="details">
                                    <h3>{t("detailedCatalog.aboutCatalog")}</h3>
                                    <p>{data.aboutCatalog}</p>
                                </div>
                                <div className="details">
                                    <h3>{t("detailedCatalog.requestPartners")}</h3>
                                    <p>{data.requestPartners}
                                    </p>
                                </div>
                                <MainButton onClick={this.createOrder} title={t("detailedCatalog.button")}/>
                            </div>
                            <div className="image-wrapper col-md-6 col-12 d-md-flex align-items-start justify-content-md-end">
                                <img src={catalog.image} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer bgColor={"#fff"} textColor={"#000"}/>
            </div>
        )
    }
}
export default withI18next('translation')(Detailedcatalog);