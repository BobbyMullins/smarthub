var user = '';
var profileURL = '';
var defaultIconSource = 'https://res.delve.office.com/delve/versionless/silhouette_e0c916b09c07f8f682e78877333d30ce.png';
var script = document.getElementById("SPOAuth");
if(script){
    var authContext = new AuthenticationContext(config);
    user = authContext.getCachedUser().profile.name;
    var tenantName = script.getAttribute("data-tenant").split('.')[0];
    profileURL = 'https://' + tenantName + '-my.sharepoint.com/person.aspx';
    iconSource = 'https://nam.delve.office.com/mt/v3/people/profileimage?userId='+encodeURIComponent(authContext.getCachedUser().profile.upn);+'&size=S';  
}
var ribbon = document.createElement('div');
ribbon.id='ribbon-zone';

var leftAlign =  document.createElement('div');
leftAlign.className = 'leftAlign';

var rightAlign =  document.createElement('div');
rightAlign.className = 'username-wrapper';

var usernameWrapper = document.createElement('a');
usernameWrapper.id = 'userName';
usernameWrapper.target = '_blank';
usernameWrapper.href = profileURL;

var username = document.createElement('div');
username.innerText = user;
var usernameIcon = document.createElement('img');
usernameIcon.src = iconSource;
usernameIcon.addEventListener('error',function(){
    usernameIcon.src = defaultIconSource;
},false);


usernameWrapper.appendChild(username);
usernameWrapper.appendChild(usernameIcon);
rightAlign.appendChild(usernameWrapper);
//ribbon.appendChild(leftAlign);
ribbon.appendChild(rightAlign);

window.addEventListener(
	"DOMContentLoaded", 
	function() {
    var body = document.getElementsByTagName('body')[0];
    body.insertBefore(ribbon, body.firstChild );
}); 