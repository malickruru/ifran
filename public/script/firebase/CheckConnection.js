window.addEventListener("load",()=> {
    if(localStorage.getItem('ifran_isLogin') != "true"){
        $('#toggle_userOption').style.visibility = 'hidden';
    }else{
        $(".EspaceEtudiant").style.visibility = 'hidden';
    }
})
