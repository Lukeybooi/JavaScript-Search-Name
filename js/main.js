const LIST = ["Kristle Mangini",
    "Selena Bookman",
    "Lachelle Achorn",
    "Vernetta Mcguirk",
    "Wilson Goddard",
    "Theresa Church",
    "Deetta Capello",
    "Virgie Hoisington",
    "Phoebe Muniz",
    "Alfredo Mcadoo",
    "Myrtis Resh",
    "Jacinto Millsaps",
    "Melodee Ettinger",
    "Gearldine Viers",
    "Rosalinda Marr",
    "Myra Rutt",
    "Ronda Mcnemar",
    "Vonda Bertelsen",
    "Carlos Principe",
    "Verline Tarpey",
    "Brandee Castagna",
    "Scot Watters",
    "Joaquin Schoenborn",
    "Sharie Freeman",
    "Gregg Gaeth",
    "Bernetta Catoe",
    "Trisha Demasi",
    "Loyd Duhart",
    "Lecia Husman",
    "Joannie Suess",
    "Sherley Flock",
    "Mohammad Weidman",
    "Greta Sitzman",
    "Chuck Spina",
    "Bok Nicoll",
    "Virginia Lockley",
    "Annmarie Navarette",
    "Usha Bundren",
    "Bernardina Pye",
    "Margy Lutterman",
    "Evon Beaston",
    "Margareta Villafuerte",
    "Maggie Barton",
    "Harley Mccready",
    "Wynell Grippo",
    "Edyth Kroh",
    "Elouise Valerius",
    "Cristen Gushiken",
    "Benedict Seabaugh",
    "Gwyn Jiminez"
];
const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let pos = true;

document.getElementsByTagName('button')[0].onclick = function () {
    let display = document.getElementById("message");

    if (pos) {
        pos = false;
        this.innerHTML = "Starts With &raquo;";
        this.className = "btn btn-success btn-lg";
        display.innerHTML = "Index Off";
        display.className = "display-4 text-center text-primary";
    } else {
        pos = true;
        this.innerHTML = "Index Off &raquo;";
        this.className = "tn btn-primary btn-lg";
        display.innerHTML = "Starts With";
        display.className = "display-4 text-center text-success";
    }
    render();
}

window.onload = function () {
    displayInit();
    popName();
}

document.getElementById('search_Text').addEventListener('input', function () {
    render();
});

function displayInit() {
    var init = document.getElementById('list_section');
    init.innerHTML = '';

    for (var i = 0; i < LETTERS.length; i++) {
        init.innerHTML += `<li class="list-group-item text-center font-weight-bold text-uppercase bg-light" id="letter_${LETTERS[i]}">${LETTERS[i]}</li>`;
    }
}

function render() {
    let textInput = document.getElementById('search_Text').value;

    displayInit();
    if (textInput == null || textInput == "") {
        popName();
    } else {
        switch (pos) {
            case false:
                searchNameIndex(textInput);
                break;
            case true:
                searchNameStartWith(textInput);
                break;
        }
    }
}

function popName() {
    LIST.sort();

    for (var i = 0; i < LIST.length; i++) {
        for (var j = 0; j < LETTERS.length; j++) {
            if ((LIST[i].toLocaleUpperCase()).startsWith(LETTERS[j].toUpperCase())) {
                var x = document.createElement("div");
                x.className = "list-group-item text-center font-weight-light text-capitalize";
                x.innerHTML = LIST[i];
                document.getElementById(`letter_${LETTERS[j]}`).appendChild(x);
                break;
            }
        }
    }
}

function searchNameStartWith(searchValue) {
    searchValue = searchValue.toUpperCase();
    LIST.sort();

    for (var i = 0; i < LIST.length; i++) {
        for (var j = 0; j < LETTERS.length; j++) {
            if (searchValue.startsWith(LETTERS[j].toUpperCase())) {
                if ((LIST[i].toLocaleUpperCase()).startsWith(searchValue)) {
                    var x = document.createElement("div");
                    x.className = "list-group-item text-center font-weight-light text-capitalize";
                    x.innerHTML = LIST[i];
                    document.getElementById(`letter_${LETTERS[j]}`).appendChild(x);
                    break;
                }
            }
        }
    }
}

function searchNameIndex(searchValue) {
    searchValue = searchValue.toUpperCase();
    LIST.sort();

    for (var i = 0; i < LIST.length; i++) {
        for (var j = 0; j < LETTERS.length; j++) {
            if (LIST[i].startsWith(LETTERS[j].toUpperCase())) {
                if ((LIST[i].toLocaleUpperCase()).indexOf(searchValue) > -1) {
                    var x = document.createElement("div");
                    x.className = "list-group-item text-center font-weight-light text-capitalize";
                    x.innerHTML = LIST[i];
                    document.getElementById(`letter_${LETTERS[j]}`).appendChild(x);
                    break;
                }
            }
        }
    }
}