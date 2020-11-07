$(document).ready(function(){

    let edit = false;
    listar();
    $('#search').on('keyup',function(){

        if($('#search').val()!="") {
            let search = $('#search').val();
            $.ajax({
            url: './busqueda.php',
            data: {search},
            type: 'POST',
            success: function(response){
                let tareas = JSON.parse(response);
                let template ='';
                tareas.map((d, i) =>{
                    Object.keys(d).map((di, i) =>{
                      template += `<tr idTarea="${tareas[0][di].id_tareas}">
                            <td>${tareas[0][di].id_tareas}</td>
                            <td><a href="#" class="nombre-link">${tareas[0][di].nombre}</a></td>
                            <td>${tareas[0][di].descripcion}</td>
                            <td><button class="borrar btn btn-danger mx-auto d-block">X</button></td>
                        </tr>`
                    })
                });
                $('#cuerpo').html(template);

            }
        })
        }else{
            listar();
        }
        
    });

    
    $('#tareas-form').on("submit", function(e){
        
        let datosForm ={
            id_tareas: $('#tareas_id').val(),
            nombre: $('#txt_nombre').val(),
            descripcion: $('#txt_descripcion').val(),
        };
        let direccion = edit === false ? './guardar.php' : './actualizar.php';
        
        $.post(direccion, datosForm, (response)=>{
            $('#tareas-form').trigger('reset');
            listar();
        });
        e.preventDefault();

    });


    function listar() {
        $.ajax({
          url: 'listar.php',
          type: 'GET',
          success: function(response) {
            const tareas = JSON.parse(response);
            let template = '';
            
            tareas.map((d, i) =>{
                Object.keys(d).map((di, i) =>{
                  template += `<tr idTarea="${tareas[0][di].id_tareas}">
                        <td>${tareas[0][di].id_tareas}</td>
                        <td><a href="#" class="nombre-link">${tareas[0][di].nombre}</a></td>
                        <td>${tareas[0][di].descripcion}</td>
                        <td><button class="borrar btn btn-danger mx-auto d-block">X</button></td>
                  </tr>`
                })
            });
            $('#cuerpo').html(template);
          }

        });
    }


    $(document).on('click', '.nombre-link', (e) => {
        const element = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(element).attr('idTarea');
        $.post('./listaruno.php', {id}, (response) => {
            const tareas = JSON.parse(response);
            $('#txt_nombre').val(tareas.nombre);
            $('#txt_descripcion').val(tareas.descripcion);
            $('#tareas_id').val(tareas.id_tareas);
            edit = true; 
        });
        e.preventDefault();
    });

    $(document).on('click', '.borrar', (e) => {
        if(confirm('¿Está seguro de eliminar este elemento?')) {
          const element = $(this)[0].activeElement.parentElement.parentElement;
          const id = $(element).attr('idTarea');
          $.post('./eliminar.php', {id}, (response) => {
            listar();
          });
        }
    });

});
