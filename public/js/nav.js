let ul=document.querySelector('.links-container');

auth.onAuthStateChanged((user)=>{
    if(user){
        //user logged in
        ul.innerHTML+=`
        <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
        <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Logout</a></li>
        `

    }else{
        //not logged in
        ul.innerHTML+=`
        <li class="link-item"><a href="/admin" class="link">login</a></li>
        `
    }
})