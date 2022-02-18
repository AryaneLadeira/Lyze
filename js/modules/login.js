import initModal from './modal.js';
import loadUserType from './loadUserType.js';

export default function verifyIfAlreadyLogged(){
    loadUserType();
    if(!localStorage.getItem("rpLogin")){
        initModal();
        login();
        localStorage.setItem("rpLogin", "");
        return false;
    }
        
    if(localStorage.getItem('rpLogin') === ""){
        initModal();
        login();
        return false;
    }

    changeForLogout();
    return true;
}

const changeForLogout = () => {
    loadUserType();
    const loginMenu = document.querySelector('#loginMenu');
    loginMenu.innerText = 'Sair';
    loginMenu.classList.add('logout');
    loginMenu.addEventListener('click', logout)
}

const logout = () => {
    localStorage.setItem('rpLogin', "");
    loadUserType();
    const loginMenu = document.querySelector('#loginMenu');
    loginMenu.innerText = 'Entrar';
    loginMenu.classList.remove('logout');
    initModal();
    loginMenu.removeEventListener('click', logout);
}

const login = () => {
    const loginBtn = document.querySelector('[data-login]');
    loginBtn.addEventListener('click', verifyLogin)
}

const verifyLogin = async () => {
    const userInput = document.querySelector('#user');
    const passwordInput = document.querySelector('#password');

    const user = userInput.value;
    const password = passwordInput.value;

    const url = `http://localhost:8080/api/login/${user}/${password}`
    await fetch(url)
    .then(r => r.json())
    .then(json => {
        console.log(json)
        console.log(json[0])
        if(json[0]){
            console.log('entrou');
            localStorage.setItem("rpLogin", json[0].id_person)
            document.querySelector('[data-modal="container"]').classList.remove('active');
            changeForLogout();
        }else{
            const error = document.querySelector('[data-modal="error"]');
            error.classList.toggle('active');
        }
    });
}