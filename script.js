/* Ispis koordinata, event: mousemove */
const coords = document.querySelector(".ispis-koordinata")
coords.addEventListener("mousemove", function(e) {
    let x = e.pageX;
    let y = e.pageY;
    let koordinate = "X koordinata: " + x + " Y koordinata: " + y;
    document.querySelector(".ispis-koordinata p").textContent = koordinate;
});

coords.addEventListener("mouseleave", function(e) {
    document.querySelector(".ispis-koordinata p").textContent = "Pomicanjem misa u ovom prozoru, ispisuju se kordinate"
});

/* Promjena pozadine, event: resize */
const resizable = document.querySelector(".resize")
window.addEventListener("resize", e => {
    if (e.target.innerHeight <= 700) {
        resizable.style.backgroundColor = "#00BFFF"
    }
    else {
        resizable.style.backgroundColor = "#90EE90"
    }
})

/* Promjena boje, event: click */
const buttons = document.querySelectorAll(".promjena-boje button");
buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        let parent = e.target.parentElement;
        let kliknuto = e.target.innerText;
        switch(kliknuto) {
            case 'Zelena':
                parent.style.backgroundColor = "#90EE90"
                break;
            case 'Plava':
                parent.style.backgroundColor = "#00BFFF"
                break;
            case 'Crvena':
                parent.style.backgroundColor = "#FF6347"
                break;
        }
    });
});

/* Alert, event: submit */
const forma = document.querySelector("form");
forma.addEventListener("submit", e => {
    e.preventDefault();
    alert("Forma poslana: " + e.target[0].value)
})

/* Alert, event: change */
const select = document.querySelector("select");
select.addEventListener("change", e => {
    console.log(e.target.value)
})

/* Micanje kockice unutar diva, event: keydown */

const pomicanje = document.querySelector(".pomicanje")
const kocka = document.querySelector(".kocka")
kocka.style.left = "0";
kocka.style.top = "0";
pomicanje.addEventListener("keydown", e => {
    switch (e.key) {   
        case 'ArrowLeft':
            if (parseInt(kocka.style.left) < "1") {
                alert("Ne moze dalje")
                break;
            }
            kocka.style.left = parseInt(kocka.style.left) - 5 + 'px';
            break;
        case 'ArrowRight':
            if (parseInt(kocka.style.left) > "179") {
                alert("Ne moze dalje")     
                break;
            }
            kocka.style.left = parseInt(kocka.style.left) + 5 + 'px';
            break;
        case 'ArrowUp':
            if (parseInt(kocka.style.top) < "1") {
                alert("Ne moze dalje")                
                break;
            }
            kocka.style.top = parseInt(kocka.style.top) - 5 + 'px';
            break;
        case 'ArrowDown':
            if (parseInt(kocka.style.top) > "179") {
                alert("Ne moze dalje")
                break;
            }
            kocka.style.top = parseInt(kocka.style.top) + 5 + "px"
            break;
        default:
            alert("Mozes se micati samo pomocu strelica.");
       }
})