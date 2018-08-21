function process()
{
	//document.getElementById("error_display").innerHTML = '<img src="http://localhost/dashboard/movify/ring.gif">';
	document.getElementById("error_display").innerHTML = '<img src="http://localhost:8000/ring.gif">';
	var moviename = document.getElementById("moviename").value;      //fetching value in E-Mail Field
	if(moviename.length==0)                      //if stuid or password is empty
	{
		document.getElementById("error_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>Please Provide a valid Movie Name</div></div>';
	}
	else                                                     //if front-end validation of both fields is OK. Move to backend validation i.e. check if stuid and password are correct or not.
	{
		processCheckDB();
	}
}
var xmlHttp = createXmlHttpRequestObject();                  //Calling the function to vaidate input credentials
function createXmlHttpRequestObject()                        
{
	var xmlHttp;

	if(window.ActiveXObject)                                 //If user is using internet Explorer
	{
		try
		{
			xmlHttp = new ActiveXObject("Microsoft.xmlHttp");
		}
		catch(e)
		{
			xmlHttp=false;
		}
	}
	else                                                   //If user is NOT using internet Explorer but any other browser
	{
		try
		{
			xmlHttp = new XMLHttpRequest();
		}
		catch(e)
		{
			xmlHttp=false;
		}
	}

	if(!xmlHttp)                                           //If Object can not be initialized.
		{
			alert("Can not create object");
		}
	else
	{
		return xmlHttp;
	}
}

function processCheckDB()
{
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4)     						  //If object state is either 0 OR 4 i.e. object not engaged otherwise.
	{	
		var moviename = document.getElementById("moviename").value.split(' ').join('_');
		//var url = "http://localhost/dashboard/movify/moviename.php?moviee="+moviename;  //Sending Data to php script for validation
		var url = "http://localhost:8000/moviename.php?moviee="+moviename;
		xmlHttp.open("GET",url, true);
		xmlHttp.onreadystatechange = handleServerResponseLoginstu;                                             //Preparing to send request
		xmlHttp.send(null); 
	}
	else
	{
		setTimeout('processCheckDB()', 1000);                                     //If reasyState is NOT 0 or 4 then repeat then wait and check again after 1 second.
	}
}


function handleServerResponseLoginstu()
{
	if(xmlHttp.readyState==4||xmlHttp.readyState==0)                              //If object state is either 0 OR 4 i.e. object not engaged otherwise.
	{
		if(xmlHttp.status==200)                                                   //status 200 means everything went OK
		{
			var jobj = JSON.parse(xmlHttp.responseText);
			if(jobj.Response == "False")
			{
				document.getElementById("error_display").innerHTML = '<div><div class="alert alert-danger fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&#215;</a>There is no movie of that name.</div></div>';
			}
			else
			{
				document.getElementById("error_display").innerHTML = ' ';
				document.getElementById("poster").innerHTML = '<img src="'+jobj.Poster+'">';
				document.getElementById("name").innerHTML = jobj.Title;
				document.getElementById("genre").innerHTML = "("+jobj.Genre+")";
				document.getElementById("imdbrating").innerHTML = "IMDB Rating - "+jobj.imdbRating;
				document.getElementById("release").innerHTML = "Release Date - "+jobj.Released;
				document.getElementById("production").innerHTML = "Production - "+jobj.Production;
				document.getElementById("runtime").innerHTML = "Runtime - "+jobj.Runtime;
				document.getElementById("rating").innerHTML = "Rated - "+jobj.Rated;
				document.getElementById("director").innerHTML = "Director - "+jobj.Director;
				document.getElementById("writer").innerHTML = "Writer(s) - "+jobj.Writer;
				document.getElementById("actors").innerHTML = "Actor(s) - "+jobj.Actors;
				document.getElementById("language").innerHTML = "Language(s) - "+jobj.Language;
				document.getElementById("country").innerHTML = "Country - "+jobj.Country;
				document.getElementById("type").innerHTML = "Type - "+jobj.Type;
				if (jobj.Type == "series")
				{
					document.getElementById("seasons").innerHTML = "Total Seasons - "+jobj.totalSeasons;
				}
				else
				{
					document.getElementById("boxoffice").innerHTML = "Box Office Collection - "+jobj.BoxOffice;
				}
				document.getElementById("awards").innerHTML = "Awards - "+jobj.Awards;
				document.getElementById("plot").innerHTML = "Plot- <br> "+jobj.Plot+"<br><br>";
				
				//document.getElementById("display").innerHTML = xmlHttp.responseText -> Title;
			}
		}
		else
		{
			alert("xmlHttp.status!=200");
		}
	}
}
