import React,{ Component } from "react";
import "./Footer.scss";
import {withI18next} from "../../lib/withI18next";

class Footer extends Component {
    render() {
    const {bgColor, textColor} = this.props;
    const { t, i18n } = this.props;
    return(
        <div style={{backgroundColor:bgColor}} className="Footer d-flex flex-md-row flex-column justify-content-md-between w-100">

            <hr style={{borderColor:textColor === "#000" ? "rgba(0,0,0,0.15)":"#707070"}}/>
            <div className="d-flex flex-md-row flex-column">
                <div className="d-flex mr-0 mr-md-5">
                    {
                        bgColor === "#000" ?
                            <img className="logo" src={'/static/logo-white.png'} alt=""/>:
                            <img className="logo" src={'/static/logo-black.png'} alt=""/>

                    }
                </div>
                <div className="d-flex justify-content-between justify-content-md-start mt-4 mt-md-0">
                    <div className="d-flex flex-column mr-5 ml-0 ml-md-5">
                        <a style={{color:textColor}} href="/#services">{t("navigation.services")}</a>
                        <a style={{color:textColor}}  href="/#works">{t("navigation.works")}</a>
                        <a style={{color:textColor}}  href="/#catalog">{t("navigation.catalogs")}</a>
                    </div>
                    <div className="d-flex flex-column ml-0 ml-md-5">
                        <a style={{color:textColor}}  href="">{t("navigation.influensers")}</a>
                        <a style={{color:textColor}}  href="/#team">{t("navigation.team")}</a>
                        <a style={{color:textColor}}  href="/#contact">{t("navigation.contacts")}</a>
                    </div>
                </div>
            </div>
            <div className="contacts-nav d-flex flex-column align-items-md-end mt-4 mt-md-0">
                <a style={{color:textColor}}  href="">{t("navigation.address")}</a>
                <a style={{color:textColor}}  href="tel:+77751534575">+ 7 (775) 153-45-75</a>
                <a style={{color:textColor}}  href="mailto:contacts@press.kz">contacts@press.kz</a>
            </div>
        </div>
    )
    }
}

export default withI18next("translation")(Footer);