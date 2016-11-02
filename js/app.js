window.addEventListener("load", function(){
    var contenedor=document.getElementById("contenedor");
    var Agregar_fila=document.getElementById("row_add");

    Agregar_fila.addEventListener("click", function(){
		agregar();
	});
   	function agregar(){
        var descripcion = document.getElementById("descripcion").value;
        var cantidad = document.getElementById("cantidad").value;   
        var precio = document.getElementById("precio").value;       

        var r=cantidad*precio;
        document.getElementById("Agregar_fila").onclick=function(){
        
        if(cantidad==='0'||precio==='0'){   
        alert('La cantindad ni el precio pueden ser igual a 0');}
        else{
        var myTable = document.getElementById("myTable").getElementsByTagName("tr").length;
            addRow([myTable,cantidad,descripcion,precio,r]);}
        }
    }


    function addRow(number){
        var tr=document.createElement('tr');
            for(var i=0;i<number.length;i++){
                var td=document.createElement('td');
                td.appendChild(document.createTextNode(number[i]));
                tr.appendChild(td);
            }
        document.getElementById('tbl_bdy').appendChild(tr);
        return true;  
    }
    
    function deleteRow() {
    var tt=document.getElementById("t").value;

        if(tt==='0'||tt===''){
        alert('No puede borrar esta columna');

        }else{
        document.getElementById("myTable").deleteRow(tt); 
        }
    }
});

