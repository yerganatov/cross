import React, {Component} from "react";
import "./Header.scss";
import {withI18next} from "../../lib/withI18next";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
        this.navInput = React.createRef();
    }

    hrefClicked = () => {
        const {clicked} = this.state;

        this.navInput.current.checked = !this.navInput.current.checked
        setTimeout(() => {
            this.setState({
                clicked: !clicked
            })
        }, 300)
    }


    navClicked = () => {
        const {clicked} = this.state;
        this.setState({
            clicked: !clicked
        })
    }

    changeLanguage = (lng) => {
        const {t, i18n} = this.props;
        i18n.changeLanguage(lng);
    }

    closeModalChangeLang = (lng) => {
        const {toggleHeader} = this.props;
        this.changeLanguage(lng);
        toggleHeader();
    }

    render() {
        const {t, i18n} = this.props;
        const {bgColor, textColor,toggleHeader,opened} = this.props;
        const {clicked} = this.state;
        return (
            <div style={{backgroundColor: bgColor}} className="Header w-100">
                <a href="/" className="d-md-block d-none">
                    {
                        !opened && bgColor === "#000" ?
                            <img className="logo" src={'../../static/logo-white.png'} alt=""/> :
                            <img className="logo" src={'../../static/logo-black.png'} alt=""/>
                    }
                </a>
                <div className="d-block d-md-none">
                    <a href="/"><img className="logo-mobile" src={'/static/logo-mobile.png'} alt=""/></a>
                </div>

                <input className={opened ? "opened":""} ref={this.navInput} onClick={toggleHeader} id="burger" type="checkbox"/>

                <label htmlFor="burger">
                    <span style={{background: textColor}}></span>
                    <span style={{background: textColor}}></span>
                    <span style={{background: textColor}}></span>
                </label>

                <nav className={opened ? "opened":""}>
                    <div className="nav-menu d-flex flex-md-row flex-column justify-content-md-between w-100">
                        <div className="d-flex flex-md-row flex-column">
                            <div className="d-flex flex-column mr-0 mr-md-5">
                                <a onClick={toggleHeader} style={{color: textColor}}
                                   href="/#services">{t("navigation.services")}</a>
                                <a onClick={toggleHeader} style={{color: textColor}}
                                   href="/#works">{t("navigation.works")}</a>
                                <a onClick={toggleHeader} style={{color: textColor}}
                                   href="/#catalog">{t("navigation.catalogs")}</a>
                            </div>
                            <div className="d-flex flex-column ml-0 ml-md-5">
                                <a onClick={toggleHeader} style={{color: textColor}}
                                   href="/">{t("navigation.influensers")}</a>
                                <a onClick={toggleHeader} style={{color: textColor}}
                                   href="/#team">{t("navigation.team")}</a>
                                <a onClick={toggleHeader} style={{color: textColor}}
                                   href="/#contact">{t("navigation.contacts")}</a>
                            </div>
                        </div>
                        <hr className="d-md-none d-block w-100 mt-5 mt-md-0"/>
                        <div className="contacts-nav d-flex flex-column align-items-md-end">
                            <a style={{color: textColor}}>{t("navigation.address")}</a>
                            <a style={{color: textColor}} href="tel:+77751534575">+ 7 (775) 153-45-75</a>
                            <a style={{color: textColor}} href="mailto:contacts@press.kz">contacts@press.kz</a>
                            <div className="d-flex">
                                <a style={{color: textColor}} onClick={() => this.closeModalChangeLang("ru-RU")}>
                                    RU
                                </a>
                                <span className="mx-2"> / </span>
                                <a style={{color: textColor}} onClick={() => this.closeModalChangeLang("en")}>
                                    EN
                                </a>
                                <span className="mx-2"> / </span>
                                <a style={{color: textColor}} onClick={() => this.closeModalChangeLang("gr")}>
                                    GR
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default withI18next("translation")(Header);