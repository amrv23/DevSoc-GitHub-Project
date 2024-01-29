var btn = document.getElementById("find")
var entry = document.getElementById("entry_field") // variable to get the textbox
var folw = document.getElementById("follower_val")
var folv = document.getElementById("following_val")
var date = document.getElementById("date_val")
var namev = document.getElementById("name_val")
var comp = document.getElementById("company_val")
var repov = document.getElementById("repo_val")
var logo = document.getElementById("logo")
var disp = document.getElementById("display")

disp.style.visibility = 'hidden'

btn.addEventListener("click",function(event)
{
    var text = entry.value  //this is to get the text inside the text box
    let link = "https://api.github.com/users/" + text
    
    async function finduser(){
        try{
            let res = await fetch(link)
            let data = await res.json()

            console.log(data)
        // console.log(data.name)

            if(data.name != null){
                namev.innerHTML = data.name
            }
            else{namev.innerHTML = "-"}
            folw.innerHTML = data.followers

            if(data.company != null){
                comp.innerHTML = data.company
            }
            else{comp.innerHTML = "-"}
            date.innerHTML = data.created_at.slice(0,10)
            folv.innerHTML = data.following
            repov.innerHTML = data.public_repos
            logo.src = data.avatar_url

            disp.style.visibility = 'visible'
        }
        catch(error){
            logo.src = "C:/Users/User/Desktop/hmm/wd/download.png"
            namev.innerHTML = "-"
            folw.innerHTML = "-"
            comp.innerHTML = "-"
            date.innerHTML = "-"
            folv.innerHTML = "-"
            repov.innerHTML = "-"
            setTimeout(alert("please enter an exisitng username"),250)
            

        }

        
    }
    finduser()

})




