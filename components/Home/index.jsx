import React, {Component} from "react";
import "./home.scss";
import {Header, Footer, ProjectCard, CatalogItem, Preloader} from "../../common";
import {withNamespaces, withI18n, NamespacesConsumer, Trans} from 'react-i18next';

import {db} from "../../api/firebase";

import OrderModal from "../../common/OrderModal";

class Home extends Component {

}

export default withI18next("translation")(Home);
