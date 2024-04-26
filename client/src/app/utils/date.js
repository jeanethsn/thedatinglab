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
  const fechaFormateada = `${diaSemana}, ${diaMes} ${mes.toUpperCase()}`;

  return fechaFormateada;
}

export function isPastEvent(fechaOriginal) {
  const fechaParseada = new Date(fechaOriginal);

  const fechaActual = new Date();

  if (fechaParseada < fechaActual) return true;

  return false;
}

export const sortEventDataByDate = (data) => {
  return data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

export function horaFormato(timeOriginal) {
  const timeSplit = timeOriginal.split(":");
  const timeJoin = timeSplit.slice(0, 2).join(":");
  return timeJoin;
}
