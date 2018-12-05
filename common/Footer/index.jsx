import React,{ Component } from "react";
import "./Footer.scss";
import {withI18next} from "../../lib/withI18next";

class Footer extends Component {
    render() {
    const {bgColor, textColor, contacts = {}} = this.props;
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
                    <div className="d-flex flex-column mx-0 mx-md-5">
                        <a style={{color:textColor}}  href="">{t("navigation.influensers")}</a>
                        <a style={{color:textColor}}  href="/#team">{t("navigation.team")}</a>
                        <a style={{color:textColor}}  href="/#contact">{t("navigation.contacts")}</a>
                    </div>

                </div>
                <div className="d-flex flex-column ml-0 ml-md-5 mt-4 mt-md-0">
                    <a  href={contacts.facebook} target="_blank" rel="noopener noreferrer" className="icon-link" style={{color:textColor}}  ><svg style={{fill:textColor}} viewBox="-110 1 511 511.99996" xmlns="http://www.w3.org/2000/svg"><path d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0"/></svg> Facebook</a>
                    <a  href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="icon-link" style={{color:textColor}} ><svg style={{fill:textColor}} viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0"/><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0"/><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0"/></svg> Instagram</a>
                </div>
            </div>
            <div className="contacts-nav d-flex flex-column align-items-md-end mt-4 mt-md-0 ml-0 ml-md-5">
                <a style={{color: textColor}} href="">{contacts.address}</a>
                <a style={{color: textColor}} href={"tel:" + contacts.phone}>{contacts.phone}</a>
                <a style={{color: textColor}} href={"mailto:"+ contacts.email}>{contacts.email}</a>
            </div>
        </div>
    )
    }
}

export default withI18next("translation")(Footer);