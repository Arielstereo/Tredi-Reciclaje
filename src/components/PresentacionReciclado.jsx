import { useState, useEffect } from "react";

const PresentacionReciclado = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [showEnd, setShowEnd] = useState(false);
  const totalSlides = 12;

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  useEffect(() => {
    if (showSplash) return; // No escuchar teclas durante el splash
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        previousSlide();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, showSplash]);

  const nextSlide = () => {
    if (currentSlide === totalSlides - 1) {
      setShowEnd(true); // Mostrar pantalla de despedida
    } else {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const restartPresentation = () => {
    setShowEnd(false);
    setCurrentSlide(0);
    setShowSplash(true);
  };

  const ImagePlaceholder = ({ src, alt = "", className = "" }) => (
    <img
      src={src}
      alt={alt}
      className={`w-fit h-64 object-cover rounded-2xl mx-auto my-4 ${className}`}
    />
  );

  const StatCard = ({ number, description }) => (
    <div className="bg-[#e07026] text-white p-6 rounded-2xl text-center shadow-xl">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-lg">{description}</div>
    </div>
  );

  const WasteType = ({ icon, title, description }) => (
    <div className="bg-[#1e4477] text-white p-6 rounded-2xl mb-4 shadow-xl">
      <h4 className="text-2xl text-[#e07026] font-bold mb-2">
        {icon} {title}
      </h4>
      <p className="text-lg">{description}</p>
    </div>
  );

  const StepContainer = ({ number, title, description }) => (
    <div className="flex items-center mb-4 p-4 bg-[#1e4477] rounded-lg border-l-4 border-[#e07026] shadow">
      <div className="bg-[#e07026] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-2xl text-gray-50">{title}</h4>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </div>
  );

  const slides = [
    // Slide 1: Portada
    {
      content: (
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#1e4477] mb-8 text-shadow">
            Capacitación:
          </h1>
          <h2 className="text-4xl font-bold text-[#1e4477] mb-8 text-shadow">
            Reciclado de Residuos en Casa
          </h2>
          <ImagePlaceholder src="/casa.jpg" alt="Portada de la capacitación" />

          <div className="mt-8">
            <h3 className="text-2xl text-[#1e4477] font-semibold">
              Transformando desafíos ambientales en soluciones sostenibles
            </h3>
            {/* <p className="text-gray-800 text-lg mt-4">
              Líderes en gestión integral de residuos complejos en Sudamérica
            </p> */}
          </div>
          <div className="flex justify-center mt-8 w1/2">
            <img
              className="w-1/2"
              src="/logo-azul.png"
              alt="Logo TREDI ARGENTINA"
            />
          </div>
        </div>
      ),
    },

    // Slide 2: ¿Qué es el reciclado?
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            ¿Qué es el Reciclado?
          </h2>
          <ImagePlaceholder
            src="/reciclaje.gif"
            alt="Imagen representativa del reciclado"
          />

          <p className="text-lg text-[#1e4477] font-semibold text-center mb-6">
            El reciclado es el proceso de transformar materiales desechados en
            nuevos productos, evitando que se conviertan en basura y reduciendo
            la explotación de recursos naturales.
          </p>
          <div className="flex justify-center gap-4">
            <StatCard
              number="75%"
              description="Reducción de energía al reciclar aluminio"
            />
            <StatCard
              number="60%"
              description="Ahorro de agua reciclando papel"
            />
            <StatCard
              number="17"
              description="Árboles salvados por tonelada de papel reciclado"
            />
          </div>
        </div>
      ),
    },

    // Slide 3: Tipos de Residuos Domésticos
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            Tipos de Residuos Domésticos
          </h2>
          <WasteType
            icon="🗑️"
            title="Residuos Orgánicos"
            description="Restos de comida, cáscaras, restos de poda, aceites vegetales usados"
          />
          <WasteType
            icon="📄"
            title="Papel y Cartón"
            description="Periódicos, revistas, cajas de cartón, folios, libretas"
          />
          <WasteType
            icon="🥤"
            title="Envases y Plásticos"
            description="Botellas de plástico, latas de aluminio, envases de vidrio, tetrapacks"
          />
          <WasteType
            icon="⚡"
            title="Residuos Especiales"
            description="Pilas, electrodomésticos, productos químicos, medicamentos vencidos"
          />
        </div>
      ),
    },

    // Slide 4: Separación en Origen
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            Separación en Origen
          </h2>
          <ImagePlaceholder src="/reciclaje.jpg" alt="Separación en origen" />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La separación en origen es clave para un reciclado efectivo. Separa
            los residuos antes de desecharlos según sus características.
          </p>
          <div className="flex justify-center items-center gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                ✅ Beneficios
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Facilita el proceso de reciclado</li>
                <li>• Reduce la contaminación cruzada</li>
                <li>• Mejora la calidad de los materiales reciclados</li>
                <li>• Disminuye costos de tratamiento</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                ⚠️ Importante
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Enjuagar envases con restos de comida</li>
                <li>• Retirar etiquetas cuando sea posible</li>
                <li>• No mezclar diferentes tipos de residuos</li>
                <li>• Conocer las normas locales de recolección</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Contenedor Verde - Vidrio
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            🟢 Contenedor Verde - Vidrio
          </h2>
          <ImagePlaceholder src="/verde.png" alt="Contenedor Verde - Vidrio" />
          <div className="flex justify-center items-center gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                ✅ SÍ depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Botellas de bebidas</li>
                <li>• Frascos de conservas</li>
                <li>• Tarros de cosméticos</li>
                <li>• Botellas de perfume (vacías)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">
                ❌ NO depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cristales de ventana</li>
                <li>• Espejos</li>
                <li>• Bombillas</li>
                <li>• Vidrio de automóvil</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-6">
            <p className="text-gray-800">
              <strong>💡 Consejo:</strong> El vidrio se puede reciclar infinitas
              veces sin perder calidad. ¡Retira tapas y tapones antes de
              depositar!
            </p>
          </div>
        </div>
      ),
    },

    // Slide 6: Contenedor Azul - Papel y Cartón
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            🔵 Contenedor Azul - Papel y Cartón
          </h2>
          <ImagePlaceholder src="/azul.jpg" alt="carton" />
          <div className="flex justify-center items-center gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                ✅ SÍ depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Periódicos y revistas</li>
                <li>• Cajas de cartón</li>
                <li>• Folios y papel de oficina</li>
                <li>• Sobres (sin ventanilla plástica)</li>
                <li>• Libros y cuadernos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">
                ❌ NO depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Papel higiénico usado</li>
                <li>• Servilletas sucias</li>
                <li>• Papel encerado o plastificado</li>
                <li>• Tetrapacks</li>
                <li>• Papel carbón</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <p className="text-gray-800">
              <strong>💡 Consejo:</strong> Dobla las cajas de cartón para ocupar
              menos espacio. Retira grapas, clips y cintas adhesivas.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 7: Contenedor Amarillo - Envases y Plásticos
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            🟡 Contenedor Amarillo - Envases y Plásticos
          </h2>
          <ImagePlaceholder src="/amarillo.jpg" alt="plasticos" />

          <div className="flex justify-center items-center gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                ✅ SÍ depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Botellas de plástico</li>
                <li>• Latas de bebidas y conservas</li>
                <li>• Tetrapacks</li>
                <li>• Bandejas de aluminio</li>
                <li>• Envases de yogurt</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">
                ❌ NO depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Juguetes de plástico</li>
                <li>• Electrodomésticos pequeños</li>
                <li>• Biberones</li>
                <li>• Utensilios de cocina</li>
                <li>• CDs y DVDs</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-6">
            <p className="text-gray-800">
              <strong>💡 Consejo:</strong> Aplasta las botellas para ahorrar
              espacio. Enjuaga los envases para eliminar restos de comida.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 8: Contenedor Marrón/Gris - Orgánicos
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            🟤 Contenedor Marrón/Gris - Residuos Orgánicos
          </h2>
          <ImagePlaceholder src="/marron.jpg" alt="organicos" />
          <div className="flex justify-center items-center gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                ✅ SÍ depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Restos de frutas y verduras</li>
                <li>• Cáscaras de huevo</li>
                <li>• Posos de café y té</li>
                <li>• Restos de comida (sin cocinar)</li>
                <li>• Flores y plantas pequeñas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">
                ❌ NO depositar:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Aceites de cocina</li>
                <li>• Huesos grandes</li>
                <li>• Excrementos de mascotas</li>
                <li>• Cenizas de cigarrillos</li>
                <li>• Pañales</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg mt-6">
            <p className="text-gray-800">
              <strong>💡 Consejo:</strong> Los residuos orgánicos pueden
              convertirse en compost casero. ¡Perfecto para nutrir plantas!
            </p>
          </div>
        </div>
      ),
    },

    // Slide 9: Residuos Especiales
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            ⚠️ Residuos Especiales y Peligrosos
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Estos residuos requieren tratamiento especializado y no deben
            depositarse en contenedores convencionales:
          </p>
          <WasteType
            icon="🔋"
            title="Pilas y Baterías"
            description="Depositar en puntos específicos de recolección en comercios o centros de salud"
          />
          <WasteType
            icon="💊"
            title="Medicamentos"
            description="Llevar a farmacias que tengan programas de recolección de medicamentos vencidos"
          />
          <WasteType
            icon="🔌"
            title="Electrodomésticos"
            description="Contactar servicios especializados o programas municipales de recolección"
          />
          <WasteType
            icon="🧴"
            title="Productos Químicos"
            description="Pinturas, solventes y químicos de limpieza requieren puntos limpios especializados"
          />
        </div>
      ),
    },

    // Slide 10: Pasos para el Reciclado en Casa
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            📋 Pasos para el Reciclado en Casa
          </h2>
          <StepContainer
            number="1"
            title="Reducir el Consumo"
            description="Evita productos con exceso de embalaje y opta por reutilizables"
          />
          <StepContainer
            number="2"
            title="Separar en Origen"
            description="Clasifica los residuos según su tipo en diferentes contenedores"
          />
          <StepContainer
            number="3"
            title="Limpiar los Envases"
            description="Enjuaga recipientes para eliminar restos de comida o líquidos"
          />
          <StepContainer
            number="4"
            title="Depositar Correctamente"
            description="Lleva cada tipo de residuo al contenedor correspondiente"
          />
          <StepContainer
            number="5"
            title="Educar y Compartir"
            description="Enseña a tu familia y amigos sobre el reciclado responsable"
          />
        </div>
      ),
    },

    // Slide 11: Beneficios del Reciclado
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            🌍 Beneficios del Reciclado
          </h2>
          <ImagePlaceholder src="/planeta.webp" alt="beneficios" />

          <div className="flex justify-center items-center gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                🌿 Beneficios Ambientales
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reduce la contaminación del aire y agua</li>
                <li>• Conserva recursos naturales</li>
                <li>• Disminuye la cantidad de residuos en vertederos</li>
                <li>• Protege ecosistemas y biodiversidad</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1e4477] mb-4">
                💰 Beneficios Económicos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Genera empleos en la industria del reciclado</li>
                <li>• Reduce costos de producción</li>
                <li>• Ahorra energía en la fabricación</li>
                <li>• Crea nuevos mercados y oportunidades</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 12: Conclusiones y Compromiso
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-[#1e4477] text-center mb-6 border-b-4 border-[#e07026] pb-2">
            🤝 Nuestro Compromiso Conjunto
          </h2>
          <ImagePlaceholder src="/manos.jpg" alt="compromiso" />

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1e4477] mb-4">
              Juntos por un Futuro Sostenible
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Cada acción cuenta. El reciclado responsable en casa es el primer
              paso hacia un mundo más limpio y sostenible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <StatCard
              number="+20"
              description="Años de experiencia en gestión de residuos"
            />
            <StatCard
              number="100%"
              description="Compromiso con el medio ambiente"
            />
            <StatCard
              number="♻️"
              description="Cada residuo reciclado importa"
            />
          </div>
        </div>
      ),
    },
  ];

  if (showSplash) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#1E4477]">
        <img
          src="/logo.png"
          alt="Logo TREDI ARGENTINA"
          className="w-96 h-96 object-contain animate-pulse mb-8"
        />
        <button
          onClick={() => setShowSplash(false)}
          className="bg-[#e07026] text-white font-bold px-8 py-4 rounded-full text-2xl shadow-lg hover:bg-white hover:text-[#1e4477] cursor-pointer transition"
        >
          Iniciar presentación
        </button>
      </div>
    );
  }

  if (showEnd) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#1E4477]">
        <img
          src="/logo.png"
          alt="Logo TREDI ARGENTINA"
          className="w-96 h-96 object-contain animate-pulse"
        />
        <h2 className="text-4xl font-bold text-white mb-6">
          ¡Gracias por participar!
        </h2>
        <p className="text-xl text-white mb-8 text-center max-w-xl">
          Esperamos que esta capacitación te ayude a reciclar mejor y cuidar el
          planeta.
          <br />
        </p>
        <button
          onClick={restartPresentation}
          className="bg-[#e07026] text-white font-bold px-8 py-4 rounded-full text-2xl shadow-lg hover:bg-white hover:text-[#1e4477] cursor-pointer transition"
        >
          Volver a empezar
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-[#1E4477] overflow-hidden">
      {/* Contador de diapositivas */}
      <div className="fixed top-5 left-5 bg-[#e07026] bg-opacity-90 px-4 py-2 rounded-full font-bold text-white z-50">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Contenido de la diapositiva */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="bg-white p-12 max-w-6xl max-h-full overflow-y-auto shadow-2xl">
          {slides[currentSlide].content}
        </div>
      </div>

      <button
        onClick={previousSlide}
        className="fixed bottom-8 left-8 bg-white bg-opacity-90 hover:text-white text-[#1e4477] font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:bg-[#e07026] hover:shadow-xl cursor-pointer z-50"
      >
        ◀ Anterior
      </button>
      <button
        onClick={nextSlide}
        className="fixed bottom-8 right-8 bg-white bg-opacity-90 hover:bg-[#e07026] hover:text-white text-[#1e4477] font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer z-50"
      >
        {currentSlide === totalSlides - 1 ? "Finalizar" : "Siguiente ▶"}
      </button>
    </div>
  );
};

export default PresentacionReciclado;
