const ourTeam = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },
];

 




const row = document.querySelector(".row")
function drowCardTeam(){
    let card = "";
    for(let i = 0; i < ourTeam.length; i++){
        let person = ourTeam[i]
        let cardDom = document.createElement("div")
        card = `
            <div class="card text-center border-0 rounded-0">
                <img src="./img/${person.image}"  alt="">
                <div class="pt-2 pb-3">
                    <p class="m-0 text-dark-emphasis fs-5 text">${person.name} ${person.surname}</p>
                    <p class="m-0 text-body-tertiary">${person.role}</p>
                </div>
            </div>
        `
        cardDom.classList.add("col-md-4", "col-sm-6", "pt-4",)
        cardDom.innerHTML += card
        row.appendChild(cardDom)
    }
}
drowCardTeam()