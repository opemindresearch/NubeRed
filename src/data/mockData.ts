export const mockData = {
  categorias: [
    { id: 'admin', nombre: 'Administrativos', desc: 'Gestión interna y trámites ciudadanos.', servicios: ['Identidad ciudadana', 'Expediente ciudadano', 'Ventanilla única'], indicadores: { tiempo: '-40%', digitalizacion: '85%', satisfaccion: '4.5/5' } },
    { id: 'urbanos', nombre: 'Urbanos', desc: 'Mantenimiento y gestión del espacio público.', servicios: ['Reporte de baches', 'Alumbrado público', 'Gestión de parques'], indicadores: { tiempo: '-60%', digitalizacion: '70%', satisfaccion: '4.2/5' } },
    { id: 'sociales', nombre: 'Sociales', desc: 'Programas de apoyo y bienestar.', servicios: ['Apoyos económicos', 'Comedores comunitarios', 'Salud preventiva'], indicadores: { tiempo: '-30%', digitalizacion: '60%', satisfaccion: '4.7/5' } },
    { id: 'seguridad', nombre: 'Seguridad', desc: 'Prevención y respuesta a emergencias.', servicios: ['Botón de pánico', 'Monitoreo de cámaras', 'Reporte anónimo'], indicadores: { tiempo: '-75%', digitalizacion: '90%', satisfaccion: '4.1/5' } },
    { id: 'ambientales', nombre: 'Ambientales', desc: 'Cuidado del entorno y sustentabilidad.', servicios: ['Residuos y reciclaje', 'Calidad del aire', 'Reforestación'], indicadores: { tiempo: '-20%', digitalizacion: '50%', satisfaccion: '4.4/5' } },
    { id: 'economia', nombre: 'Desarrollo Económico', desc: 'Impulso a negocios y empleo.', servicios: ['Licencias comerciales', 'Bolsa de empleo', 'Directorio local'], indicadores: { tiempo: '-50%', digitalizacion: '80%', satisfaccion: '4.6/5' } },
    { id: 'participacion', nombre: 'Participación Ciudadana', desc: 'Involucramiento de la sociedad.', servicios: ['Presupuesto participativo', 'Consultas públicas', 'Comités vecinales'], indicadores: { tiempo: '-15%', digitalizacion: '65%', satisfaccion: '4.3/5' } },
    { id: 'educacion', nombre: 'Educación y Talento', desc: 'Formación y capacitación.', servicios: ['Becas', 'Cursos en línea', 'Certificaciones'], indicadores: { tiempo: '-25%', digitalizacion: '75%', satisfaccion: '4.8/5' } }
  ],
  artefactos: [
    { id: 1, nombre: 'Identidad Ciudadana', problema: 'Falta de unificación en registros ciudadanos.', flujo: 'Registro -> Validación -> Emisión de ID Digital', nivel: 'Avanzado', reqs: 'Conexión a RENAPO, App Móvil', categoria: 'admin' },
    { id: 2, nombre: 'Expediente Ciudadano', problema: 'Documentación dispersa y repetitiva.', flujo: 'Carga de docs -> Verificación -> Repositorio Único', nivel: 'Intermedio', reqs: 'Almacenamiento seguro en nube', categoria: 'admin' },
    { id: 3, nombre: 'Solicitudes y Tickets', problema: 'Seguimiento ineficiente de peticiones.', flujo: 'Creación ticket -> Asignación -> Resolución -> Cierre', nivel: 'Básico', reqs: 'Módulo de atención ciudadana', categoria: 'admin' },
    { id: 4, nombre: 'Notificaciones', problema: 'Falta de comunicación proactiva.', flujo: 'Evento -> Generación de alerta -> Envío (SMS/Push/Email)', nivel: 'Intermedio', reqs: 'Gateway de mensajería', categoria: 'admin' },
    { id: 5, nombre: 'Bitácora y Trazabilidad', problema: 'Opacidad en procesos internos.', flujo: 'Acción -> Registro inmutable -> Auditoría', nivel: 'Avanzado', reqs: 'Blockchain o base de datos inmutable', categoria: 'admin' },
    { id: 6, nombre: 'Pagos y Derechos', problema: 'Recaudación lenta y presencial.', flujo: 'Consulta de saldo -> Pasarela de pago -> Recibo digital', nivel: 'Avanzado', reqs: 'Integración bancaria', categoria: 'admin' },
    { id: 7, nombre: 'Licencias y Permisos', problema: 'Trámites burocráticos y corruptibles.', flujo: 'Solicitud -> Revisión documental -> Aprobación -> Emisión', nivel: 'Intermedio', reqs: 'Firma electrónica', categoria: 'economia' },
    { id: 8, nombre: 'Reporte Urbano', problema: 'Atención lenta a fallas en servicios.', flujo: 'Reporte geolocalizado -> Cuadrilla -> Reparación -> Evidencia', nivel: 'IA', reqs: 'App ciudadana, GPS', categoria: 'urbanos' },
    { id: 9, nombre: 'Agua y Drenaje', problema: 'Fugas no detectadas y cobro ineficiente.', flujo: 'Lectura IoT -> Facturación -> Detección de anomalías', nivel: 'IA', reqs: 'Sensores IoT, Medidores inteligentes', categoria: 'urbanos' },
    { id: 10, nombre: 'Botón de Pánico', problema: 'Tiempos de respuesta largos en emergencias.', flujo: 'Activación -> Geolocalización -> Despacho de patrulla', nivel: 'Avanzado', reqs: 'Centro de mando (C4/C5)', categoria: 'seguridad' },
    { id: 11, nombre: 'Residuos y Reciclaje', problema: 'Rutas de recolección ineficientes.', flujo: 'Monitoreo de contenedores -> Optimización de ruta -> Recolección', nivel: 'IA', reqs: 'Sensores volumétricos', categoria: 'ambientales' },
    { id: 12, nombre: 'Proveedores y Empleo', problema: 'Desconexión entre oferta y demanda local.', flujo: 'Registro de perfil -> Matchmaking -> Contratación', nivel: 'Intermedio', reqs: 'Plataforma web', categoria: 'economia' }
  ],
  metricasDashboard: {
    municipio: { activos: 45, tiempoRespuesta: '4.2 hrs', satisfaccion: '85%', ahorro: '$2.4M MXN' },
    educativa: { alumnosInvolucrados: 120, proyectosActivos: 15, horasPractica: 3500, certsEmitidas: 85 },
    ciudadano: { tramitesRealizados: 12, reportesActivos: 2, nivelConfianza: 'Alto', tiempoAhorrado: '15 hrs' }
  },
  incidencias: [
    { id: 1, lat: 35, lng: 40, tipo: 'Bache', estado: 'Pendiente' },
    { id: 2, lat: 60, lng: 20, tipo: 'Alumbrado', estado: 'En proceso' },
    { id: 3, lat: 45, lng: 70, tipo: 'Fuga de agua', estado: 'Resuelto' },
    { id: 4, lat: 20, lng: 50, tipo: 'Basura', estado: 'Pendiente' },
    { id: 5, lat: 80, lng: 80, tipo: 'Seguridad', estado: 'En proceso' }
  ],
  fasesImplementacion: [
    { mes: 'Mes 1-2', nombre: 'Diagnóstico y Setup', hitos: ['Análisis de infraestructura', 'Firma de convenios', 'Despliegue de Nube Base'] },
    { mes: 'Mes 3-5', nombre: 'Despliegue Básico', hitos: ['Identidad Ciudadana', 'Ventanilla Única', 'Capacitación inicial'] },
    { mes: 'Mes 6-8', nombre: 'Operación y Expansión', hitos: ['Integración de IA', 'Dashboards avanzados', 'Transferencia de conocimiento'] }
  ]
};
