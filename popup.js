getCrunchyRollTab();


function getCrunchyRollTab(){
    chrome.tabs.query({currentWindow: true, active:true}, function(tabs){
    let crunchyRollTab;
    
    if(tabs[0].url.includes("https://www.crunchyroll.com/one-piece/episode")){
        //onsole.log("here");
        crunchyRollTab = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {name: "runScrape", data: crunchyRollTab});
    }
});
}

chrome.runtime.onMessage.addListener((msg, sender, res) =>{
    time_list = msg.data.toString().split(" ");
    if(msg.name == "time got"){
        document.getElementById("time").innerHTML = "Time: " + time_list[0];
        document.getElementById("name").innerHTML = "Thank you to " + time_list[1] + "!";
        chrome.tabs.query({currentWindow: true, active:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {name: "sendTime", data: time_list});
        });
    }
});
