import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { TxtContent } from "./TxtContent.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"
import { createElementHtml } from "./createElements.js"

export function windowRegistration() {   
    
    const divBg = new Component( 'div', '#sectionHome', { classList: 'sectionFormRegister' })
    const form = new Form( '.sectionFormRegister', { id: 'register' })
    const closeBtn = new Component( 'button', '#register', { type: 'button', id: 'closeBtn' })
    const imgCloseBtn = new Component( 'img', '#closeBtn', { src: '../src/assets/closeBtn.png', alt: 'closeBtn' })

    // close btn
    document.getElementById('closeBtn').addEventListener('click', function () {
        document.querySelector('.sectionFormRegister').remove()
    })
            
    const headerForm = new Component( 'header', '#register', { classList: 'headerFormRegister' })
    const h1Header = new TxtContent( 'h1', 'Cadastre-se', '.headerFormRegister', { classList: 'formTitle' })
    const pHeader = new TxtContent( 'p', 'É rápido e fácil.', '.headerFormRegister', { classList: 'description' })
    const hr = new Component('hr', '#register')
    const sectionRegister = new Component( 'section', '#register', { classList: 'sectionRegister' })
    const divGroupName = new Component( 'div', '.sectionRegister', { classList: 'fullName '})
    
    const inputName = new Input( '.fullName', { 
        type: 'text',
        placeholder: 'Nome',
        id: 'name',
        classList: 'inputFormRegisterName'
    })

    const inputSobrenome = new Input( '.fullName', {
    type: 'text',
    placeholder: 'Sobrenome',
    id: 'sobrename',
    classList: 'inputFormRegisterName'
    })

    const inputEmail = new Input( '.sectionRegister', {
    type: 'email',
    placeholder: 'Email',
    id: 'newEmail',
    classList: 'inputFormRegisterDados'
    })

    const inputPassword = new Input( '.sectionRegister', {
    type: 'password',
    placeholder: 'Senha',
    id: 'newPassword',
    classList: 'inputFormRegisterDados'
    })

    const divDateGner = new Component( 'div', '.sectionRegister', { classList: 'date-gener' })
    const inputDate = new Input( '.date-gener', {
        type: 'date',
        id: 'fullDate'
        })

    const divGener = new Component( 'div', '.date-gener', { classList: 'gener'})
    const divGenerMale = new Component( 'div', '.gener', { classList: 'generGroup', id: 'groupMale' })
    const labelMale = new Label( 'Masculino', '#groupMale', { for: 'male' })

    const inputMale = new Input( '#groupMale', {
        type: 'radio',
        name: 'male',
        value: 'man',
        id: 'male'
    })

    const divGenerFemale = new Component( 'div', '.gener', { classList: 'generGroup', id: 'groupFemale' })
    const labelFemale = new Label( 'Feminino', '#groupFemale', { for: 'female' })

    const inputFemale = new Input( '#groupFemale', {
        type: 'radio',
        name: 'female',
        value: 'woman',
        id: 'female'
    })

    const pTermos = new createElementHtml( 'p', 'termosDescricao', 'Ao clicar em Cadastre-se, você concorda com nossos <a href="">Termos, Política de Privacidade e Política de Cookies</a>. Você poderá receber notificações por SMS e cancelar isso quando quiser.', 'none')
    document.querySelector('.sectionRegister').appendChild(pTermos)
                
    const inputCadastrar = new Input( '.sectionRegister', {
        type: 'button',
        id: 'btnRegister',
        value: 'Cadastre-se',
        classList: 'btnRegister'
    })
}