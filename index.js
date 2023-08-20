var projectListObj=[
    {
        name: 'Project One'
    }, {
        name: 'Project Two'
    }
]


function showProjects(listID){  
projectListObj.forEach(function(value, index){
    var template=
    '<div class="project-card">'+
    value.name+
    '<ul>'+
        '<li>Task one</li>'+
        '<li>Task two</li>'+
    '</ul>'+
'</div>';
    document.getElementById(listID).innerHTML+=template; 
})
}


let flag=false;

document.getElementById('toggleMenu').addEventListener('click', function(){
   
    if(flag){
        document.getElementById('menuToggle').style.display='none';
        flag=false;
    }else{
        document.getElementById('menuToggle').style.display='flex';
        flag=true;
    }
});

function removeCards(){
    document.getElementById(listID).innerHTML='';
    console.log("1");
}

var idName=1;
function addBoard(id){
    idName++;
    var listID='projectList_'+idName;
    var boardID='board_'+idName;
    console.log(listID);
   var templateBlock= '<section>'+
   '<div class="input-board" id='+boardID+'>'+id.value+ '<button onclick="removeCards()">Remove card</button></div>'+
   '<div class="project-block" id='+listID+'>'+
   '</div>'+
    '</section>';
    document.getElementById('boardblockList').innerHTML+=templateBlock;
    showProjects(listID);
    document.getElementById('menuList').innerHTML+='<li onclick="loadMenu('+boardID+')">'+id.value+'</li>'
}

function loadMenu(element){
console.log(element.id);
document.getElementById(element.id).style.display='block';
}