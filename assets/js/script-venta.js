const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: '',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false, 
    }, {
    nombre: 'Apartamento acogedor en la montaña',
    src: '',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true, 
    },{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: '',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true, 
    },{
    nombre: 'Casa ubicada en Valle lo Campino',
    src: '',
    descripcion: 'Amplia casa de 3 dormitorios, ubicada al interior de condominio privado',
    ubicacion: 'Valle lo campino, Quilicura',
    habitaciones: 3,
    costo: 2000,
    smoke: true,
    pets: true,
    },{
    nombre: 'Departamento individual en Providencia',
    src: '',
    descripcion: 'Departamento reformado para estudiantes ubicado en Av Holanda',
    ubicacion: 'Av Holanda 718',
    habitaciones: 1,
    costo: 1000,
    smoke: false,
    pets: false,
    }
]

/* const card_venta = `<div class="card">
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

            let cardventa = document.querySelector ('#body_vent')
            for(let propiedad of propiedades_venta){
                cardventa.innerHTML += `<div class="card">
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
                    cardventa.innerHTML += `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>`
      }else{cardventa.innerHTML +=
        `<p class="text-danger">
        <i class="fas fa-smoking-ban"></i> No permitido fumar
      </p>`
      }

      if(propiedad.pets == true){
      cardventa.innerHTML += `<p class="text-success">
        <i class="fas fa-paw"></i> Se permiten mascotas
      </p>`
      }else{cardventa.innerHTML +=
        `<p class="text-danger">
        <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
      }cardventa.innerHTML +=`
    </div>
  </div>`
  }