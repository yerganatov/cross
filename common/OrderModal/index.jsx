import React,{Component} from "react";
import "./OrderModal.scss"
import {withI18next} from "../../lib/withI18next";
import * as Email from "emailjs-com";
class OrderModal extends Component{
    state = {
        phone:"",
        name:""
    }

    sendMessage = () => {
        const {closeModal} = this.props;

        if(!this.state.name |this.state.name.length <1){
            alert("Заполните все поля")
        }
        const templateParams = {
            from_name:this.state.name,
            to_name:"fiery.fox92@gmail.com",
            phone_number:this.state.phone
        }

        Email.send("gmail","template_Ea8KvF1V",templateParams,"user_Bpwt8Y7KRuVLrNCWvTvyp").then((response) => {
            this.setState({
                name:"",
                phone:""
            })
            closeModal();
        }
            )
    }
    render(){
        const { t, i18n } = this.props;
        const {closeModal} = this.props;
        return(
            <div className="OrderModal d-flex align-items-center justify-content-center">
                <form  className="modal-view d-flex flex-column px-5 py-3 pb-5">
                    <div className="close-modal w-100" onClick={closeModal}>✕</div>
                    <p>{t("formModal.typeInformation")}</p>
                    <input className="mb-4" type="text" required={true} onChange={(e) => this.setState({name:e.target.value})} value={this.state.name} maxLength="32" placeholder={t("formModal.name")}/>
                    <input className="mb-4" type="tel" pattern="[0-9]*" required={true} onChange={(e) => this.setState({phone:e.target.value})} value={this.state.phone} placeholder={t("formModal.phone")}/>
                    <button onClick={this.sendMessage} className="text-md-center text-left">{t("formModal.button")}</button>
                </form>

            </div>
        )
    }

}

export  default  withI18next('translation')(OrderModal);