export const SuccessFalsePage: React.FC<{
  onRestart: () => void;
}> = ({ onRestart }) => {
  return (
    <div className="grid gap-4 my-10">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Résultats de votre évaluation
      </h1>
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Probabilité de diabète : <span className="text-blue-600">Faible</span>
        </h2>
        <p className="mt-4 text-gray-700">
          {
            "Félicitations ! D'après notre intelligence artificielle, il est peu probable que vous soyez atteint(e) de diabète. Cependant, il est toujours important de maintenir de bonnes habitudes de santé."
          }
        </p>
      </div>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">
            1. Continuez à surveiller votre santé
          </h3>
          <p className="text-gray-600">
            Même si les résultats sont rassurants, gardez un œil sur votre état
            de santé et consultez un médecin si vous remarquez des symptômes
            inhabituels.
          </p>
        </div>
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">2. Maintenez un mode de vie sain</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Adoptez une alimentation équilibrée riche en légumes, fruits, et
              fibres.
            </li>
            <li>
              Pratiquez une activité physique régulière pour rester en forme.
            </li>
            <li>Évitez les excès de sucre et surveillez votre poids.</li>
          </ul>
        </div>
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">3. Faites des bilans réguliers</h3>
          <p className="text-gray-600">
            {
              "Programmez des bilans de santé périodiques pour garder une vue d'ensemble de votre santé."
            }
          </p>
        </div>
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">4. Restez informé(e)</h3>
          <p className="text-gray-600">
            {
              "Consultez nos ressources pour apprendre à mieux comprendre les risques liés au diabète et d'autres maladies métaboliques."
            }
          </p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={onRestart}
        >
          Recommencer le quiz
        </button>
      </div>
      <p className="mt-6 text-sm text-center text-gray-500">
        Note : Ces résultats sont indicatifs et ne remplacent pas un avis
        médical professionnel.
      </p>
    </div>
  );
};
