// Section Progress Bar
let processScroll = () => {
    let docElem = document.documentElement, 
    docBody = document.body,
    scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
    scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
    scrollPercent = scrollTop / scrollBottom * 100 + '%';
    
    // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
    
    document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent); 
};
// End Section
  

function get_href() {
    const current_href = window.location.href;
    document.getElementById('url').innerText = current_href;
};

function copy_href() {
    var copyText = document.getElementById("url").innerText;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
};


// Calling Functions
get_href();
document.addEventListener('scroll', processScroll);
//  End Calling