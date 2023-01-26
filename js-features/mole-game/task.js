for(let i = 1; i < 10; i++) {
    const hole = document.getElementById(`hole${i}`);
    hole.onclick = function() {
        let dead = document.getElementById("dead");
        let lost = document.getElementById("lost");

        if(hole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

        if(Number(dead.textContent) === 10) {
            dead.textContent = "0";
            lost.textContent = "0";
            alert("Вы победили!");
        } else if(Number(lost.textContent) === 5) {
            dead.textContent = "0";
            lost.textContent = "0";
            alert("Вы проиграли:(");
        }
    }
}

