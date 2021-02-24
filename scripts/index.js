// item priorities

let high_priority = new Map();
let mid_priority = new Map();
let helpful_priority = new Map();
// divs
var bone = document.getElementById('bone-item');
var oujia = document.getElementById('oujia-item');
var first_ev = document.getElementById('first-ev-item');
var second_ev = document.getElementById('second-ev-item');
var third_ev = document.getElementById('third-ev-item');
var second_ob = document.getElementById('second-ob-item');
var third_ob = document.getElementById('third-ob-item');
var fourth_ob = document.getElementById('fourth-ob-item');

function generate() {
    clear_items();
    bone.innerHTML = getItem(high_priority);
    oujia.innerHTML = getItem(helpful_priority);
    first_ev.innerHTML = getItem(high_priority);
    second_ev.innerHTML = getItem(high_priority);
    third_ev.innerHTML = getItem(helpful_priority);
    second_ob.innerHTML = getItem(high_priority);
    third_ob.innerHTML = getItem(mid_priority);
    fourth_ob.innerHTML = getItem(mid_priority);
    var free_list = [];
    for (let [key, value] of high_priority) {
        if (high_priority[key] == 0) {
            free_list.push(key, ", ");
        }
    }
    for (let [key, value] of mid_priority) {
        if (mid_priority[key] == 0) {
            free_list.push(key, ", ");
        }
    }
    for (let [key, value] of helpful_priority) {
        if (helpful_priority[key] == 0) {
            free_list.push(key);
        }
    }
    document.getElementById('free-items').innerHTML = free_list.join("");
}

function getItem(list) {
    var added = 1;
    while (added == 1) {
        var keys = Array.from(list.keys());
        var rnd = Math.floor(Math.random()*keys.length);
        var chosen = keys[rnd];
        added = list[chosen];
    }
    list[chosen] = 1;
    return chosen;
}

function clear_items() {
    for (let [key, value] of high_priority) {
        high_priority[key] = 0;
    }
    for (let [key, value] of mid_priority) {
        mid_priority[key] = 0;
    }
    for (let [key, value] of helpful_priority) {
        helpful_priority[key] = 0;
    }
}

function copy_text() {
    var item_list = [];
    item_list.push(
        "Bone Found: ",
        document.getElementById("bone-item").textContent,
        "\n",
        "Ouija Found: ",
        document.getElementById("oujia-item").textContent,
        "\n",
        "1st Evidence: ",
        document.getElementById("first-ev-item").textContent,
        "\n\n",
        "2nd Evidence: ",
        document.getElementById("second-ev-item").textContent,
        "\n",
        "3rd Evidence: ",
        document.getElementById("third-ev-item").textContent,
        "\n\n",
        "2nd Objective: ",
        document.getElementById("second-ob-item").textContent,
        "\n",
        "3rd Objective: ",
        document.getElementById("third-ob-item").textContent,
        "\n",
        "4th Objective: ",
        document.getElementById("fourth-ob-item").textContent,
        "\n\n",
        "Free Items: ",
        document.getElementById("free-items").textContent,
    );
    var text_area = document.getElementById("copy-field");
    text_area.innerHTML = item_list.join("");
    text_area.select();
    text_area.setSelectionRange(0,9999);
    document.execCommand("copy");
}

function init() {
    high_priority.set("EMF Sensor", 0);
    high_priority.set("Spirit Box", 0);
    high_priority.set("Ghost Writing Book", 0);
    high_priority.set("Video Camera", 0);
    high_priority.set("Photo Camera", 0);
    high_priority.set("Strong Flashlight", 0);
    mid_priority.set("Lighter", 0);
    mid_priority.set("Head Mounted Camera", 0);
    mid_priority.set("Crucifix", 0);
    mid_priority.set("UV Flashlight", 0);
    mid_priority.set("Motion Sensor", 0);
    mid_priority.set("Smudge Sticks", 0);
    mid_priority.set("Salt", 0);
    helpful_priority.set("Tripod", 0);
    helpful_priority.set("Building Power", 0);
    helpful_priority.set("Sanity Pills", 0);
}