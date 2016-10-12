/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var previousPath=new Array(2);
function path(link){
  this.link=link;
  this.getLink=function()
  {
    return this.link;
  };
};
function listPath(myPath) {

    console.log("Path passed is ",myPath);
    previousPath[0]=previousPath[1];

    previousPath[1]=myPath;
    window.resolveLocalFileSystemURL(myPath, function(dirEntry) {
        var directoryReader = dirEntry.createReader();
        directoryReader.readEntries(onSuccessCallback, onFailCallback);
    });
};
function getFilepath(thefilepath){
        alert(thefilepath);
}


function onSuccessCallback(entries) {
    console.log("hi");
    var main=document.getElementById("main");
    main.innerHTML="";
    var list= document.createElement("ul");
    list.style.listStyle="none";
    console.log(entries.length+" Is the entries length");
    var paths=new Array(entries.length);
    var li = new Array(entries.length);
    for (var i = 0; i < entries.length; i++)
    {

        var row = entries[i];
        paths[i]=new path(row.nativeURL);

        if (row.isDirectory)
        {

            li[i]=document.createElement("li");
            li[i].id=i;


            //chkbox
            var chkBoxWrapper=document.createElement("span");
            var chkBox = document.createElement("input");
            chkBox.type="checkbox";
            chkBox.onchange=function()
            {
              console.log("sdS");
              var liId=this.parentElement.parentElement.id;

              if(this.checked)
                li[liId].style.backgroundColor="rgb(42, 210, 255)";
              else
                li[liId].style.backgroundColor="transparent";

            }

            chkBoxWrapper.appendChild(chkBox);
            chkBoxWrapper.onclick=function(e)
            {
              e.cancelBubble=true;
            }
            li[i].appendChild(chkBoxWrapper);

            var img = document.createElement("img");
            img.src="icons/folder.png";
            img.style.height="10vh;";
            img.style.width="10vw";
            li[i].appendChild(img);
            li[i].style.height = "10vh";
            li[i].style.width= "80vw";
          
            li[i].appendChild(document.createTextNode(" "+row.name));
            li[i].onclick=function()
            {
              listPath(paths[this.id].link);
            }
            list.appendChild(li[i]);
        }

       else
        {

            li[i] = document.createElement("li");
            li[i].id=i;
            var img = document.createElement("img");
            img.style.height="8vh";
            img.style.width="10vw";
            if(row.name.search(".mp3")!=-1)
            {
              img.src="icons/mp3.png";

            }
            else
             if(row.name.search(".png")||row.name.search(".jpeg")||row.name.search(".jpg")!=-1)
            {
              img.src="icons/jpeg.png";
            }
            else
            {
              img.src="icons/file.png";
            }


            //chkbox
            var chkBoxWrapper=document.createElement("span");
            var chkBox = document.createElement("input");
            chkBox.type="checkbox";
            chkBox.onchange=function()
            {
              console.log("sdS");
              var liId=this.parentElement.parentElement.id;
              console.log(liId);
              if(this.checked)
                li[liId].style.backgroundColor="rgb(42, 210, 255)";
              else
                li[liId].style.backgroundColor="transparent";

            }

            chkBoxWrapper.appendChild(chkBox);
            chkBoxWrapper.onclick=function(e)
            {
              e.cancelBubble=true;
            }
            li[i].appendChild(chkBoxWrapper);

            //end checkbox
            li[i].appendChild(img);

            li[i].appendChild(document.createTextNode(row.name));

            list.appendChild(li[i]);

        }


    }
    if (previousPath[0]!=undefined)
     {
       var previous=document.createElement("li");
       previous.appendChild(document.createTextNode("Back"));
       previous.onclick=function()
       {
         listPath(previousPath[0]);
       }

        list.appendChild(previous);
     }

    console.log(list,previousPath[0]);
    list.style.width="10px";
    document.getElementById("main").appendChild(list);

}

function onFailCallback() {

}





//
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.body.style.width="100vw";

        var myPath = cordova.file.externalRootDirectory; // We can use the default externalRootDirectory or use a path : file://my/custom/folder
        previousPath[1]=myPath;
        window.resolveLocalFileSystemURL(myPath, function(dirEntry) {

            var directoryReader = dirEntry.createReader();
            directoryReader.readEntries(onSuccessCallback, onFailCallback);
        });


        //callback function on di click

    }
};

app.initialize();
