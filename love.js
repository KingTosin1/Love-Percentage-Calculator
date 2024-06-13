function calculateLove() {
    var name1 = document.getElementById("boyfriend").value.trim();
    var name2 = document.getElementById("girlfriend").value.trim();
  
    if(name1 === "" || name2 === "") {
      alert("Please enter both names.");
      return;
    }
  
    var lovePercentage = Math.floor(Math.random() * 100);
    lovePercentage=Math.floor(lovePercentage) + 1; 
    var resultText = "The love percentage between " + name1 + " and " + name2 + " is: " + lovePercentage + "%";
    
    document.getElementById("result").innerText = resultText;
  }