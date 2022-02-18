export default function loadUserType(){

    const menu = document.querySelector('[data-menu]');
    const optionsMenu = menu.querySelectorAll('li')
    const optionsMenuArray = Array.from(optionsMenu);
    const type = localStorage.getItem('rpLogin')

    const options = optionsMenuArray.map((option)=>{
        return option.innerHTML
    })

    if(type === "1"){
        if(options.length !== 6){
            options.push('<a href="admin.html">Painel</a>')
            console.log(options)
        }
    }
    else {
        if(options.length === 6){
            options.pop();
        }
    }

    menu.innerHTML = "<li>" + options.join("</li><li>") + "</li>";
}