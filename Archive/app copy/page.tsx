"use client";

import Image from "next/image";
import Link from 'next/link';
import Dataviz1 from "@/app/componentes/Visualizacion1"
import Dataviz2 from "@/app/componentes/Visualizacion2"
import Dataviz3 from "@/app/componentes/Visualizacion3"
import Dataviz4 from "@/app/componentes/Visualizacion4"
import Dataviz5 from "@/app/componentes/Visualizacion5"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      
  <div className="relative w-full h-128">

  <Image
    src="/CambioClimatico.jpg"
    alt="Descripción de la imagen"
    layout="responsive"
    width={1600}
    height={800}
    objectFit="cover" 
    objectPosition="top"
    priority
  />
  
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ top: '20%' }}>
  <h1 className="text-white font-krona text-6xl font-bold">Ciudades costeras</h1>
  <h2 className="text-white font-krona text-8xl font-bold mt-2">y la amenaza del</h2>
  <h1 className="text-white font-krona text-8xl font-bold mt-2">cambio climático</h1>
</div>

  <div className="absolute top-8 right-8">
    <p className="text-white text-2xl text-sm">Candelaria Sutton y Lola Fechino</p>
  </div>
</div>

<div className="w-full text-center mt-16">
        <p className="text-black text-5xl font-bold rounded-full p-12 inline-block" style={{backgroundColor: '#EBEBEB'}}>
          ¿Qué es el cambio climático?
        </p>
      </div>

<div className="w-full text-center mt-16">
        <p className="text-black text-3xl ">
        El cambio climático se refiere a las transformaciones a largo plazo en los patrones del clima de la Tierra, incluidas las temperaturas globales, la precipitación, y otros fenómenos climáticos. Aunque el clima de la Tierra ha cambiado naturalmente a lo largo de millones de años debido a factores como las variaciones en la órbita terrestre, la actividad volcánica y los ciclos solares, el cambio climático al que nos referimos hoy es principalmente causado por actividades humanas.
        </p>
      </div>

  <div className="w-full rounded-xl p-12 mt-16" style={{ backgroundColor: '#EBEBEB' }}>
  <div className="w-full text-center">
    <p className="text-black text-5xl font-bold rounded-full p-12 inline-block" style={{ backgroundColor: '#EBEBEB' }}>
      Causas Principales
    </p>
  </div>

  <div className="w-full mt-16 mb-12">
    <Dataviz3 />
  </div>
</div>

<div className="w-full text-center mt-16">
        <p className="text-black text-5xl font-bold rounded-full p-12 inline-block" style={{backgroundColor: '#EBEBEB'}}>
        Temperatura media global y proyecciones
        </p>
      </div>

<div className="w-full mt-16 mb-12">
    <Dataviz2 />
  </div>

<div className="w-full rounded-xl p-12 mt-16" style={{ backgroundColor: '#EBEBEB' }}>
  <div className="w-full text-center">
    <p className="text-black text-5xl font-bold rounded-full p-12 inline-block" style={{ backgroundColor: '#EBEBEB' }}>
    ¿Cómo afecta el cambio climático a las ciudades costeras?
    </p>
  </div>
  <div className="w-full text-center">
    <p className="text-black text-3xl rounded-full p-12 inline-block" style={{ backgroundColor: '#EBEBEB' }}>
    El cambio climático tiene un impacto significativo en las ciudades costeras debido a varios factores relacionados con el aumento del nivel del mar, fenómenos climáticos extremos y otros efectos. A continuación, se detallan algunas de las formas principales en las que las ciudades costeras se ven afectadas:
    </p>
  </div>
  </div>

  <div className="w-full text-center mt-16">
        <p className="text-black text-5xl font-bold rounded-full p-12 inline-block" style={{backgroundColor: '#EBEBEB'}}>
        Ciudades costeras amenazadas por el cambio climático
        </p>
      </div>

<div className="w-full mt-12 mb-12">
        <Dataviz1 />
      </div>

<div className="relative w-3/4 mt-16 mb-12">
  <Dataviz4 />

  <div className="absolute bottom-24 right-2 bg-gray-300 text-black text-5xl font-bold p-4 rounded-full" style={{ backgroundColor: '#EBEBEB' }}>
    <p>Nueva York 2024 - 2100</p>
  </div>
</div>

<div className="relative w-3/4 mt-16 mb-12">
  <Dataviz5 />

  <div className="absolute bottom-24 right-2 bg-gray-300 text-black text-5xl font-bold p-4 rounded-full" style={{ backgroundColor: '#EBEBEB' }}>
    <p>Miami 2024 - 2100</p>
  </div>
</div>

<div className="w-full rounded-xl p-12 mt-16" style={{ backgroundColor: '#EBEBEB' }}>
  <div className="w-full text-center">
    <p className="text-black text-5xl font-bold rounded-full p-12 inline-block" style={{ backgroundColor: '#EBEBEB' }}>
    ¿Por qué es importante actuar?
    </p>
  </div>
  <div className="w-full text-center">
    <p className="text-black text-3xl rounded-full p-12 inline-block" style={{ backgroundColor: '#EBEBEB' }}>
    Es importante actuar contra el cambio climático para proteger el planeta y evitar la destrucción de ecosistemas que sostienen la vida. Si no actuamos, enfrentaremos desastres naturales más frecuentes, pérdidas económicas y desplazamientos masivos de personas. Además, las futuras generaciones heredarán un mundo mucho más difícil de habitar, con menos recursos y mayor inestabilidad.
    </p>
  </div>
  </div>

<div className="w-full text-center mt-16">
        <p className="text-black text-5xl font-bold rounded-full p-12 inline-block" style={{backgroundColor: '#EBEBEB'}}>
        Soluciones que ya se implementaron
        </p>
      </div>


      <div className="relative mt-16">
  <Image
    src="/solucion2.jpg"
    alt="Descripción de la imagen"
    width={800}
    height={400}
    objectFit="cover"
    objectPosition="top"
    className="rounded-lg"
    priority
  />
  
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div className="bg-gray-300 text-black text-3xl font-bold px-8 py-2 rounded-full max-w-full text-center" style={{ backgroundColor: '#EBEBEB' }}>
      <p>Roterdam, Barrera Holandesa</p>
    </div>
  </div>
</div>

<div className="w-full text-center mt-16">
  <Link href="https://es.euronews.com/green/2019/10/14/roterdam-la-barrera-holandesa-contra-el-aumento-del-nivel-del-mar" target="_blank" rel="noopener noreferrer">
    <p className="text-blue-600 underline text-2xl">
      Leer más sobre la barrera holandesa contra el aumento del nivel del mar
    </p>
  </Link>
</div>


<div className="relative mt-16">
  <Image
    src="/solucion1.jpg"
    alt="Descripción de la imagen"
    width={800}
    height={400}
    objectFit="cover"
    objectPosition="top"
    className="rounded-lg"
    priority
  />
  
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div className="bg-gray-300 text-black text-3xl font-bold px-8 py-2 rounded-full" style={{ backgroundColor: '#EBEBEB' }}>
      <p>Venecia, El MOSE</p>
    </div>
  </div>
</div>

<div className="w-full text-center mt-16">
  <Link href="https://rpp.pe/mundo/actualidad/italia-venecia-el-mose-la-eterna-obra-que-deberia-proteger-a-la-ciudad-de-la-emergencia-climatica-noticia-1229643" target="_blank" rel="noopener noreferrer">
    <p className="text-blue-600 underline text-2xl">
      Leer más sobre el proyecto MOSE
    </p>
  </Link>
</div>


<div className="relative mt-16">
  <Image
    src="/solucion3.jpg"
    alt="Descripción de la imagen"
    width={800}
    height={400}
    objectFit="cover"
    objectPosition="top"
    className="rounded-lg"
    priority
  />

  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div className="bg-gray-300 text-black text-3xl font-bold px-8 py-2 rounded-full max-w-full text-center" style={{ backgroundColor: '#EBEBEB' }}>
      <p>Singapur, Ciudades Esponja</p>
    </div>
  </div>
</div>

<div className="w-full text-center mt-16">
  <Link href="https://www.metalocus.es/es/noticias/kongjian-yu-autor-del-concepto-ciudades-esponja-gana-el-premio-global-oberlander" target="_blank" rel="noopener noreferrer">
    <p className="text-blue-600 underline text-2xl">
      Leer más sobre las ciudades esponja en Singapur
    </p>
  </Link>
</div>


    </main>
  );
}
