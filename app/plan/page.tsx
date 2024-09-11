import Link from 'next/link';

const SitemapPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Plan du site</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/properties" className="text-blue-600 hover:underline">
              Propriétés
            </Link>
          </li>
          <li>
            <Link href="/reservations" className="text-blue-600 hover:underline">
              Réservations
            </Link>
          </li>
          <li>
            <Link href="/trips" className="text-blue-600 hover:underline">
              Voyages
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-blue-600 hover:underline">
              Profil
            </Link>
          </li>
          <li>
            <Link href="/mentions" className="text-blue-600 hover:underline">
              Mentions légales
            </Link>
          </li>
          <li>
            <Link href="/cgu" className="text-blue-600 hover:underline">
              CGU
            </Link>
          </li>
          <li>
            <Link href="/cgv" className="text-blue-600 hover:underline">
              CGV
            </Link>
          </li>
          <li>
            <Link href="/apropos" className="text-blue-600 hover:underline">
              À propos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SitemapPage;
