document.addEventListener('DOMContentLoaded', () => {
   var y = document.getElementById("index_link");
   y.addEventListener("click", openIndex);
});

function openIndex() {
 chrome.tabs.create({active: true, url: "https://www.bhack.com.br"});
}


function wsstatus(){
if ("WebSocket" in window)
  {
     	document.getElementById("m").innerHTML=('WebSockets supported!');
	}
}

function printstatus(msg)
{
	document.getElementById("m").innerHTML += '<br />' + msg;
}

function clearstatus()
{
	document.getElementById("m").innerHTML = '';
}

function WebSocketShell()
{
  if ("WebSocket" in window)
  {
	 var server = "server:port/server"
     var ws = new WebSocket("ws://" + server);
	 printstatus ('Connecting to ' + server);
	 
     ws.onopen = function()
     {
		printstatus ('Connected!')
        ws.send(document.getElementById('in').value);
        printstatus('Command sent.. Waiting for server..')
     };
     ws.onmessage = function (evt) 
     { 
        var received_msg = evt.data;
		clearstatus();
        printstatus(received_msg);
     };
     
	 ws.onclose = function(a)
     { 
		clearstatus();
		printstatus('Connection could not be estabilished. Closing websocket.');
	 };
	 
  }
  else
  {
     printstatus("WebSocket NOT supported by your Browser!");
  }
};
