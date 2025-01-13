export const SuccessPage: React.FC<{
  onRestart: () => void;
}> = ({ onRestart }) => {
  return (
    <div className="grid gap-4 my-10">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Résultats de votre évaluation
      </h1>
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Probabilité de diabète : <span className="text-blue-600">90 %</span>
        </h2>
        <p className="mt-4 text-gray-700">
          {
            "D'après notre intelligence artificielle, il est probable que vous soyez atteint(e) de diabète. Il est important de suivre les étapes suivantes :"
          }
        </p>
      </div>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">1. Consultez votre médecin traitant</h3>
          <p className="text-gray-600">
            Prenez rendez-vous avec votre professionnel de santé pour discuter
            de ces résultats et planifier des tests supplémentaires.
          </p>
        </div>
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">2. Effectuez une prise de sang</h3>
          <p className="text-gray-600">
            Une analyse de sang permettra de mesurer votre glycémie et de
            confirmer le diagnostic.
          </p>
        </div>
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">3. Adoptez un mode de vie sain</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Maintenez une alimentation équilibrée riche en fibres et faible en
              sucres rapides.
            </li>
            <li>
              Pratiquez une activité physique régulière, comme 30 minutes de
              marche par jour.
            </li>
            <li>
              Surveillez votre poids et essayez de maintenir un IMC dans les
              normes recommandées.
            </li>
          </ul>
        </div>
        <div className="p-4 bg-[#cfebf0] rounded-lg">
          <h3 className="font-semibold">4. Restez informé(e)</h3>
          <p className="text-gray-600">
            Apprenez-en davantage sur le diabète, ses symptômes et les moyens de
            le gérer en consultant des ressources fiables.
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
