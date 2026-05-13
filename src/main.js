import "tailwindcss";

const maincontainer = document.querySelector('#main-container');

const containers =[
    {
        name: "Hero Sections",
        type: "marketing UI",
        image: "/hero-image.jpg"
    },
        {
        name: "Feature Sections",
        type: "marketing UI",
        image: "/feature-image.webp"
    },
        {
        name: "Headers",
        type: "marketing UI",
        image: "/header-image.png"
    },
        {
        name: "Footer Sections",
        type: "E-commerce UI",
        image: "/footer-image.png"
    },

        {
        name: "Project Portfolio",
        type: "marketing UI",
        image: "/project-image.png"
    },
        {
        name: "Login Forms",
        type: "marketing UI",
        image: "/login-image.jpg"
    },
        {
        name: "FAQ Sections",
        type: "application UI",
        image: "/faq-image.png"
    }
]

//   showing all type of containers

function showallcontainers(){
     containers.forEach((data)=>{
        
        const newdiv = document.createElement('div');
    newdiv.className ="min-w-100 h-80 rounded-lg  flex flex-col border border-glassy-box hover:cursor-pointer hover:shadow-lg hover:shadow-white/20";
    newdiv.innerHTML =`   

                    <div class="bg-glassy-box w-full h-20 px-5 rounded-t-lg flex items-center justify-between ">
                        <div class="text-xl">${data.name}</div>
                        <div class="bg-mint text-sm text-green-900 px-2 py-1 rounded-md">${data.type}</div>
                    </div>
                    <div class="bg-midnight w-full h-full rounded-b-lg ">
                      <div class =" bg-center bg-cover bg-no-repeat h-full rounded-b-lg " style="background-image:url('${data.image}')"></div>
                    </div>
                
`;
      newdiv.addEventListener('click',()=>{
       
            localStorage.setItem("component-type",data.name);
            window.location.href='/component/';
      })
         maincontainer.appendChild(newdiv);
 });
}

// showing selected type of containers

function showcontainers(category){

    containers.forEach((data)=>{
        
        const newdiv = document.createElement('div');
    newdiv.className ="min-w-100 h-80 rounded-lg  flex flex-col border border-glassy-box hover:cursor-pointer";
    newdiv.innerHTML =`   

                    <div class="bg-glassy-box w-full h-20 px-5 rounded-t-lg flex items-center justify-between ">
                        <div class="text-xl">${data.name}</div>
                        <div class="bg-mint text-sm text-green-900 px-2 py-1 rounded-md">${data.type}</div>
                    </div>
                    <div class="bg-midnight w-full h-full rounded-b-lg ">
                      <div class =" bg-center bg-cover bg-no-repeat h-full rounded-b-lg " style="background-image:url('${data.image}')"></div>
                    </div>
                
`;
      if(category==data.type) maincontainer.appendChild(newdiv);

      
      
   
});

}

//  listening change form select category

const categorybox=document.querySelector('#select-category');

categorybox.addEventListener('change',(event)=>{
    const category=event.target.value;
    maincontainer.innerHTML=``;

    if(category=="all category") showallcontainers();
     else  showcontainers(category);
});

showallcontainers();