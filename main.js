// Create chrome context menu item
chrome.contextMenus.create({
    id: "@everyone",
    title: "Tag everyone",
    contexts: ['all'],
    onclick: function() {
        inputText();
    }
});

// Get text from dom item matching a class
function getNames() {
    var text = document.getElementsByClassName("_2YPr_ i0jNr selectable-text copyable-text")[0].innerHTML;
    text.split(",");
    return text;
}

// Input text from array into dom item matching a class
function inputText() {
    text = getNames();
    finalText;
    text.forEach(name => {
        finalText += "@" + name + " ";
    });
    document.getElementsByClassName("_13NKt copyable-text selectable-text")[0].innerHTML = finalText;
}