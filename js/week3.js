function hideElem() {
    document.getElementById("TextPink").style.visibility = "hidden"; 
  }
  
function showElem() {
    document.getElementById("TextPink").style.visibility = "visible"
    document.getElementById("TextPink").style.color = "pink";
    document.getElementById("TextBlack").style.visibility = "visible"
    document.getElementById("TextBlack").style.color = "black";
  }
  
function backgroundChange() {
    document.getElementById("TextPink").style.background = "pink";
    document.getElementById("Textfont").style.color = "black";
  }
  
function backgroundChangeBlack() {
    document.getElementById("TextBlack").style.background = "black";
    document.getElementById("TextfontPink").style.color = "pink";
  }
  
function backgroundChangeWhite() {
    document.getElementById("TextWhite").style.background = "black";
    document.getElementById("TextfontWhite").style.color = "white";
  }
  