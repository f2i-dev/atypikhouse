import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import TripsClient from "../trips/TripsClient";
import HistorysClient from "./HistoryClient";
import getReservationHistory from "../actions/getReservationHistory";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly> 
        <EmptyState
          title="Non autorisé"
          subtitle="Veuillez vous connecter"
        />
      </ClientOnly>
    )
  }

  // Récupère les réservations actuelles de l'utilisateur
  const reservations = await getReservations({ authorId: currentUser.id });

  // Récupère l'historique des réservations de l'utilisateur
  const reservationHistory = await getReservationHistory(currentUser.id);

  if (reservations.length === 0 && reservationHistory.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Aucune réservation trouvée"
          subtitle="Vous n'avez aucune réservation active ou passée."
        />
      </ClientOnly>
    );
  }

  const safeReservations = reservations.map(reservation => ({
    ...reservation,
    createdAt: reservation.createdAt.toString(),
    startDate: reservation.startDate.toString(),
    endDate: reservation.endDate.toString(),
    listing: {
      ...reservation.listing,
      createdAt: reservation.listing.createdAt.toString(),
    },
  }));

  const safeReservationHistory = reservationHistory.map(reservation => ({
    ...reservation,
    createdAt: reservation.createdAt.toISOString(),
    startDate: reservation.startDate.toISOString(),
    endDate: reservation.endDate.toISOString(),
    listing: {
      ...reservation.listing,
      createdAt: reservation.listing.createdAt.toISOString(),
    },
  }));

  return (
    <ClientOnly>
      <div>
        {safeReservations.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Réservations actuelles</h2>
            <TripsClient
              reservations={safeReservations}
              currentUser={currentUser}
            />
          </div>
        )}

        {safeReservationHistory.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Historique des réservations</h2>
            <HistorysClient
              reservations={safeReservationHistory}
              currentUser={currentUser}
            />
          </div>
        )}
      </div>
    </ClientOnly>
  );
}
 
export default ReservationsPage;