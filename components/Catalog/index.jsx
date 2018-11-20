import React,{ Component } from "react";
import { Header, Footer,CatalogItem } from "../../common"
import "./Catalog.scss";
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import {db} from "../../api/firebase";
import Preloader from "../../common/Preloader";

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
                {this.state.loading && <Preloader></Preloader>}
                <Header bgColor="#fff" textColor="#000"/>
                <div className="main-article w-100 d-flex flex-column align-items-center">
                    <h2>{t("catalog.subTitle")}</h2>
                    <h3 className="title">{t("catalog.title")}</h3>
                    <p className="description">{this.state.catalog.length} {t("catalog.description")}</p>
                    <div className="row">
                        {this.state.catalog.map(item => {
                            let data;
                            switch (lng) {
                                case "ru": {
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

export default  withNamespaces('translation')(Catalog);