/*
 Clicking on the dismiss button for any specific todo note should remove that note from the page
 */

function handleDismissBtnClick(event){
    var getsection = event.currentTarget.parentNode;
    //var getMain = event.currentTarget.parentNode.parentNode;
    var getMain = document.getElementsByTagName("main");
    getMain[0].removeChild(getsection);
}

function handleAddNoteBtnClick(event){
    document.getElementById("todo-input-what").value = "";
    document.getElementById("todo-input-where").value = "";
    document.getElementById("todo-input-when").value = "";
    document.getElementById("todo-input-who").value = "";
    document.getElementById("todo-input-details").value = "";

    var getNoteModal = document.getElementById("add-note-modal");
    getNoteModal.classList.remove("hidden");

    var getBackdrop = document.getElementById("modal-backdrop");
    getBackdrop.classList.remove("hidden");
}

function handleCancelClose(event){
    var getNoteModal = document.getElementById("add-note-modal");
    getNoteModal.classList.add("hidden");
    //getNoteModal.innerHTML = ""; //inner html is empty???
    //getNoteModal.empty();

    var getBackdrop = document.getElementById("modal-backdrop");
    getBackdrop.classList.add("hidden");
}

function handleAccept(event){
    var tagMain = document.getElementsByTagName("main"); // directly get main without using event
    var section = document.createElement("section");

    // "What" field should form the title of within an <h2> element
    var h2 = document.createElement("h2");
    var titleValue = document.getElementById("todo-input-what").value;
    if (titleValue == ""){
        alert("What should not be empty!");
    }
    else //keep the modal open until the user either closes/cancels it or provides a value for "What" field and clicks the accept button.
    //if (titleValue != "")// only when what is not empty the data stores,otherwise same as close or cancel buttons
    {
        var titleTextNode = document.createTextNode(titleValue);
        h2.appendChild(titleTextNode);

        // The values of the "Where", "When", and "Who" fields
        // where
        var pWhere = document.createElement("p");
        var spanWhere = document.createElement("span");
        var whereTextNode = document.createTextNode("where: ");
        var whereValue = document.getElementById("todo-input-where").value;
        var whereValueTextNode = document.createTextNode(whereValue);
        spanWhere.appendChild(whereTextNode);
        spanWhere.classList.add("where");
        pWhere.appendChild(spanWhere);
        pWhere.appendChild(whereValueTextNode);
        pWhere.classList.add("indent-wrapped");

        // when
        var pWhen = document.createElement("p");
        var spanWhen = document.createElement("span");
        var whenTextNode = document.createTextNode("when: ");
        var whenValue = document.getElementById("todo-input-when").value;
        var whenValueTextNode = document.createTextNode(whenValue);
        spanWhen.appendChild(whenTextNode);
        spanWhen.classList.add("when");
        pWhen.appendChild(spanWhen);
        pWhen.appendChild(whenValueTextNode);
        pWhen.classList.add("indent-wrapped");

        // Who
        var pWho = document.createElement("p");
        var spanWho = document.createElement("span");
        var whoTextNode = document.createTextNode("who: ");
        var whoValue = document.getElementById("todo-input-who").value;
        var whoValueTextNode = document.createTextNode(whoValue);
        spanWho.appendChild(whoTextNode);
        spanWho.classList.add("who");
        pWho.appendChild(spanWho);
        pWho.appendChild(whoValueTextNode);
        pWho.classList.add("indent-wrapped");

        // details
        var pDetail = document.createElement("p");
        var detailValue = document.getElementById("todo-input-details").value;
        var detailValueTextNode = document.createTextNode(detailValue);
        pDetail.appendChild(detailValueTextNode);

        var div3W = document.createElement("div");
        div3W.appendChild(pWhere);
        div3W.appendChild(pWhen);
        div3W.appendChild(pWho);
        div3W.appendChild(pDetail);
        div3W.classList.add("todo-body");

        var divBtn = document.createElement("div");
        var crossTextNode = document.createTextNode("×");
        divBtn.appendChild(crossTextNode);
        divBtn.classList.add("dismiss-button");
        divBtn.addEventListener("click",handleDismissBtnClick);

        section.appendChild(h2);
        section.appendChild(div3W);
        section.appendChild(divBtn);
        section.classList.add("todo");
        tagMain[0].appendChild(section);

        var getNoteModal = document.getElementById("add-note-modal");
        getNoteModal.classList.add("hidden");

        var getBackdrop = document.getElementById("modal-backdrop");
        getBackdrop.classList.add("hidden");
    }

}

var addNoteBtn = document.getElementsByClassName('add-note-button-container');  // red add note button
addNoteBtn[0].addEventListener("click",handleAddNoteBtnClick);

var cancelBtn = document.getElementsByClassName('modal-cancel-button');         // modal-cancel-button
cancelBtn[0].addEventListener("click",handleCancelClose);

var closeBtn = document.getElementsByClassName('modal-close-button');         // modal-close-button
closeBtn[0].addEventListener("click",handleCancelClose);

var acceptBtn = document.getElementsByClassName('modal-accept-button');         // modal-close-button
acceptBtn[0].addEventListener("click",handleAccept);

var dismissBtn = document.getElementsByClassName('dismiss-button');              // dismiss-button
for(var i = 0;i < dismissBtn.length;i++)
{
    dismissBtn[i].addEventListener("click",handleDismissBtnClick);
}