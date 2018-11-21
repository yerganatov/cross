import React  from "react";
import "./Catalogitem.scss";
import MainButton from "../MainButton";
import {withI18next} from "../../lib/withI18next";

import {store} from "../../api/firebase"
import moment from "moment";
import "moment/locale/ru";
import "moment/locale/en-gb";
import "moment/locale/de";

const CatalogItem  = props =>{

    const { t, image, item, id, date, onPress } = props;
        return(
            <div  className="CatalogItem w-100 d-flex flex-column ">
                <a href={"/detailedcatalog/"+ id}>
                <img src={image}  alt=""/>
                <h3 className="title text-left">{item.title}</h3>
                <p className="date text-left"><span className="d-none d-md-inline">{t("date")}</span>{moment(date, "YYYY-MM-DD", t("localeLang")).format("DD MMMM YYYY")}</p>
                </a>
                <MainButton onClick={onPress} title={t("formModal.button")}/>
            </div>
        )
};

export default  withI18next('translation')(CatalogItem);