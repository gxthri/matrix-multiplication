function addRc(r1,c1,r2,c2){
    const tb=document.createElement("table");
    tb.setAttribute("id","table1");
    const tb2=document.createElement("table");
    tb2.setAttribute("id","table2");
    document.getElementById("child1").appendChild(tb).setAttribute("class","table");
    document.getElementById("child2").appendChild(tb2).setAttribute("class","table");
    for(let i=0;i<r1;i++){
        const tr=document.createElement("tr");
        document.getElementById("table1").appendChild(tr).setAttribute("class","td");
        for(let y=0;y<c1;y++){
            const td=document.createElement("td");
            tr.appendChild(td).setAttribute("class","td");
            const input=document.createElement("input");
            input.setAttribute("type","number");
            input.setAttribute("id",`y-${i}${y}`);
            td.appendChild(input).setAttribute("class","inp");
    }
    }
    for(let i=0;i<r2;i++){
        const tr2=document.createElement("tr");
        document.getElementById("table2").appendChild(tr2).setAttribute("class","td");
        for(let y=0;y<c2;y++){
            const td2=document.createElement("td");
            tr2.appendChild(td2).setAttribute("class","td");
            const input2=document.createElement("input");
            input2.setAttribute("type","number");
            input2.setAttribute("id",`x-${i}${y}`);
            td2.appendChild(input2).setAttribute("class","inp");
        }
    }
}
function mulB(r1,c1,r2,c2){
    const add=document.createElement("button");
    add.setAttribute("id","add-button");
    add.textContent="MULTIPLY";
    const dd = document.createElement("div");
    dd.setAttribute("id","button-div");
     dd.appendChild(add).setAttribute("class","button-add");
    const bb=document.getElementById("input-matrix");
    bb.appendChild(dd);
    add.onclick= function(){mulMatrix(r1,c1,r2,c2)};
}
function mulMatrix(r1,c1,r2,c2){
    const ip5 = document.getElementById("output-matrix");
    ip5.innerHTML='';
    const opmatrix=document.getElementById("output-matrix");
    const opchild=document.createElement("div");
    opchild.setAttribute("id","opchild");
    opmatrix.appendChild(opchild).setAttribute("class","matrix-div");
    const tb3=document.createElement("table");
    tb3.setAttribute("id","table3");
    document.getElementById("opchild").appendChild(tb3).setAttribute("class","optable");
    for(let i = 0; i < r1; i++) {
        const tr3 = document.createElement("tr");
        document.getElementById("table3").appendChild(tr3).setAttribute("class", "opclass");
        for (let j = 0; j < c2; j++) {
           const td3 = document.createElement("td");
           td3.setAttribute("id", `z-${i}${j}`);
           td3.setAttribute("class", "opclass");
           let sum = 0;
             for (let k = 0; k < c1; k++) {
              let num1 = parseInt(document.getElementById(`y-${i}${k}`).value) || 0;
               let num2 = parseInt(document.getElementById(`x-${k}${j}`).value) || 0;
              sum += num1 * num2;
             }
            td3.textContent=sum;
            tr3.appendChild(td3).setAttribute("class","opclass");
        }
    }
}
function submitFunction(){
    const reqR1Id=document.getElementById("rows1");
    const reqC1Id=document.getElementById("column1");
    const reqR2Id=document.getElementById("rows2");
    const reqC2Id=document.getElementById("column2");
    const r1=reqR1Id.value ;
    const r2=reqR2Id.value ;
    const c1=reqC1Id.value ;
    const c2=reqC2Id.value ;
  
    if((r1=='') || (c1=='') || (r2=='') || (c2=='')){alert("Value can't be empty");} else{
    if((r1>10) || (c1>10) || (r2>10) || (c2>10)){alert("Enter valid values");} else{
    if((r1<=0) || (c1<=0) || (r2<=0) || (c2<=0)){alert("Enter valid values");} else{
    if(c1!=r2){alert("Can't perform multiplication");}
    else{
        const ip = document.getElementById("matrix-1");
        ip.innerHTML='';
        const ip2 = document.getElementById("matrix-2");
        ip2.innerHTML='';
        const ip3 = document.getElementById("add-button");
          if(ip3){
            ip3.parentNode.removeChild(ip3);}
     const ip4 = document.getElementById("output-matrix");
        ip4.innerHTML='';
    const reqMatrix1=document.getElementById("matrix-1");
    const reqMatrix2=document.getElementById("matrix-2");
    const newDiv= document.createElement("div");
    newDiv.setAttribute("id","child1");
    const newDiv2= document.createElement("div");
    newDiv2.setAttribute("id","child2");
    reqMatrix1.appendChild(newDiv).setAttribute("class","matrix-div");
    reqMatrix2.appendChild(newDiv2).setAttribute("class","matrix-div");
    addRc(r1,c1,r2,c2);
    mulB(r1,c1,r2,c2);
}}}}}