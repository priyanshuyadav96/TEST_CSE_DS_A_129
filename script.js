function validate(){
    let uname=document.getElementById("uname").value;
    let pass=document.getElementById("pass").value;
    let res=document.getElementById("res");

    if(uname=="Priyanshu" && pass=="2200321540129"){
        document.querySelector("form").action="page2.html";
    }
    else{
        alert("Wrong id or Password");
    }
}
async function fetch() {
    try {
        let response=await fetch("https://api.github.com/users?per_page=10");
        let data=await response.json();

        data.forEach(element => {
            let p=document.createElement("p");
            p.textContent=element.login;

            let top=document.getElementById("top");
            top.appendChild(p)
        });
    } catch (error) {
        console.log(error);
    }
}
fetch()