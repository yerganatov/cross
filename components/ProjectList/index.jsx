import React, {Component} from "react";
import "./ProjectList.scss";
import { Header, Footer, ProjectCard,CatalogItem } from "../../common";
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import {db} from "../../api/firebase";
import Preloader from "../../common/Preloader";

class ProjectList extends Component {
    state={
        projects:[],
        loading: true
    }
    async componentDidMount(){
        await this.fetchProjects();
        this.setState({
            loading:false
        })
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
    render(){
        const { t, i18n, lng} = this.props;
        return(

            <div className="ProjectList">
                {this.state.loading && <Preloader></Preloader>}
                <Header bgColor={"#000"}/>
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
                                <div className="col-md-6 col-12 p-3">
                                    <ProjectCard image={item.images[0]} id={item.id} item={data}/>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <Footer bgColor="#000"/>
            </div>
        )
    }
}
export default withI18next("translation")(ProjectList);