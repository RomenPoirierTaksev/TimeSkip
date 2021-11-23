chrome.runtime.onMessage.addListener((msg,sender,response) =>{
    if(msg.name == "runScrape"){
        scrapeComments();
    }
});

function scrapeComments(){

    var commentList = document.querySelector("#allCommentsList");
    if(commentList != null){
        var comments = commentList.getElementsByTagName("li");

        var moreComments = document.querySelector(".more_comments");

        moreComments.click();
        moreComments.click();

        for (let i = 0; i < comments.length; i++) {
            if(comments[i].className.toString().search("reply") == -1 && comments[i].className != "removed"){
                var list = comments[i].querySelector(".guestbook-list");
                if(list !== null){
                    var comment = list.querySelector(".guestbook-body").textContent;
                    var name = list.querySelector(".guestbook-name a").textContent;
                    const digit = /\d:\d\d/;
                    y = digit.exec(comment.toString());  
                    if(y !== null){
                        time = y + " " + name;
                        chrome.runtime.sendMessage({name: "time got", data: time});
                        }
                    
                    }
                }
            }
        }
    
}


