import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import ProfileClient from "./ProfileClient";
// import Footer from "../components/Footer";

const ProfilePage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly> 
                <EmptyState 
                    title="Vous n'êtes pas autorisé"
                    subtitle="Vous devez vous connecter pour accéder à cette page."
                />
            </ClientOnly>
        )
    }
    const transformedUser = {
        ...currentUser,
        image: currentUser.image || '',
        name: currentUser.name || 'Nom non disponible',
        email: currentUser.email || 'Email non disponible',
    };

    return (
        <>
        <ClientOnly>
            <ProfileClient currentUser={transformedUser} />
        </ClientOnly>
        {/* <Footer /> */}
        </>
    );
};

export default ProfilePage;