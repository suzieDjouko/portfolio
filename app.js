const sections = document.querySelectorAll ('.section');
const sectBtns =  document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


/*function pageTransition (){
    //Zum Aktivierung der Classe 
    for (let i = 0 ; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click' , function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';

        })
    }
    //section Active Class ; all sections in the Main
    allSections.addEventListener('click', (e) => {
        console.log(e.target);
    })
}pageTransition();*/
function pageTransition (){
    let currentBtn = document.querySelector('.active-btn');
  
    for (let i = 0 ; i < sectBtn.length; i++){
      sectBtn[i].addEventListener('click' , function (event) {
        currentBtn.classList.remove('active-btn'); // retire la classe active du boutton presentement actif 
        event.target.classList.add('active-btn'); // ajout de la classe active  au boutton sur lequel on vient de cliquer (event.target represente  e bouton ) 
        currentBtn = event.target; // mise a jour de la varriable currentBtn
      })
    }
     //section Active Class ; all sections in the Main
    
    allSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        if (id){
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide oder Sections 
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        /*const selectedSection = sections.filter(section => section.id === id)[0];
        sections.forEach(section => section.classList.remove('active'));
        selectedSection.classList.add('active');*/
            
        }
    })
    // Toogle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() => {
        let element = document.body;
        element.classList.toggle('ligth-mode')
    })
  }
pageTransition();  