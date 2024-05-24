// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

const socials = ["Facebook", "Youtube", "Twitter", "Instagram"]

const windowObj={
    tabs: ["Twitter", 'Facebook', "GitHub", "Gmail", "Instagram", "TikTok", "Amazon"],
    activeTab: 0
}

const newTabs = windowObj.tabs.filter((tab, index)=>{
    let isFound = false
    socials.forEach((social) =>{
        if(social.toLowerCase()=== tab.toLowerCase){
            isFound===true
            return       
        }
    })

    return isFound;
})