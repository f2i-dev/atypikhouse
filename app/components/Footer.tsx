
'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour gérer l'inscription à la newsletter
    console.log('Inscription à la newsletter avec:', email);
    setEmail(''); // Réinitialiser le champ email après inscription
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Liens vers les pages légales */}
        <div className="text-center">
          <ul className="space-y-2">
            <li><a href="/cgv" className="text-white hover:underline">CGV</a></li>
            <li><a href="/cgu" className="text-white hover:underline">CGU</a></li>
            <li><a href="/messages" className="text-white hover:underline">Mes messages</a></li>
            <li><a href="/apropos" className="text-white hover:underline">A propos</a></li>
          </ul>
        </div>

        {/* Droits réservés et Réseaux Sociaux */}
        <div className="text-center">
          <p>Contactez-nous :</p>
          <p>Email : <a href="mailto:servie_client@atypikhouse.com" className="text-blue-400 hover:underline">servie_client@atypikhouse.com</a></p>
          <p>Téléphone : +33 1 23 45 67 89</p><br />
         
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.facebook.com/atypik.house.14/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-blue-500" />
            </a>
            <a href="https://x.com/atypikhouse11" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/atypik.house_g2" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/in/atypik-house-5b36b3236/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white hover:text-blue-600" />
            </a>
          </div><br />
          <p>&copy; 2024 Atypik House. Tous droits réservés.</p>
        </div>

        {/* Formulaire d'Inscription à la Newsletter */}
        <div className="text-center md:text-right">
          
          <form onSubmit={handleNewsletterSignup} className="mt-4">
            <label htmlFor="email" className="block mb-2 text-sm">
              Inscrivez-vous à notre newsletter :
            </label>
            <div className="flex justify-center md:justify-end gap-2">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="p-2 rounded-md text-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                S&apos;inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
