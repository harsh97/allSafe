<!DOCTYPE html>

<link rel="stylesheet" type="text/css" href="loginPage.css"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Baloo+Da" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">


<title>
	AllSafe Login
</title>

<head>
	<link rel="shortcut icon" href="favicon.ico" />
</head>

<body>

	<video playsinline autoplay muted loop id="bgvid">
			<source src= "videoplayback.mp4" type="video/mp4">
	</video>

	<form id="formLog" action="verify.php" method="POST">
		<img src="sync.png" id="logoLog"></img>
		<p id="textLog">LOGIN</p>
		<br/>
    <img src="def.png" id="profPhoto"></img>
    <br/>
		<br/>
		<br/>
		<!--<i class="material-icons">perm_identity</i>-->
		<input type="text" class="inputLog" placeholder="Enter Your Username"
    name="username" required></input>
		<br/>
		<br/>
		<!--<i class="material-icons">vpn_key</i>-->
		<input type="password" class="inputLog" placeholder="Password"
    name="password" required></input>
		<br/>
		<br/>
		<input type="checkbox"><span style="color:white; font-style:italic;">Keep Me Logged In</span></input>
		<button id="butLog">Sign In</button>
		<br/>
		<br/>
		<pre style="color:white; cursor:pointer";>Still scared of losing your data?
		<a href="regPage.html" style="text-decoration:none;color:white"><span style="font-size:18px; font-weight:bold;">Register Now<span></pre></a>
	</form>
</body>

</html>
