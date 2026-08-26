/**
 * Contenido de Riasis Verde.
 * Fotos: Unsplash de referencia hasta que el cliente cargue las propias.
 * Datos de grama: rasgos de uso comunes en Honduras; sin fichas técnicas inventadas.
 */

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const quoteServices = [
  "Diseño y paisajismo",
  "Instalación de grama",
  "Mantenimiento",
  "Remodelación / recuperación",
  "Grama artificial",
  "Otro",
] as const;

export const services = [
  {
    num: "01",
    title: "Diseño y paisajismo",
    description:
      "Distribución de plantas, grama, piedras y bordillos según el clima, el uso y el mantenimiento que el cliente sí va a sostener.",
  },
  {
    num: "02",
    title: "Instalación de grama",
    description:
      "Evaluación, preparación de terreno e instalación de césped natural o artificial. Es un servicio de obra, no un mostrador de rollos.",
  },
  {
    num: "03",
    title: "Mantenimiento",
    description:
      "Corte, poda, fertilización, maleza y limpieza. Planes mensuales para casa o empresa, para que el jardín no se caiga a los tres meses.",
  },
  {
    num: "04",
    title: "Recuperación de espacios",
    description:
      "Remodelación de jardines cansados, limpieza de terrenos y preparación de suelo antes de volver a plantar o instalar.",
  },
] as const;

export const extraServices = [
  "Limpieza de terrenos",
  "Poda de plantas y árboles",
  "Plantas ornamentales",
  "Piedras decorativas y bordillos",
  "Exteriores y hardscape ligero",
] as const;

export const grasses = [
  {
    slug: "san-agustin",
    name: "San Agustín",
    image: {
      src: img("photo-1558904541-efa843a96f01"),
      alt: "Césped residencial de hoja ancha tipo San Agustín",
    },
    summary:
      "La variedad que más se pide en casas de Honduras: hoja ancha, verde intenso y mejor tolerancia a media sombra que otras gramas de sol.",
    traits: ["Sol y media sombra", "Uso residencial", "Riego en época seca"],
    uses: "Jardines frontales, patios y áreas de juego en casa.",
    care: "Corte regular y riego cuando el verano aprieta. Ficha de riego y frecuencia: se confirma en visita.",
  },
  {
    slug: "bermuda",
    name: "Bermuda",
    image: {
      src: img("photo-1535131749006-b7f58c99034b"),
      alt: "Césped de sol intenso tipo Bermuda",
    },
    summary:
      "Gramínea de sol pleno, de hoja más fina. Aguanta tránsito si está bien establecida; en sombra se ralea.",
    traits: ["Sol pleno", "Alto tránsito", "Cierre rápido en calor"],
    uses: "Áreas abiertas, accesos y lotes con mucho sol.",
    care: "Más cortes en época de crecimiento. No es la primera opción bajo árboles densos.",
  },
  {
    slug: "zoysia",
    name: "Zoysia",
    image: {
      src: img("photo-1466692476866-aef241adf2a4"),
      alt: "Alfombra densa de césped tipo Zoysia",
    },
    summary:
      "Alfombra densa y de crecimiento más lento. Queda ordenada, pero pide paciencia al establecerse.",
    traits: ["Alfombra densa", "Menos cortes", "Establecimiento lento"],
    uses: "Jardines que se quieren compactos y de bajo desorden visual.",
    care: "Tiempos de cierre y riego de arranque: pendientes de validar por lote. No prometemos plazos de catálogo.",
  },
  {
    slug: "estrella",
    name: "Estrella",
    image: {
      src: img("photo-1500382017468-9049fed747ef"),
      alt: "Pasto estrella en un lote amplio",
    },
    summary:
      "Pasto vigoroso, más de lote amplio que de jardín ornamental. Cubre rápido a pleno sol.",
    traits: ["Sol", "Lotes amplios", "Crecimiento agresivo"],
    uses: "Terrenos grandes, orillas y áreas donde prima cubrir, no el detalle fino.",
    care: "Poda más frecuente si se quiere controlado. No es la grama de un jardín de exhibición.",
  },
  {
    slug: "artificial",
    name: "Grama artificial",
    image: {
      src: img("photo-1523348837708-15d4a09cfac2", 1400),
      alt: "Superficie de grama artificial instalada",
    },
    summary:
      "Cuando el césped natural no prende —sombra dura, terraza, alto desgaste— instalamos césped sintético como obra, no como tapete suelto.",
    traits: ["Sin corte", "Sin riego de césped", "Limpieza periódica"],
    uses: "Terrazas, zonas de sombra y áreas de juego con mucho uso.",
    care: "Cepillado y limpieza. Marca y densidad del rollo: se cotizan en visita, no a ciegas.",
  },
] as const;

export const gardenTypes = [
  {
    slug: "residencial",
    name: "Residencial",
    image: {
      src: img("photo-1600596542815-ffad4c1539a9", 1400),
      alt: "Jardín frontal de una residencia",
    },
  },
  {
    slug: "corporativo",
    name: "Corporativo",
    image: {
      src: img("photo-1497366216548-37526070297c", 1400),
      alt: "Área verde en un entorno corporativo",
    },
  },
  {
    slug: "comercial",
    name: "Comercial",
    image: {
      src: img("photo-1441986300917-64674bd600d8", 1400),
      alt: "Exteriores de un local comercial",
    },
  },
  {
    slug: "tropical",
    name: "Tropical",
    image: {
      src: img("photo-1564013799919-ab600027ffc6", 1400),
      alt: "Patio tropical con vegetación y agua",
    },
  },
  {
    slug: "compacto",
    name: "Compacto",
    image: {
      src: img("photo-1416879595882-3373a0480b5b", 1400),
      alt: "Jardín pequeño trabajado a mano",
    },
  },
  {
    slug: "bajo-mantenimiento",
    name: "Bajo mantenimiento",
    image: {
      src: img("photo-1558904541-efa843a96f01", 1400),
      alt: "Área verde simple de bajo mantenimiento",
    },
  },
] as const;

export const installSteps = [
  {
    num: "01",
    title: "Evaluación",
    body: "Vemos sol, pendiente, drenaje y cómo se va a usar el espacio. Ahí se decide la variedad, no en un catálogo.",
  },
  {
    num: "02",
    title: "Preparación del terreno",
    body: "Limpieza, retiro de maleza y escombros, y corrección de lo que impida un piso estable.",
  },
  {
    num: "03",
    title: "Nivelación y suelo",
    body: "Nivel, compactación ligera y preparación de la cama de siembra. Sin esto la grama no prende parejo.",
  },
  {
    num: "04",
    title: "Instalación",
    body: "Colocación de césped natural o artificial con juntas y bordes limpios.",
  },
  {
    num: "05",
    title: "Acabados",
    body: "Riego de arranque, bordillos, ajustes de nivel y limpieza de obra.",
  },
  {
    num: "06",
    title: "Entrega",
    body: "Indicaciones de riego y primer corte. El mantenimiento posterior se cotiza aparte si lo quieren.",
  },
] as const;
