import { div } from "framer-motion/client";
import { CiForkAndKnife } from "react-icons/ci";

const NutritionalPlan = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-black via-zinc-800 to-black p-6">
      <div className="max-w-4xl w-full">
        <h3 className="text-6xl font-bebas text-white mb-6">
          Plan Nutricional Básico
        </h3>
        <p className="text-lg mb-2  text-white">
          <span className="font-medium text-yellow-400">Objetivo:</span> Ganancia de masa
          muscular
        </p>
        <p className="text-lg mb-4 text-white ">
          <span className="font-medium text-yellow-400">Calorías diarias:</span> 2,500 kcal
        </p>
        <div className="flex flex-wrap justify-between gap-6 text-black">
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
              <CiForkAndKnife />
              Desayuno
            </h4>
            <p>Avena con leche descremada, 1 banana, 1 huevo duro.</p>
          </div>
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
              <CiForkAndKnife /> Almuerzo
            </h4>
            <p>
              Pechuga de pollo a la plancha, arroz integral, ensalada de
              espinaca.
            </p>
          </div>
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
              <CiForkAndKnife /> Merienda
            </h4>
            <p>Batido de proteínas, 1 manzana.</p>
          </div>
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
              <CiForkAndKnife /> Cena
            </h4>
            <p>Salmón al horno, batata asada, brócoli al vapor.</p>
          </div>
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
            <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
              <CiForkAndKnife /> Snack post-entrenamiento
            </h4>
            <p>Yogur griego con almendras.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionalPlan;
