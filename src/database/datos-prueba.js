//Datos de prueba

// Usuarios
const usuario1 = {
  nombre: 'Juan',
  run: '12345678-9',
  apellido_paterno: 'Pérez',
  apellido_materno: 'Gómez',
  telefono: '987654321',
  rol: 1, // Ejemplo, ajusta según tus roles
};

const usuario2 = {
  nombre: 'María',
  run: '98765432-1',
  apellido_paterno: 'López',
  apellido_materno: 'Fernández',
  telefono: '123456789',
  rol: 2, // Ejemplo, ajusta según tus roles
};

// Asignaturas
const asignatura1 = {
  codigo: 'MAT101',
  nombre: 'Matemáticas',
  letra: 'A',
};

const asignatura2 = {
  codigo: 'FIS201',
  nombre: 'Física',
  letra: 'B',
};

// Estudiantes
const estudiante1 = {
  id_usuario: 1, // ID del usuario creado anteriormente
  nro_cuenta: 'C12345',
  tipo_cuenta: 'Corriente',
  banco: 'Banco X',
  promedio_notas: 7.8,
};

const estudiante2 = {
  id_usuario: 2, // ID del usuario creado anteriormente
  nro_cuenta: 'S67890',
  tipo_cuenta: 'Ahorros',
  banco: 'Banco Y',
  promedio_notas: 8.5,
};

// Ayudantías
const ayudantia1 = {
  id_asignatura: 1, // ID de la asignatura creada anteriormente
  id_usuario: 1, // ID del usuario creado anteriormente
  cupos: 5,
  horas: 10,
  estado: 'Disponible',
  id_periodo: 1, // Ajusta según tus periodos
};

const ayudantia2 = {
  id_asignatura: 2, // ID de la asignatura creada anteriormente
  id_usuario: 2, // ID del usuario creado anteriormente
  cupos: 3,
  horas: 8,
  estado: 'Disponible',
  id_periodo: 1, // Ajusta según tus periodos
};

// Solicitudes
const solicitud1 = {
  id_ayudantia: 1, // ID de la ayudantía creada anteriormente
  id_usuario: 2, // ID del usuario creado anteriormente
  fecha: new Date(),
  estado: 'Pendiente',
  id_periodo: 1, // Ajusta según tus periodos
  prioridad: 1,
  promedio_asignatura: 7.5,
  anteriormente_ayudante: false,
};

const solicitud2 = {
  id_ayudantia: 2, // ID de la ayudantía creada anteriormente
  id_usuario: 1, // ID del usuario creado anteriormente
  fecha: new Date(),
  estado: 'Aprobada',
  id_periodo: 1, // Ajusta según tus periodos
  prioridad: 2,
  promedio_asignatura: 8.0,
  anteriormente_ayudante: true,
};

// Periodos
const periodo1 = {
  tipo: 1,
  fecha_inicio: new Date('2023-01-01'),
  fecha_fin: new Date('2023-06-30'),
};

const periodo2 = {
  tipo: 2,
  fecha_inicio: new Date('2023-07-01'),
  fecha_fin: new Date('2023-12-31'),
};
