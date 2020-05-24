getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/style.css");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const style = document.createElement("style");
            style.textContent = request.responseText;
            document.head.appendChild(style);
        }
    };
    request.send();
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/dynamic.js");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const script = document.createElement("script");
            script.textContent = request.responseText;
            document.body.appendChild(script);
        }
    };
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/dynamic.html");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const container = document.createElement("div");
            container.innerHTML = request.responseText;
            document.body.appendChild(container);
        }
    };
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/dynamic.xml");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            const xmlDom = request.responseXML;
            const warningTxt = xmlDom.getElementsByTagName("warning")[0].textContent;
            alert(`获取xml文件的warning标签内容：${warningTxt}`);
        }
    };
    request.send();
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/dynamic.json");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const json = JSON.parse(request.response);
            alert(`获取json文件的name属性：${json.name}`)
        }
    }
    request.send();
}
let pageIndex = 1;
nextPage.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET",`/page${++pageIndex}`);
    request.onload = () => {
        const pageData = JSON.parse(request.response);
        pageData.forEach((v)=>{
            const li = document.createElement("li");
            li.textContent = v.id;
            xxx.appendChild(li);
        });
    }
    request.send();
}