import React from 'react';
import Head from 'next/head'
import {withI18next} from '../lib/withI18next'

import {Map, Marker, MarkerLayout} from 'yandex-map-react';

import {Header, Footer, ProjectCard, CatalogItem, Preloader, OrderModal} from "../common";
import firebase from "../api/firebase";

const db = firebase.firestore();
import "./home.scss";


class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projects: [],
            catalog: [],
            team: [],
            services: [],
            partners: [],
            createOrder: false,
            loading: true,
            lng: "",
            headerOpen: false,
            width:0
        };
        this.ref = React.createRef();

    }


    async componentDidMount() {
        const {lng} = this.props;
        this.fetchCatalog();
        this.fetchTeam();
        this.fetchServices();
        this.fetchPartners();
        await this.fetchProjects();
        this.setState({
            loading: false,
            lng,
            width:window.innerWidth
        })
        this.ref.current.innerHTML = this.ref.current.innerHTML.replace(/\u2028/g, ' ');
    }


    fetchTeam = async () => {
        try {
            const snapshots = await db.collection('team').get();
            let problems = [];
            snapshots.forEach(s => {
                const data = s.data();
                problems.push(data);
            });
            let projects = problems;
            projects.sort((a, b) => {
                return a.id - b.id;
            })
            await this.setState({team: [...projects]});
        } catch (error) {
            alert(error.message);
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
            let projects = problems.slice(0, 4);
            await this.setState({projects: [...projects]});
        } catch (error) {
            alert(error.message);
        }
    };
    fetchCatalog = async () => {
        try {
            const snapshots = await db.collection('catalog').get();
            let problems = [];
            snapshots.forEach(s => {
                const data = s.data();
                data["id"] = s.id;
                problems.push(data);
            });
            let projects = problems.slice(0, 4);
            await this.setState({catalog: [...projects]});
        } catch (error) {
            alert(error.message);
        }
    };
    fetchServices = async () => {
        try {
            const snapshots = await db.collection('services').get();
            let problems = [];
            snapshots.forEach(s => {
                const data = s.data();
                data["id"] = s.id;
                problems.push(data);
            });

            let projects = problems;
            await this.setState({services: [...projects]});
        } catch (error) {
            alert(error.message);
        }
    };
    fetchPartners = async () => {
        try {
            const snapshots = await db.collection('partners').get();
            let problems = [];
            snapshots.forEach(s => {
                const data = s.data();
                data["id"] = s.id;
                problems.push(data);
            });
            let projects = problems;
            await this.setState({partners: [...projects]});
        } catch (error) {
            alert(error.message);
        }
    };


    createOrder = () => {
        this.setState({
            createOrder: !this.state.createOrder
        })
    };

    isActive = () => {
        return "modalViewWrap " + ((this.state.createOrder === true) ? "opened" : "")
    }

    closeHeader = () => {
        this.setState({
            headerOpen: false
        })
    }
    toggleHeader = () => {
        console.log("sadds")
        this.setState({
            headerOpen: !this.state.headerOpen
        })
    }


    render() {
        const {t, i18n, lng} = this.props;

        return (
            <div className="Home d-flex flex-column">
                <Head>
                    <title>{t("titles.mainPage")}</title>
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
                <div className="lines-cover row mx-0 d-none d-md-flex">
                    <div className="col-3"></div>
                    <div className="col-6 d-flex justify-content-between">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="col-3"></div>
                </div>
                <Header opened={this.state.headerOpen} toggleHeader={this.toggleHeader} bgColor={"#000"}/>
                <div className={this.isActive()}>
                    <OrderModal closeModal={this.createOrder}/>
                </div>
                <div onClick={this.closeHeader} className="landing d-flex flex-column w-100">

                    <div className="main-card-info d-flex row m-0 align-items-center">
                        <div className="col-0 col-md-3 p-0 m-0"></div>
                        <div className="middle-card col-md-6 col-12">
                            {
                                this.state.width >768 ?
                                    <img src={'/static/main-card.png'} alt=""/> :
                                    <img src={'/static/main-card-mobile.png'} alt=""/>
                            }
                            <h3>{t("mainPage.firstPart.companyName")}<br/>
                                <span>{t("mainPage.firstPart.companyNameSub")}</span></h3>
                        </div>
                        <div className="col-12 col-md-3 mx-0 mt-4 mt-md-0">
                            <p>
                                {t("mainPage.firstPart.companyInfo.first")} <br/> <br/>
                                {t("mainPage.firstPart.companyInfo.second")} <br/> <br/>
                                {t("mainPage.firstPart.companyInfo.third")}
                            </p>
                        </div>
                    </div>

                    <div ref={this.ref}  className="our-mission d-flex align-items-center row mx-0 w-100">
                        <h2 className="d-none d-md-block text-center">{t("mainPage.ourMission.title")}</h2>
                        <div className="col-0 col-md-2"></div>
                        <div className="col-md-7 col-12 d-flex align-items-center">
                            <img className="d-none d-md-block mr-4"
                                 src={'../static/logo-mobile.png'} alt=""/>
                            <p>
                                <span>{t("mainPage.ourMission.description")}</span>{t("mainPage.ourMission.descriptionInside")}
                            </p>
                        </div>
                        <div className="col-0 col-md-3"></div>
                    </div>

                    <section id="services" style={{paddingTop: "-10rem"}}></section>
                    <div className="our-services d-flex">
                        <div className="white-box d-flex flex-column p-2 p-md-5">
                            <h3 className="mb-5">{t("mainPage.ourServices.title")}</h3>
                            <div className="services row mx-0">
                                {
                                    this.state.services.map((item) => {
                                        let data;
                                        switch (lng) {
                                            case "ru": {
                                                if (item.ru.title === "") {
                                                    return;
                                                }
                                                data = item.ru;
                                                break;
                                            }
                                            case "en": {
                                                if (item.en.title === "") {
                                                    return;
                                                }
                                                data = item.en;
                                                break;
                                            }
                                            case "ru-RU": {
                                                if (item.ru.title === "") {
                                                    return;
                                                }
                                                data = item.ru;
                                                break;
                                            }
                                            case "en-US": {
                                                if (item.en.title === "") {
                                                    return;
                                                }
                                                data = item.en;
                                                break;
                                            }
                                            case "gr": {
                                                if (item.gr.title === "") {
                                                    return;
                                                }
                                                data = item.gr
                                                break;
                                            }
                                            default: {
                                                break;
                                            }

                                        }
                                        if (item.gr.title !== "") {
                                            return (
                                                <div className="col-12 col-md-4 p-0 pr-4 mb-4 mb-md-5">
                                                    <h4>{data.title}</h4>
                                                    <p className="mb-0">{data.description}</p>
                                                </div>
                                            )
                                        }
                                    })
                                }


                            </div>
                            <h2>{t("mainPage.ourServices.subTitle")}</h2>
                        </div>
                        {
                            this.state.width > 768 ?   <img className="d-block"
                                                            src={'../static/main-our-services.jpg'} alt=""/>:null
                        }

                    </div>

                    <div className="our-partners d-flex flex-column align-items-center">
                        <h2>{t("mainPage.ourPartners.subTitle")}</h2>
                        <h3>{t("mainPage.ourPartners.title")}</h3>
                        <div className="row mx-0 w-100 justify-content-md-center align-items-center">
                            {
                                this.state.partners.map((item) => {
                                    return (
                                        <a className="image-wrap" href={item.ru.title} target="_blank">
                                            <img src={item.image} alt=""/>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div id="works" style={{paddingTop: "-10rem"}}></div>
                    <div className="our-works d-flex flex-column">
                        <h2>{t("mainPage.ourWorks.subTitle")}</h2>
                        <div className="d-flex flex-md-row w-100 mx-0 justify-content-between align-items-center">
                            <div className="col-md-3 d-md-block d-none"></div>
                            <h3 className="col-md-6 col-9 text-md-center ">{t("mainPage.ourWorks.title")}</h3>

                            <a className="col-md-3 d-md-block d-none text-right"
                               href="/plist">{t("mainPage.ourWorks.seeMore")}→</a>
                            <a className="d-md-none mr-3" href="/plist">{t("mainPage.ourWorks.seeMoreMobile")}→</a>
                        </div>
                        <div className="row d-flex justify-content-between mx-0 mt-4">
                            {this.state.projects.map(item => {
                                let data;
                                switch (lng) {
                                    case "ru": {
                                        if (item.ru.title === "") {
                                            return;
                                        }
                                        data = item.ru;
                                        break;
                                    }
                                    case "en": {
                                        if (item.en.title === "") {
                                            return;
                                        }
                                        data = item.en;
                                        break;
                                    }
                                    case "ru-RU": {
                                        if (item.ru.title === "") {
                                            return;
                                        }
                                        data = item.ru;
                                        break;
                                    }
                                    case "en-US": {
                                        if (item.en.title === "") {
                                            return;
                                        }
                                        data = item.en;
                                        break;
                                    }
                                    case "gr": {
                                        if (item.gr.title === "") {
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
                                        <ProjectCard image={item.images[0]} id={item.id} item={data}/>
                                    </div>
                                )
                            })}


                        </div>
                    </div>

                    <div id="catalog" style={{paddingTop: "-10rem"}}></div>
                    <div className="our-catalog d-flex flex-column">
                        <h2>{t("mainPage.ourCatalog.subTitle")}</h2>
                        <div className="desktop-view d-md-flex d-none flex-column mb-5">
                            <h3 className="text-center">{t("mainPage.ourCatalog.title")}</h3>
                            <div className="row align-items-end">
                                <div className="col-md-3"></div>
                                <div className="description col-md-6 text-center">
                                    {t("mainPage.ourCatalog.description")}
                                </div>
                                <a href="/catalog"
                                   className="col-md-3 text-right">{t("mainPage.ourCatalog.seeMore")}→</a>
                            </div>
                        </div>
                        <div className="mobile-view d-flex my-3 d-md-none align-items-center justify-content-between">
                            <h3 className="mb-0">Каталог</h3>
                            <a href="/catalog" className="text-right mb-0">{t("mainPage.ourCatalog.seeMoreMobile")}→</a>
                        </div>
                        <div className="row">
                            {this.state.catalog.map(item => {

                                let data;
                                switch (this.props.lng) {
                                    case "ru": {
                                        if (item.ru.title === "") {
                                            return;
                                        }
                                        data = item.ru;
                                        break;
                                    }
                                    case "en": {
                                        if (item.en.title === "") {
                                            return;
                                        }
                                        data = item.en;
                                        break;
                                    }
                                    case "ru-RU": {
                                        if (item.ru.title === "") {
                                            return;
                                        }
                                        data = item.ru;
                                        break;
                                    }
                                    case "en-US": {
                                        if (item.en.title === "") {
                                            return;
                                        }
                                        data = item.en;
                                        break;
                                    }
                                    case "gr": {
                                        if (item.gr.title === "") {
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
                                        <CatalogItem image={item.image} onPress={this.createOrder} id={item.id}
                                                     item={data} date={item.date}/>
                                    </div>
                                )
                            })}


                        </div>
                    </div>

                    <div id="team" style={{paddingTop: "-10rem"}}></div>
                    <div className="our-team d-flex flex-column align-items-center">
                        <h2>{t("mainPage.ourTeam.subTitle")}</h2>
                        <img className="logo-image mb-3" src={'/static/logo-mobile.png'}
                             alt=""/>
                        <h3>{t("mainPage.ourTeam.title")}</h3>
                        <div className="row mx-0 w-100 mt-5">
                            {
                                this.state.team.map((item) => {
                                    let data;
                                    switch (lng) {
                                        case "ru": {
                                            if (item.ru.title === "") {
                                                return;
                                            }
                                            data = item.ru;
                                            break;
                                        }
                                        case "en": {
                                            if (item.en.title === "") {
                                                return;
                                            }
                                            data = item.en;
                                            break;
                                        }
                                        case "ru-RU": {
                                            if (item.en.title === "") {
                                                return;
                                            }
                                            data = item.ru;
                                            break;
                                        }
                                        case "en-US": {
                                            if (item.ru.title === "") {
                                                return;
                                            }
                                            data = item.en;
                                            break;
                                        }
                                        case "gr": {
                                            if (item.gr.title === "") {
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

                                        <div
                                            className="col-12 col-md-3 align-items-center d-flex flex-column mb-5 mb-md-4">
                                            <img src={item.image} alt=""/>
                                            <h4>{data.name}</h4>
                                            <p>{data.workType}</p>
                                            <a href={"tel:" + data.phone}>{data.phone}</a>
                                            <a href={"mailto:" + data.email}>{data.email}</a>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>

                    <div id="contact" style={{paddingTop: "-10rem"}}></div>
                    <div className="contact-us d-flex flex-column">
                        <h2>{t("mainPage.ourContacts.subTitle")}</h2>
                        <h3>{t("mainPage.ourContacts.title")}</h3>
                        <div className="row mx-0 mt-2 mt-md-5">
                            <div className="col-md-4 col-12 mb-3 d-flex flex-column">
                                <p>{t("mainPage.ourContacts.description")}</p>
                                <form className="d-flex flex-column" action="">
                                    <input className="mb-4" type="text" maxLength="32"
                                           placeholder={t("mainPage.ourContacts.placeholderName")}/>
                                    <input className="mb-4" type="phone"
                                           placeholder={t("mainPage.ourContacts.placeholderPhone")}/>
                                    <button
                                        className="text-md-center text-left">{t("mainPage.ourContacts.button")}</button>
                                </form>
                            </div>
                            <div className="col-md-1 col-12"></div>
                            <div className="col-md-5 col-12">
                                <p><span><a href="mailto:contacts@press.kz">contacts@press.kz</a></span>, <span><a
                                    href="tel:+77751534575">+ 7 (775) 153-45-75</a></span>
                                    <br/> {t("mainPage.ourContacts.address")}</p>
                                <Map width={"100%"} height={"20rem"} borderRadius={3} id="map"
                                     onAPIAvailable={function () {
                                         console.log('API loaded');
                                     }} center={[43.2368614, 76.9154467]} zoom={16}>
                                    <Marker lat={43.2368614} lon={76.9154467}/>
                                </Map>
                            </div>
                            <div className="col-md-2 col-12"></div>
                        </div>
                    </div>
                </div>
                <Footer bgColor="#000"/>
            </div>
        );
    }
}

export default withI18next(["translation"])(Index)
