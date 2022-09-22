module.exports = function () {
  var data = {
    tipopagos: [
      {
        id: 1,
        tipo: "yape"
      },
      {
        id: 2,
        tipo: "efectivo"
      },
      {
        id: 3,
        tipo: "visa"
      },
      {
        id: 4,
        tipo: "mastercard"

      }
    ],
    reseniacalificacion: [
      {
        id: 1,
        qEstrellas: 5,
        Resenia: "excelente servicio",
        Cliente_id: 2,
        Tienda_id: 1
      },
      {
        id: 2,
        qEstrellas: 4,
        Resenia: "Buena tienda y excelente servicio",
        Cliente_id: 5,
        Tienda_id: 3
      },
      {
        id: 3,
        qEstrellas: 1,
        Resenia: "No recomendado , no especifica bien sus productos",
        Cliente_id: 8,
        Tienda_id: 4
      }
    ],
    tipoproducto: [
      {
        id: 1,
        categoriaNombre: "Lacteos"
      },
      {
        id: 2,
        categoriaNombre: "Verduras"
      },
      {
        id: 3,
        categoriaNombre: "Frutas"
      },
      {
        id: 4,
        categoriaNombre: "Golosinas"
      }
    ],
    stock: [
      {
        id: 1,
        enStock: 45,
        LastUpdateTime: "25/04/22",
      },
      {
        id: 2,
        enStock: 10,
        s: "23/04/22",
      },
      {
        id: 3,
        enStock: 20,
        LastUpdateTime: "21/04/22",
      }
    ],
    producto: [
      {
        id: 1,
        nombreProducto: "leche",
        productoDescripcion: "tarro de 250ml",
        cantidad: 1,
        precioUnidad: 5,
        categoriaProdcuto: 1,
      },
      {
        id: 2,
        nombreProducto: "gaseosa",
        productoDescripcion: "coca cola 250ml",
        cantidad: 2,
        precioUnidad: 7,
        categoriaProdcuto: 3,
      },
      {
        id: 3,
        nombreProducto: "manzana",
        productoDescripcion: "manzana chilena",
        cantidad: 3,
        precioUnidad: 3,
        categoriaProdcuto: 4,
      }
    ],
    compradorubicacion: [
      {
        clienteid: 1,
        ubicacionid: 5

      },
      {
        clienteid: 2,
        ubicacionid: 6

      },
      {
        clienteid: 3,
        ubicacionid: 9

      }
    ],
    ubicacion: [
      {
        id: 1,
        latitud: 123456,
        longitud: 456789

      },
      {
        id: 2,
        latitud: 456287,
        longitud: 36781

      },
      {
        id: 3,
        latitud: 785348,
        longitud: 325478

      }
    ],
    tiendaproducto: [
      {
        producto_id: 1,
        tienda_id: 2,

      },
      {
        producto_id: 2,
        tienda_id: 6,

      },
      {
        producto_id: 3,
        tienda_id: 9,

      }
    ]
    ,
    tienda: [
      {
        id: 1,
        nombre: "Juan",
        direccion: "chorrillos",
        resenha: "buen servicio",
        calificacion: 5,
        id_duenho: 1,
        id_tipo_pago: 2

      },
      {
        id: 2,
        nombre: "Jose",
        direccion: "lima",
        resenha: "mal servicio",
        calificacion: 1,
        id_duenho: 5,
        id_tipo_pago: 3,

      },
      {
        id: 3,
        nombre: "Pepe",
        direccion: "Villa el Salvador",
        resenha: "por mejorar",
        calificacion: 3,
        id_duenho: 6,
        id_tipo_pago: 2,

      }
    ]
    ,
    duenho: [
      {
        id: 1,
        nombre: "Juan",
        edad: 26,
        direccion: "lima"

      },
      {
        id: 2,
        nombre: "Sebastian",
        edad: 27,
        direccion: "lima"

      },
      {
        id: 3,
        nombre: "Jorge",
        edad: 29,
        direccion: "chorrillos"

      }
    ],
    comprador: [
      {
        id: 1,
        nombre: "Carlos",
        apellido: "Guzman",
        ciudad_id: 12

      },
      {
        id: 2,
        nombre: "Roberto",
        apellido: "Cacerez",
        ciudad_id: 4

      },
      {
        id: 3,
        nombre: "Jose",
        apellido: "Lopez",
        ciudad_id: 9

      }
    ]

  }

  return data
}
