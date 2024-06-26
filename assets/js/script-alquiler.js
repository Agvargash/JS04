const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: '',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true, 
    }, {
    nombre: 'Apartamento luminoso con vista al mar',
    src: '',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true, 
    },{
    nombre: 'Condominio moderno en zona residencial',
    src: '',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false, 
    },{
    nombre: 'Departamento compartido en una isla con Senku',
    src: '',
    descripcion: 'Cómodo departamento que ofrece amenidades recién reformadas',
    ubicacion: 'Lo Barnechea, e=mc^2',
    habitaciones: 3,
    costo: 2150,
    smoke: true,
    pets: true,
    },{
    nombre: 'Casa vintage ubicada en Vitacura',
    src: '',
    descripcion: 'Casa construida en los años 1800 que conserva decoración vintage',
    ubicacion: 'Av vitacura 9323',
    habitaciones: 4,
    costo: 2800,
    smoke: false,
    pets: true,
    }
    ]

   /*  const cardalquiler = `<div class="card">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${prop_name}
                </h5>
                <p class="card-text">
                  ${prop_desc}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${prop_adress}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${prop_rooms} |
                  <i class="fas fa-bath"></i> 2 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${prop_price}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${prop_smoke}
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> ${prop_pets}
                </p>
              </div>
            </div>` */

let card_alquiler = document.querySelector ('#body_alq')
for(let propiedad of propiedades_alquiler){
    card_alquiler.innerHTML += `<div class="card">
    <img
      style="width: 25rem";
      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> 2 Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>`
      if(propiedad.smoke == true){
      card_alquiler.innerHTML += `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>`
      }else{card_alquiler.innerHTML +=
        `<p class="text-danger">
        <i class="fas fa-smoking-ban"></i> No permitido fumar
      </p>`
      }

      if(propiedad.pets == true){
      card_alquiler.innerHTML += `<p class="text-success">
        <i class="fas fa-paw"></i> Se permiten mascotas
      </p>`
      }else{card_alquiler.innerHTML +=
        `<p class="text-danger">
        <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
      }card_alquiler.innerHTML +=`
    </div>
  </div>`
  }