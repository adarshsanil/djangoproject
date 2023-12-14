document.getElementById('asd').addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("sass");
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let age=document.getElementById('age').value;
    let standerd=document.getElementById('standerd').value;
    let email=document.getElementById('email').value;
    let pwd=document.getElementById('pwd').value;
    let cpwd=document.getElementById('cpwd').value;


    if(pwd!=cpwd)
    {
        alert("password not match")
    }
    else{
        if(!(fname&&lname&&age&&standerd&&email&&mobilenumber&&address))
        {
            alert("field are empty")
        }
        else{
            alert('sussesfully logedin')
        }
    }
    

})