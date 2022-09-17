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
              Cliente_id: {
                  id:2,
                  nombre:"jose"
              },
              Tienda_id: {
                  id:1,
                  nombre:"tiendas pepitos"

              }
          },
          {
              id: 2,
              qEstrellas: 4,
              Resenia: "Buena tienda y excelente servicio",
              Cliente_id: {
                  id:5,
                  nombre:"Juan"
              },
              Tienda_id: {
                  id:3,
                  nombre:"tienda lima"
              }
          },
          {
              id: 3,
              qEstrellas: 1,
              Resenia: "No recomendado , no especifica bien sus productos",
              Cliente_id: {
                  id:8,
                  nombre:"jorge"
              },
              Tienda_id: {
                  id:4,
                  nombre:"tiendas fulls"
              }
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
              LastUpdateTime: "23/04/22",
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
              cantidad: {
                  id: 1,
                  enStock: 15,
                  LastUpdateTime: "20/09/22"
              },
              precioUnidad: 5,
              categoriaProdcuto: {
                  id: 1,
                  categoriaNombre: "Lacteo"
              },
          },
          {
              id: 2,
              nombreProducto: "gaseosa",
              productoDescripcion: "coca cola 250ml",
              cantidad: {
                  id: 2,
                  enStock: 19,
                  LastUpdateTime: "15/09/22"
              },
              precioUnidad: 7,
              categoriaProdcuto: {
                  id: 3,
                  categoriaNombre: "Refresco"
              },
          },
          {
              id: 3,
              nombreProducto: "manzana",
              productoDescripcion: "manzana chilena",
              cantidad: {
                  id: 3,
                  enStock: 5,
                  LastUpdateTime: "21/09/22"
              },
              precioUnidad: 3,
              categoriaProdcuto: {
                  id: 4,
                  categoriaNombre: "Frutas"
              },
          }
      ],
      compradorubicacion: [
          {
              clienteid: {
                  id:1,
                  nombre:"Juan"

              },
              ubicacionid: {
                  id:5,
                  latitud:-20564,
                  longitud:12354
              }

          },
          {
              clienteid: {
                  id:2,
                  nombre:"pedro"
              },
              ubicacionid: {
                  id:6,
                  latitud:-486156,
                  longitud:123123
              }

          },
          {
              clienteid: {
                  id:3,
                  nombre:"Lopez"
              },
              ubicacionid: {
                  id:9,
                  latitud:-1489642,
                  longitud:2315464
              }

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
              producto_id: {
                  id:1,
                  nombreProducto:"leche",
                  productoDescripcion:"lacteo",
                  cantidad:16,
                  precioUnidad:3,
                  categoriaProdcuto:3
              },
              tienda_id: {
                  id:2,
                  nombre:"tienda pepito"
              },

          },
          {
              producto_id: {
                  id:1,
                  nombreProducto:"gaseosa",
                  productoDescripcion:"coca cola",
                  cantidad:12,
                  precioUnidad:2,
                  categoriaProdcuto:5
              },
              tienda_id: {
                  id:6,
                  nombre:"tienda juancito"
              },

          },
          {
              producto_id: {
                  id:1,
                  nombreProducto:"manzana",
                  productoDescripcion:"manzana chilena",
                  cantidad:5,
                  precioUnidad:3,
                  categoriaProdcuto:1
              },
              tienda_id: {
                  id:9,
                  nombre:"tienda cheto"
              },

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
              id_duenho: {
                  id:1,
                  nombre:"juan",
                  edad:45,
                  direccion:"chorrilos"
              },
              id_tipo_pago: {
                  id:2,
                  tipo:"yape"

              }

          },
          {
              id: 2,
              nombre: "Jose",
              direccion: "lima",
              resenha: "mal servicio",
              calificacion: 1,
              id_duenho: {
                  id:5,
                  nombre:"pedro",
                  edad:50,
                  direccion:"lima"
              },
              id_tipo_pago: {
                  id:3,
                  tipo:"efectivo"

              },

          },
          {
              id: 3,
              nombre: "Pepe",
              direccion: "Villa el Salvador",
              resenha: "por mejorar",
              calificacion: 3,
              id_duenho: {
                  id:6,
                  nombre:"Garcia",
                  edad:31,
                  direccion:"Villa el Salvador "
              },
              id_tipo_pago: {
                  id:2,
                  tipo:"yape"

              },

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
