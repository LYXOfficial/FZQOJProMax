// ==UserScript==
// @name         Acrylic FZxOJ Pro Max Ultra S Plus X Zift Super Ti XT
// @namespace    https://www.fzoi.top/*
// @version      4.1
// @description  Styles And Some Actions For FZxOJ
// @author       LYX@st20250310
// @match        https://www.fzoi.top/*
// @match        https://qoj.fzoi.top/*
// @match        https://moj.fzoi.top/*
// @match        https://noj.fzoi.top/*
// @icon         https://cdn.fzoi.top/images/favicon.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    var b=document.createElement("link");
    b.rel="stylesheet"
    b.href="https://fonts.loli.net/css2?family=Noto+Serif+SC"
    document.head.appendChild(b)
    var c=document.createElement("link");
    c.rel="stylesheet"
    c.href="https://fonts.loli.net/css2?family=Noto+Sans+SC"
    document.head.appendChild(c)

    var d=document.createElement("style");
    d.innerText=`
    .qojpm-bg{pointer-events:none}
.CodeMirror-activeline-background {
    background: #e8f2ffaa;
}
    .btn-group.float-right .btn{    margin: 5px 2px;
    border-radius: 10px!important;
    box-shadow: 0 0 10px 0 #0003;}
    #details_details_accordion .card-header{border-radius:10px;}
    .card-header{transition: all .1s}
    .page-header{    background-color: #fff8;
    padding: 10px;
    border-radius: 10px;}
    tr{    transition: all .3s;}
.table-responsive{border:none!important;border-radius:10px;}
.card .table-responsive{margin:0!important}
.table-responsive:not(.card .table-responsive){margin-bottom:10px;}
.card-header.bg-info{border-radius: 10px 10px 0 0;}
.page-header{border-bottom:none!important;}
.card-body .table-responsive{box-shadow: none;
    background-color: transparent;}
    .comtbox5{background-image: linear-gradient(to bottom, #0000 0, #0000 100%);
    border: none;
    box-shadow: none;margin-bottom:5px;    padding-bottom: 0;}
    .comtbox5 .table-responsive{margin-bottom:10px!important;padding: 0 10px;}
    .uoj-content>.media{padding: 10px;
    border-radius: 10px;
    background-color: #fffa;}
.card,.uoj-footer,.uoj-content>.nav-tabs,.page-header,.col-sm-9 .nav,.table-responsive:not(.card .table-responsive,.comtbox5 .table-responsive),.mb-2 .nav,.uoj-content>.media,.float-md-left.col-lg-3.col-md-4.col-12
{box-shadow: 0 0 10px #0003;}
iframe body{background-color:#fffc}
    .CodeMirror{background-color:#fffb!important}
    .blog-content-md-editor-toolbar{
background:linear-gradient(to bottom,  rgba(238,238,238,1) 0%,rgba(204,204,204,0.7) 100%)!important}
.list-group-item:first-child{border-radius:10px 10px 0 0;}
.list-group-item:last-child{}
.nav.nav-tabs{width: fit-content;
    background-color: #fff8;
    border-radius: 10px;padding:3px;}
.nav-item{margin-bottom:0!important;}
.nav-link.active{border-radius:10px!important}
p{background:#0000!important;word-break: break-word;}
.navbar-brand{
    background-image: url(https://cdn.fzoi.top/upload/user/st20250310/23071408525829.png);
    background-size: contain;
    background-repeat: no-repeat;
    color: #0000!important;
    opacity:0.8;
}
.navbar-brand{user-select:none;}
.qojpm-bg{
user-select:none;
width:100%;
    z-index:-114514;
    top:0;
    left:0;
    position:fixed;
    object-fit: cover;
    height: 100%;
}
.card-body{border-radius:10px}
.blog-content-md-editor-toolbar{border-radius: 8px 8px 0 0;}
.uoj-username{white-space:nowrap}
.btn:has(.glyphicon-download-alt){display:none}
.nav-tabs{border-bottom:none}
.nav-link.active{
    border-radius: 5px;}
.nav-link{border:none!important}
body::after{
    content:'';
    background: #ffffffbb;
    z-index:-114513;
    top:0;
    left:0;
    width:100%;
    height:100%;
    position:fixed;
}
@media (min-width:992px){
.nav-item:hover:not(.dropdown,.nav-item.active:hover){background-color:rgba(0,0,0,.1);}
.nav-item:not(.dropdown){border-radius: 10px;transition:all .1s linear .1s}
.nav-item.active{
   background-color: #86f8;
       margin: 0 3px;
}.nav-item.active>a{color:white!important}
.dropdown-menu{
    transition: all .2s ease-out;
    opacity: 0;
    display: block!important;
    visibility: hidden;
    transform: translateY(-50px);
}
.dropdown-menu.show{
    visibility: visible!important;
    opacity:1;
transform: translateY(0);
}
}
.btn-outline-primary{color:#ff9900;border-color:#ff9900}
.btn-outline-primary:hover,.custom-control-input:checked~.custom-control-label::before{background-color:#ff9900;border-color:#ff9900}
.custom-control-input:not(:disabled):active~.custom-control-label::before
{background-color:#ff990022;border-color:#ff990033}
.form-control:focus{border-color:#ff990033!important;box-shadow: 0 0 0 0.2rem #ff990033;}
.custom-control-input:focus~.custom-control-label::before{box-shadow:none!important;}
.dropdown-item{transition: all .2s ease-out;}
.dropdown-item:hover{
    background-color:#d4dbe199;
}
.bg-info {
    background-color: #176eb87a!important;
}
.btn-group.float-right{    opacity: 0.8;}
.card.mb-3:has(.card.mb-3>.table-responsive){background-color: transparent!important;
    border: none;}
select.form-control{background-color:#fffa!important}
.uoj-content .nav-link{color:#495057dd;}
.container{
    font-family:"Noto Serif SC";
}
.CodeMirror pre,code,.sh_sourceCode,.CodeMirror,.qojpm-codebar{
    font-family:"Consolas","Noto Sans SC"!important;
}
a:hover{    text-decoration:none}
@media (min-width:1200px){
.float-md-left.col-lg-3.col-md-4.col-12{
    position: fixed;
    max-width:300px;
}
.float-md-left.col-lg-9.col-md-8.col-12{
    margin-left:27%;
}
}
@media(min-width:768px) and (max-width:1199px){
.float-md-left.col-lg-3.col-md-4.col-12{
    max-height:450px;
}
}
.float-md-left.col-lg-3.col-md-4.col-12{
padding-top:10px;
    background-color: #fffa;
    border-radius: 5px;
    margin-bottom: 10px;
}
article img:not(img[alt="avatar"]){
    max-width: 90%;
}
.navbar{
    top: 0;
    position: sticky;
    z-index: 114514;
    background-color: #f8f9facc!important;
    backdrop-filter:blur(10px);
    box-shadow:0.5em 0.5em 0.5em #80808024;
}
.uoj-footer{
    padding-bottom: 5px;
    background: #fffa;
    border-radius: 10px;
    margin-bottom: 10px;
}
.card{border-radius:10px}
.table-responsive{
    background-color:#fffb;
    margin-top:10px;
}
.card.mb-3.mb-md-0{
    margin-top:10px;
}
.media{
margin-bottom:10px;}
.media-object.img-rounded{border-radius:5px;}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active, input, .card-body:not(.col-lg-4 .card-body,.card-collapse .card-body), .card, .list-group-item, textarea, .sh_sourceCode{
    background-color:#fffa!important;
}
pre{
    background-color:#f5f5f5aa;
}
a{
    color:#009fffe6;
}
.btn-primary,.nav-pills .nav-link.active, .nav-pills .show>.nav-link{
    background-color: #ff9900!important;
    border-color: #ff9900!important;
}
.btn-primary:focus{box-shadow:0 0 0 0.2rem #ff990033!important;}
.btn-danger{background-color:red!important}
.page-link{
   border:none!important;
   background-color:transparent!important;
   border-radius:20px;
   color: #009fffe6;
   box-shadow:none!important;
}
.page-item{border:none!important}
.page-item.active .page-link{
    background-color:#009fffe6!important;
    border-color:#009fffe6;
}
.badge-info{
    background-color:#174ab896;
}
table{border-radius:10px}
.row{
    margin-top: 5px;
}
.dropdown-menu.show{
    background: #fffa;
}.dropdown-item.active, .dropdown-item:active{background:#ff52008a}
tr td:first-child{padding-left:1em}
.text-center{transition:all .1s;}
    .qojpm-score{
        left: 8px;
    position: absolute;

    }
    .score0{color: #e30808!important;}
    .score10{color: rgb(230, 138, 0)!important;}
    .score20{color: rgb(230, 161, 0)!important;}
    .score30{color: rgb(230, 184, 0)!important;}
    .score40{color: rgb(230, 207, 0)!important;}
    .score50{color: rgb(230, 230, 0)!important;}
    .score60{color: rgb(207, 230, 0)!important;}
    .score70{color: rgb(184, 230, 0)!important;}
    .score80{color: rgb(161, 230, 0)!important;}
    .score90{color: rgb(138, 230, 0)!important;}
    .qojpm-codebar{    position: absolute;user-select:none;
    top: 10px;
    font-size: 13px;
    right: 10px;}
    pre{    position: relative;}
    .qojpm-language{margin-right:5px}.qojpm-badge{    font-size: 9px;
    font-weight: 400;
    border-radius: 5px;
    color: white;
    background: red;
    padding: 1px 5px;margin-left:5px;}
`;
    document.head.appendChild(d);
    if(document.location.href.indexOf("/problems")!=-1){
        var e=document.createElement("style")
        e.innerText=`tr td:first-child{padding-left: 2rem!important;}.table-success::before{    content: "√";
    position: absolute;
    left: 10px;
    font-family: "Consolas";
    color: green;
    font-size: 20px;
    line-height: 20px;}.table-success{background-color:transparent!important;position:relative;}`
        document.head.appendChild(e)}
    domain=location.href.split("/")[2];
function selectText(element) {
        var text = element;
        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            alert("none");
        }
    }

qojpmCopy=(x)=>{
    selectText(document.querySelectorAll("pre code")[x]);
    document.execCommand("Copy");
    window.getSelection().empty();
    document.querySelectorAll(".qojpm-copy")[x].innerText="√复制成功"
    setTimeout(()=>{document.querySelectorAll(".qojpm-copy")[x].innerText="一键复制"},3000)
}
window.addEventListener("DOMContentLoaded",()=>{
                                                var bg=document.createElement("img")
    bg.className="qojpm-bg"
    bg.src="https://bu.dusays.com/2022/09/17/6324aec701a68.webp"
    document.body.appendChild(bg);})
window.onload=()=>{
    if(document.location.href.indexOf("/problem/")!=-1){
        if(!document.querySelector('input[type="checkbox"]').checked){
            try{document.querySelector('input[type="checkbox"]').click()}
            catch(err){}
        }
    }
    if(document.location.href.indexOf("/user/profile")!=-1&&document.location.href.indexOf(document.querySelector(".uoj-username").innerText)==-1){
        try{
        if(document.querySelector(".list-group-item-text")){
            var xhr=new XMLHttpRequest();
            xhr.open("GET",`https://${domain}/user/profile/`+document.querySelector(".uoj-username").innerText)
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4&&xhr.status==200){
                    var txt=xhr.responseText;
                    var ptt=/<a href="\/problem\/(.*?)" style="display:inline-block; width:4em;">(.*?)<\/a>/g;
                    var q=[];
                    for(var i=1;i<=10000;i++) q[i]=0;
                    while(res=ptt.exec(txt)){
                    q[res[1]]=1}
                    var cn=document.querySelectorAll(".list-group-item-text")[document.querySelectorAll(".list-group-item-text").length-1].childNodes;
                    for(var i=0;i<cn.length;i++){
                        if(!q[cn[i].innerText]) cn[i].style="display:inline-block; width:4em;color:red;";
                    }
                }
            }
            xhr.send();
        }}catch(err){}
    }
    if(document.location.href.indexOf("/user/profile")!=-1){
        try{
            var qp=((document.querySelector(".list-group-item-text").innerText/document.querySelectorAll(".list-group-item-heading")
                        [document.querySelectorAll(".list-group-item-heading").length-1].innerText.split("AC 过的题目：共 ")[1].split(" 道题")[0]).toFixed(2))
            try{
            var qpcf=(((Number(document.querySelector(".list-group-item-text").innerText)+
                        Number(document.querySelectorAll(".list-group-item")[2].innerText.split("\n")[1].split("Rating:")[1].split(")")[0]))/document.querySelectorAll(".list-group-item-heading")
                        [document.querySelectorAll(".list-group-item-heading").length-1].innerText.split("AC 过的题目：共 ")[1].split(" 道题")[0]).toFixed(2))
            document.querySelector(".list-group-item-text").innerHTML+=`<span style="color:gray;font-size:9px">&nbsp   (平均做一道题获得RP: ${qp}, +CF: ${qpcf})<span>`
            }catch(err){document.querySelector(".list-group-item-text").innerHTML+=`<span style="color:gray;font-size:9px">&nbsp   (平均做一道题获得RP: ${qp}）<span>`}
        }catch(err){}
    }
    if(window.location.href.indexOf("submissions")!=-1){
            document.querySelector("#form-search").innerHTML+=`<div class="custom-control custom-switch custom-control-inline" style="
    margin-left: 10px;
" id="onlyshowme">
                    <input type="checkbox" class="custom-control-input" id="all-ranklist">
                    <label class="custom-control-label" for="all-ranklist">只看自己
</label>
                </div>`
            if(document.location.href.indexOf(document.querySelector(".uoj-username").innerText)!=-1)
                document.querySelector("#onlyshowme input").click();
            document.querySelector("#onlyshowme input").onclick=()=>{
    if(document.querySelector("#onlyshowme input").checked){
        var user=document.querySelector(".uoj-username").innerText,pid=document.querySelector("#input-problem_id")?document.querySelector("#input-problem_id").value:null;
        var minscore=document.querySelector("#input-min_score")?document.querySelector("#input-min_score").value:null,maxscore=document.querySelector("#input-max_score")?document.querySelector("#input-max_score").value:null;
        var language=document.querySelector("#input-language")?document.querySelector("#input-language").value:null;
        var link=`https://${domain}/submissions?submitter=`+user;
        if(pid) link+="&problem_id="+pid;
        if(minscore) link+="&min_score="+minscore;
        if(maxscore) link+="&max_score="+maxscore;
        if(language) link+="&language="+language;
        window.location.href=link;
    }
    else{
        var pid=document.querySelector("#input-problem_id")?document.querySelector("#input-problem_id").value:null;
        var minscore=document.querySelector("#input-min_score")?document.querySelector("#input-min_score").value:null,maxscore=document.querySelector("#input-max_score")?document.querySelector("#input-max_score").value:null;
        var language=document.querySelector("#input-language")?document.querySelector("#input-language").value:null;
        var link="https://qoj.fzoi.top/submissions?";
        if(pid) link+="&problem_id="+pid;
        if(minscore) link+="&min_score="+minscore;
        if(maxscore) link+="&max_score="+maxscore;
        if(language) link+="&language="+language;
        window.location.href=link;
    }
};
    }
    if(document.location.href.indexOf("/problems")!=-1){
        var e=document.createElement("style")
        e.innerText=`tr td:first-child{padding-left: 2rem!important;}.table-success::before{    content: "√";
    position: absolute;
    left: 10px;
    font-family: "Consolas";
    color: green;
    font-size: 20px;
    line-height: 20px;}.table-success{background-color:transparent!important;position:relative;}`
        document.body.appendChild(e)
        var nac=document.querySelectorAll(".text-center td:first-child:not(.table-success)");
        var i=0;
        if(nac.length){
            var req=new XMLHttpRequest();
            var t=nac[i].innerText.split("#")[1];
            req.open("GET",`https://${domain}/submissions?problem_id=${t}&submitter=${document.querySelector(".uoj-username").innerText}`,1)
            req.onreadystatechange=()=>{
                if(i+1>=nac.length) return;
                if(req.readyState==4&&req.status==200){
                    if(req.responseText.indexOf(`<td class="text-center" colspan="233">无</td>`)==-1){
                        var g=/<a href="\/submission\/(.*?)" class="uoj-score"(.*?)>(.*?)<\/a>/g;
                        var q=g.exec(req.responseText)[3];
                        if(q!="N/A"){
                        nac[i].innerHTML=`<b><a class="qojpm-score score${Math.floor(q/10)*10}" href="https://${domain}/submissions?problem_id=${t}&submitter=${document.querySelector(".uoj-username").innerText}">${q}</a></b>`+(nac[i].innerHTML==null?"":nac[i].innerHTML)
                    }}
                    i++;
                    t=nac[i].innerText.split("#")[1];
                    req.open("GET",`https://${domain}/submissions?problem_id=${t}&submitter=${document.querySelector(".uoj-username").innerText}`,1)
                    req.send()
                }
            }
            req.send();
        }
        var randomProblem=document.createElement("a")
        randomProblem.className="btn btn-primary btn-sm"
        randomProblem.href="javascript:void(0);"
        randomProblem.innerText="随机创死一道题或被一道题创死"
        randomProblem.style="margin: 5px 0 0 20px;"
        randomProblem.onclick=()=>{
            var req=new XMLHttpRequest();
            var t=Math.floor(Math.random()*2000)+1;
            req.open("GET",`https://${domain}/submissions?problem_id=${t}&submitter=${document.querySelector(".uoj-username").innerText}`,1)
            req.onreadystatechange=()=>{
                if(req.readyState==4&&req.status==200){
                    if(req.responseText.indexOf(`<td class="text-center" colspan="233">无</td>`)!=-1){
                        var r=new XMLHttpRequest();
                        r.open("GET",`https://${domain}/problem/`+t,false);
                        r.send(null);
                        if(r.readyState==4&&r.status==200){
                            window.location.href=`https://${domain}/problem/`+t;
                            return;
                        }
                    }
                    i++;
                    t=Math.floor(Math.random()*2000)+1;
                    req.open("GET",`https://${domain}/submissions?problem_id=${t}&submitter=${document.querySelector(".uoj-username").innerText}`,1)
                    req.send()
                }
            }
            req.send();
        }
        document.querySelector(".col-md-3").appendChild(randomProblem)
    }
    if(document.location.href.indexOf("/user/profile/")!=-1)
        document.querySelector(".uoj-footer").style="transform: translateY(150px);";
    setTimeout(()=>{
    var codelist=document.querySelectorAll("pre");
    for(var i=0;i<codelist.length;i++){
        var lx=document.querySelectorAll("pre>code")[i].className.split("sh_");
        codelist[i].innerHTML=`<div class="qojpm-codebar"><span class="qojpm-language">${lx.length==1?"TEXT":lx[1].toUpperCase()}</span><a class="qojpm-copy" href="javascript:qojpmCopy(${i})">一键复制</a></div>`+codelist[i].innerHTML;
    }},100)
    var namelist=document.querySelectorAll(".uoj-username,.uoj-honor");
    var reqq=new XMLHttpRequest();
    reqq.open("GET","https://qojbadge.yisous.xyz/badge.json")
    reqq.onreadystatechange=()=>{
        if(reqq.status==200&&reqq.readyState==4){
            var nm=JSON.parse(reqq.responseText);

    for(var i=0;i<namelist.length;i++){
      if(namelist[i].innerText=="林子博") namelist[i].style.color="#996300";
        if(nm[namelist[i].innerText]){
          var bdg=document.createElement("span")
          bdg.className="qojpm-badge"
          bdg.innerText=nm[namelist[i].innerText]["name"];
          bdg.style.background=nm[namelist[i].innerText]["color"]=="auto"?namelist[i].style.color:nm[namelist[i].innerText]["color"];
          namelist[i].appendChild(bdg)
        }
    }}}
    reqq.send()
}
})();
