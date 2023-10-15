// function addComment() {
//     var name = document.getElementById("name").value;
//     var comment = document.getElementById("comment").value;

//     if (name && comment) {
//         var commentsList = document.getElementById("comments-list");
//         var li = document.createElement("li");
//         li.innerHTML = "<strong>" + name + ":</strong> " + comment;
//         commentsList.appendChild(li);

//         document.getElementById("name").value = "";
//         document.getElementById("comment").value = "";
//     }
// }

function addComment() {
    var comment = document.getElementById("comment").value;

    if (comment) {
        var commentsList = document.getElementById("comments-list");
        var li = document.createElement("li");
        li.innerHTML = ":</strong> " + comment;
        commentsList.appendChild(li);

        
        document.getElementById("comment").value = "";
    }
}