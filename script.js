window.addEventListener("DOMContentLoaded", function(){
    
    //JSONファイルの読み込み
    let exportJson = document.getElementById("exportJson");
    let table = document.createElement("table");
    table.innerHTML = "<thead><tr><th>打順</th><th>ポジション</th><th>選手</th></tr></thead>";
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    fetch("tigers.json", {
        method: "GET",
    }).then(response => response.json())
    .then(json => {
        for (let key in json) {
            let tr = document.createElement("tr");
            tr.innerHTML = "<td>" + json[key]["打順"] + "</td><td>" + json[key]["ポジション"] + "</td><td>" + json[key]["選手"] + "</td>";
            tbody.appendChild(tr);
            table.appendChild(tbody);
            exportJson.appendChild(table);
        }
    });

    //Markdownファイルの読み込み
    let exportMarkdown = document.getElementById("exportMarkDown");
    fetch("tigers.md", {
        method: "GET",
    }).then(response => response.text())
    .then(text => {
        exportMarkdown.innerHTML = marked.parse(text);
    });

});
