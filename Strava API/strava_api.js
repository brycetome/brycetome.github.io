//https://www.strava.com/oauth/token?client_id=62278&client_secret=7e36f2949021c0dd7620dc0439389d159757cf84&refresh_token=f98a66f1b22369fd1916130e35d70d32f1269c68&grant_type=refresh_token


const auth_link = "https://www.strava.com/oauth/token"
var obj;

function getActivities(res){
    var obj;
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}` //gets access token, but how?
    fetch(activities_link)
        .then(res => console.log(res.json())) 
        .then(data => obj = data)//how do callbacks work?

    return obj;
}



function reAuthorize(){
    var obj;
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            client_id: '62278',
            client_secret: '7e36f2949021c0dd7620dc0439389d159757cf84',
            refresh_token: 'f98a66f1b22369fd1916130e35d70d32f1269c68',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(obj = (res => getActivities(res)))//how do callbacks work?
    return obj
}

obj = reAuthorize()
console.log(obj)

output.innerHTML=obj;

function printout(){
    

}
