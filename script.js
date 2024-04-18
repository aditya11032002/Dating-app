

let users = [
  {
    profilePic:"https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://plus.unsplash.com/premium_photo-1682095649467-808acb4e19cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Delhi,India",
    name: "aditi",
    age: 21,
    interest:[{
        icon:`<i class="ri-music-fill"></i>`,
        interest:"music",
    }, {
        icon:`<i class="ri-book-read-line"></i>`,
        interest:"Reading",
    },{
        icon:`<i class="ri-paint-fill"></i>`,
        interest:"painting",
    }],
    bio: "Just looking for something super casual, like marriage and children. Nothing serious!",
    isFriend: null,
  },

  {
    profilePic:"https://plus.unsplash.com/premium_photo-1683817397904-d4465651a071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D",
    displayPic:"https://plus.unsplash.com/premium_photo-1683817397897-b0a7ba7f44ae?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
    pendingMessage: 23,
    location: "Harayana,India",
    name: "Shreya",
    age: 26,
    interest:[{
        icon:`<i class="ri-camera-3-line"></i>`,
        interest:"photography",
    }, {
        icon:`<i class="ri-flower-fill"></i>`,
        interest:"Gardening",
    }],
    bio: "Pros and cons of dating me: Pro, you won’t be single. Con: You’ll be dating me",
    isFriend: null,
  },

  {
    profilePic:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:"https://images.unsplash.com/photo-1556755211-76b514756669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    pendingMessage: 10,
    location: "Auckland,Newzealand",
    name: "Mary Lynn",
    age: 22,
    interest:[{
        icon:`<i class="ri-ping-pong-fill"></i>`,
        interest:"table-tennis",
    }, {
        icon:`<i class="ri-book-read-line"></i>`,
        interest:"Reading",
    }],
    bio: " A good Tinder bio starts with standing out from the crowd by making your profile engaging",
    isFriend: null,
  },

  {
    profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1509204417148-31311b983045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 1,
    location: "Kurla, India",
    name: "Rani",
    age: 23,
    interest:[{
        icon:`<i class="ri-music-fill"></i>`,
        interest:"music",
    }, {
        icon:`<i class="ri-book-read-line"></i>`,
        interest:"Reading",
    },{
        icon:`<i class="ri-paint-fill"></i>`,
        interest:"painting",
    }],
    bio: "Make and send me a playlist so I know its real.",
    isFriend: null,
  },
];

function select(elem){
    return document.querySelector(elem);
};

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[curr].profilePic; 
    select(".badge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr].location;
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name .age").textContent = users[curr].age;
    select(".bio p").textContent = users[curr].bio;
    
    let clutter = "";
    users[curr].interest.forEach(function(interest){
        clutter += `<div class="tag1 flex items-center bg-white/30 px-3 py-1 rounded-full gap-3 text-white">
                        ${interest.icon}
                        <h3 class="text-xl tracking-tight capitalize">${interest.interest}</h3>
                    </div>`
    });

    select(".tags").innerHTML = clutter;
}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic; //stack1 display pic
    select(".incomingcard img").src = users[curr+1]?.displayPic; //stack 2 display pic

    setData(curr);


    curr = 2;
}) ();


function imageChange(){
    if(!isAnimating) {
       let tl = gsap.timeline({
        onComplete: function(){
            isAnimating = false; 
            let main = select(".maincard");
            let incoming = select(".incomingcard");

            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");

            main.classList.remove("z-[3]");
            main.classList.remove("z-[2]");
            gsap.set(main, {
                scale:1,
                opacity:1
            })
            if(curr === users.length) curr = 0;
            select(".maincard img").src = users[curr].displayPic;
           
            curr++;
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incomingcard");
        }
        
    });

    tl.to(".maincard", {
        scale:1.1,
        opacity:0,
        ease: Circ,
        duration: .9,
    }, "a")
    .to(".incomingcard", {
        scale:1,
        opacity:1,
        ease: Circ,
        duration: 1,
    }, "a")
 
    }
};



let deny = select(".deny");
let accept = select(".accept");
   
deny.addEventListener("click", function() {
    imageChange();
    setData(curr+1);
    gsap.from(".details .element", {
        y : "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration:1.5
    })
});

accept.addEventListener("click", function() {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y : "100%",
        stagger: .06,
        fade:5,
        ease: Power4.easeInOut,
        duration:1.5
    })
});


(function containerCreater(){
    document.querySelectorAll(".element")
    .forEach(function (element){
       let div = document.createElement("div");
       div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
       console.log(div);
    })
}) ();

