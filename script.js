// ==============================
// TechVerse 2026 JavaScript
// ==============================

// Register Form Validation

function registerEvent() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value.trim();
    let event = document.getElementById("event").value;
    let message = document.getElementById("message");

    // Check Empty Fields

    if(name=="" || email=="" || department=="" || event==""){

        message.style.color="red";
        message.innerHTML="⚠ Please fill all the required fields.";

        return;
    }

    // Email Validation

    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        message.style.color="red";
        message.innerHTML="⚠ Please enter a valid email address.";

        return;
    }

    // Success Message

    message.style.color="green";

    message.innerHTML=
    "🎉 Registration Successful!<br><br>" +
    "Thank you <b>"+name+
    "</b> for registering for <b>"+event+
    "</b>.<br>See you at TechVerse 2026!";

    // Clear Form

    document.getElementById("registrationForm").reset();

}

// ==============================
// Navbar Shadow on Scroll
// ==============================

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="#08111f";
        header.style.transition="0.4s";

    }

    else{

        header.style.background="#0f172a";

    }

});

// ==============================
// Smooth Fade Animation
// ==============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all 0.8s ease";

    observer.observe(section);

});