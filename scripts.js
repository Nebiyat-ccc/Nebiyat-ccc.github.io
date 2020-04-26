//start with initial text on the page 
//see more button under text 
// when you click see more the full text shows up 
//see less button shows up, see more button dissappear
// when you click see less the text shrinks back to original 
// see more button appears, see less button dissappears 

function seeMore() {
  var paragraph = document.getElementById("font");
  paragraph.innerHTML += "I have always want to volunteer and help people who needs help. most of the times I've seen people also myself giving food and cloth. Although this is a very great thing to do, I personally want to help people by educating. Forinstance there are girls and womens who have't got the education I got. Goode have taught me how to help others based on what we have. I believe food and cloth are the least we humans can do for others. However, education can last forever."

  //make the see more button dissappear
  var seeMoreButton = document.getElementById("see-more");
  seeMoreButton.style.display = "none";

  //see less button appears
  var seeLessButton = document.getElementById("see-less");
  seeLessButton.style.display = "block";
}

function seeLess() {
  var paragraph = document.getElementById("text");
  paragraph.innerHTML = "I have always want to volunteer and help people who needs help. most of the times I've seen people also myself giving food and cloth. Although this is a very great thing to do, I personally want to help people by educating. Forinstance there are girls and womens who have't got the education I got. Goode have taught me how to help others based on what we have. I believe food and cloth are the least we humans can do for others. However, education can last forever";

  var seeMoreButton = document.getElementById("see-more");
  seeMoreButton.style.display = "block";

  var seeLessButton = document.getElementById("see-less");
  seeLessButton.style.display = "none";
}
