const questions = [
  { type: "birthdate", title: "Introduce tu fecha de nacimiento", options: [] },
  {
    type: "gender",
    title: "¿Con qué género te identificas?",
    options: [
      { value: "mujer", label: "Mujer" },
      { value: "hombre", label: "Hombre" },
      { value: "no binario", label: "No binario" },
    ],
  },
  {
    type: "looksFor",
    title: "Estoy interesada/o en conocer a...",
    options: [
      { value: "mujer", label: "Mujer" },
      { value: "hombre", label: "Hombre" },
      { value: "no binario", label: "No binario" },
      { value: "todo", label: "Todo" },
    ],
  },
  {
    type: "ageRange",
    title: "Rango de edad deseado:",
    options: [
      { value: "20-30", label: "De 20 a 30 años" },
      { value: "25-35", label: "De 25 a 35 años" },
      { value: "35-45", label: "De 35 a 45 años" },
      { value: "no importa", label: "La edad no es un criterio para mí" },
    ],
  },
  {
    type: "sexoAffective",
    title: "¿Qué tipo de relación sexo afectiva te gustaría tener?",
    options: [
      { value: "monogama", label: "Una relación monógama" },
      { value: "explorar", label: "Una relación monógama en la que explorar" },
      { value: "abierta", label: "Una relación abierta, poliamorosa, etc..." },
      { value: "beneficios", label: "Amig@s con beneficios" },
      {
        value: "fluir",
        label: "Lo que fluya, estoy abiert@ a cualquier formato",
      },
      { value: "casual", label: "Algo totalmente casual" },
    ],
  },
  {
    type: "heartState",
    title: "¿En qué estado se encuentra tu corazón?",
    options: [
      {
        value: "maduro",
        label:
          "Maduro y sereno y dispuesto a compartirlo. Con alegrías y traumas procesados e integrados",
      },
      {
        value: "solo",
        label: "Feliz y palpitante con ganas de conocer a personas",
      },
      { value: "feliz", label: "Un poco solito" },
      {
        value: "recuperarse",
        label:
          "Acabo de salir de una relación y busco recuperarme y distraerme",
      },
      { value: "despechado", label: "Más despechado que Shakira y Piqué" },
    ],
  },
  {
    type: "hasChildren",
    title: "¿Tienes hijos?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" },
    ],
  },
  {
    type: "datesParents",
    title: "¿Saldrías con alguien que tiene hijos?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" },
      { value: "no sabe", label: "No me lo he planteado" },
    ],
  },
  {
    type: "values1",
    title: "Indica un valor importante para ti:",
    options: [
      { value: "amabilidad", label: "Amabilidad" },
      { value: "amistad", label: "Amistad" },
      { value: "autenticidad", label: "Autenticidad" },
      { value: "aventura", label: "Aventura" },
      { value: "comunicacion", label: "Comunicación" },
      { value: "conciencia", label: "Conciencia" },
      { value: "creatividad", label: "Creatividad" },
      { value: "cuidado", label: "Cuidado" },
      { value: "desarrollo", label: "Desarrollo profesional" },
    ],
  },
  {
    type: "values2",
    title: "Indica un valor importante para ti:",
    options: [
      { value: "diversion", label: "Diversión" },
      { value: "empatia", label: "Empatía" },
      { value: "familia", label: "Familia" },
      { value: "fidelidad", label: "Fidelidad" },
      { value: "generosidad", label: "Generosidad" },
      { value: "integridad", label: "Integridad" },
      { value: "inteligencia", label: "Inteligencia" },
    ],
  },
  {
    type: "values3",
    title: "Indica un valor importante para ti:",
    options: [
      { value: "lealtad", label: "Lealtad" },
      { value: "libertad", label: "Libertad" },
      { value: "optimismo", label: "Optimismo" },
      { value: "resiliencia", label: "Resiliencia" },
      { value: "responsabilidad", label: "Responsabilidad" },
      { value: "afectiva", label: "Responsabilidad afectiva" },
      { value: "sencillez", label: "Sencillez" },
      { value: "solidaridad", label: "Solidaridad" },
      { value: "humor", label: "Sentido del humor" },
      { value: "valentia", label: "Valentía" },
    ],
  },
  {
    type: "prefers1",
    title: "Eres más de...",
    options: [
      { value: "netflix", label: "Netflix y mi sofá" },
      { value: "eventos", label: "Eventos, restaurantes, copeo" },
      { value: "gym", label: "Gymnasio, deporte y aire libre" },
      { value: "escapada", label: "Escapadas, playa, montaña" },
      { value: "todas", label: "Todas las anteriores" },
    ],
  },
  {
    type: "prefers2",
    title: "Eres más de...",
    options: [
      {
        value: "vino",
        label: "Catas de vino, cerveza, vermut... o lo que se tercie",
      },
      { value: "cafe", label: "Café, chai latte, mate, infusiones varias..." },
      { value: "agua", label: "Agua, zumos naturales, batidos detox" },
      { value: "segun", label: "Según el momento o casi todas las anteriores" },
      { value: "ninguna", label: "Ninguna, no ingiero líquidos" },
    ],
  },
  {
    type: "catsDogs",
    title: "Eres más de...",
    options: [
      { value: "gato", label: "Gato" },
      { value: "perro", label: "Perro" },
      { value: "todos", label: "Todos los animales" },
      { value: "de amigos", label: "Me gustan l@s de mis amig@s" },
    ],
  },
  {
    type: "rrss",
    title: "¿Podrías indicar tu perfil de Instagram?",
    options: [],
  },
];

export default questions;
