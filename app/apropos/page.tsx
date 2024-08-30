'use client';

import React from 'react';

const Apropos = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* En-tête */}
      <header className="bg-green-700 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">À Propos d&apos;AtypikHouse</h1>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Notre Philosophie</h2>
          <p className="mb-4">
            AtypikHouse est bien plus qu&apos;une simple entreprise de location d&apos;habitats alternatifs. C&apos;est un mode de vie, une philosophie qui prône l&apos;harmonie avec la nature, le respect de l&apos;environnement et le partage d&apos;expériences authentiques. Chaque hébergement proposé, qu&apos;il s&apos;agisse d&apos;une cabane dans les arbres, d&apos;une yourte ou d&apos;une cabane flottante, est soigneusement sélectionné pour son caractère unique et son empreinte écologique minimale.
          </p>
          <p>
            Chez AtypikHouse, l&apos;accueil chaleureux et la convivialité sont au cœur de chaque séjour. Les propriétaires, véritables passionnés, ouvrent leurs portes aux voyageurs du monde entier, les invitant à découvrir la beauté de la nature et à créer des souvenirs intemporels.
          </p>
        </section>

        <section className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Informations Légales</h2>
          <ul className="list-disc list-inside">
            <li><strong>Dénomination Sociale :</strong> AtypikHouse SARL</li>
            <li><strong>Siège Social :</strong> 123 Rue des Aventuriers, 60000 Pierrefonds, France</li>
            <li><strong>Statut Juridique :</strong> Société à Responsabilité Limitée (SARL)</li>
            <li><strong>Capital Social :</strong> 10 000€</li>
            <li><strong>Numéro RCS :</strong> Compiègne B 123 456 789</li>
            <li><strong>Numéro SIREN :</strong> 123 456 789</li>
            <li><strong>Numéro SIRET :</strong> 123 456 789 00010</li>
            <li><strong>APE/NAF :</strong> 6201Z (Programmation informatique)</li>
            <li><strong>Numéro de TVA Intracommunautaire :</strong> FR12 345678901</li>
            <li><strong>Responsable de la Publication :</strong> Jean Dupont</li>
            <li><strong>Contact :</strong> <a href="mailto:jean.dupont@atypikhouse.com" className="text-green-700 hover:underline">jean.dupont@atypikhouse.com</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Apropos;
