'use client';
import Image from 'next/image';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Modal from '../components/modals/Modal';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

interface ProfileClientProps {
  currentUser: {
    image?: string | null;
    name: string | null;
    email: string | null;
  };
}

const ProfileClient: React.FC<ProfileClientProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete('/api/profil/delete');
      toast.success('Compte supprimé avec succès');
      signOut({ callbackUrl: '/' });
    } catch (error) {
      toast.error('Erreur lors de la suppression du compte');
    }
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 outline-none">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center font-bold mb-4">Mon Profil</h1>
          <div className="flex flex-col items-center mb-4">
            <div className="relative w-[90px] h-[90px] overflow-hidden rounded-full">
              <Image
                src={currentUser.image || '/images/placeholder.jpg'}
                alt="Profile user"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <h2 className="text-xl mt-2">{currentUser.name}</h2>
          </div>
          <div className="space-y-4">
            <p><strong>Email : </strong> {currentUser.email}</p>
            <p><strong>Nom : </strong> {currentUser.name}</p>
            <Button label="Modifier le profil" small onClick={() => router.push('/profil/edit')} />
          </div>

          <div className="flex flex-col gap-2 py-3">
            <div className="flex flex-row items-center gap-4 w-full">
              <Button label="Se déconnecter" outline small onClick={() => signOut({ callbackUrl: '/' })} />
              <Button 
                label="Supprimer le compte" 
                small 
                onClick={handleDeleteClick}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onSubmit={handleConfirmDelete}
        title="Confirmer la suppression"
        body={<p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>}
        actionLabel="Supprimer"
        secondaryActionLabel="Annuler"
        secondaryAction={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
};

export default ProfileClient;
