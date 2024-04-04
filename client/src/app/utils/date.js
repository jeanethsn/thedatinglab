/* 
EJEMPLO:
    const fechaOriginal = "2024-06-02";
    const fechaFormateada = formatearFecha(fechaOriginal); 
    console.log(fechaFormateada); // Output: DOM 2 Junio
 */

export function formatearFecha(fechaOriginal) {
  // Parsear la fecha
  const fechaParseada = new Date(fechaOriginal);

  // Array de nombres de los días de la semana en español
  const diasSemana = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

  // Array de nombres de los meses en español
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Obtener el día de la semana, el día del mes y el mes
  const diaSemana = diasSemana[fechaParseada.getDay()];
  const diaMes = fechaParseada.getDate();
  const mes = meses[fechaParseada.getMonth()];

  // Construir la cadena formateada
  const fechaFormateada = `${diaSemana} ${diaMes} ${mes}`;

  return fechaFormateada;
}

export function isPastEvent(fechaOriginal) {
  const fechaParseada = new Date(fechaOriginal);

  const fechaActual = new Date();

  if (fechaParseada < fechaActual) return true;

  return false;
}
