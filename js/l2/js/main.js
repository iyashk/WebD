console.log("Rock-Paper-Scissors");
let is_ready = confirm("lets play Rock-Paper-Scissors?");
if(is_ready){
    let inputOne = prompt("Enter either Rock/Paper/Scissors");
    let name_bool = inputOne ?? "cancelled";
    if (name_bool === inputOne){
        console.log("clicked ok");
        if(inputOne.trim().toLowerCase()==="rock" || inputOne.trim().toLowerCase()==="paper" ||inputOne.trim().toLowerCase()==="scissors"){
            let inputTwo = Math.floor(Math.random()*3 + 1);
            switch (inputTwo){
                case 1:
                    if(inputOne === "rock"){
                        alert("draw")
                        console.log(inputOne,"rock")
                    }
                    else if (inputOne === "Paper"){
                        alert("You Win!!");
                        console.log(inputOne,"rock")
                    }
                    else{
                        alert("Computer wins!!");
                        console.log(inputOne,"rock")
                    }
                    break
                case 2:
                    if(inputOne === "paper"){
                        alert("draw")
                        console.log(inputOne,"paper")
                    }
                    else if (inputOne === "scissors"){
                        alert("You Win!!");
                        console.log(inputOne,"paper")
                    }
                    else{
                        alert("Computer wins!!");
                        console.log(inputOne,"paper")
                    }
                    break
                case 3:
                    if(inputOne === "scissors"){
                        alert("draw")
                        console.log(inputOne,"scissors")
                    }
                    else if (inputOne === "rock"){
                        alert("You Win!!");
                        console.log(inputOne,"scissors")
                    }
                    else{
                        alert("Computer wins!!");
                        console.log(inputOne,"scissors")
                    }
                    break
            }
            
        }
        else{
            console.log("not a valid input");
        }
    }
    else{
        console.log("clicked cancel");
    }
    let replay = confirm("want to play agian");
            replay? location.reload(): alert("ok next time");
}
else{
    alert("maybe sometime later")
}
