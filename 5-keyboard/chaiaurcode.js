console.log("Welcome to Dev's Dev Tools");
const insert = document.getElementById("insert");
window.addEventListener("keypress",(e)=>{
    insert.innerHTML = `
    <div>
    <table>
    <tr>
    <td>
    Key
    </td>
    <td>Key Code</td>
    <td>Code</td>
    </tr>
    <td>${e.key == " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </table>
    </div>`;
});