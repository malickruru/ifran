window.addEventListener("load",()=> {
    if(localStorage.getItem('ifran_isLogin') != "true"){
        $('#toggle_userOption').style.visibility = 'hidden';
        
    }else{
        $(".EspaceEtudiant").style.visibility = 'hidden';
        $("#user-img").setAttribute('src', localStorage.getItem("ifran_userImg"))
    }
})

$("#deconection").addEventListener('click',()=>{
    localStorage.setItem("ifran_isLogin", "false");
    localStorage.removeItem("ifran_user");
    localStorage.removeItem("ifran_userImg");
    window.location.href= 'index.html'
})