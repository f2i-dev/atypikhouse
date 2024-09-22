import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
  page?: number;  // Ajoute la pagination
  limit?: number; // Nombre d'éléments par page
}

export default async function getListings(
  params: IListingsParams
) {
  try {
    const {
      userId,
      roomCount, 
      guestCount, 
      bathroomCount, 
      locationValue,
      startDate,
      endDate,
      category,
      page = 1,  // Valeur par défaut pour la page
      limit = 5, // Valeur par défaut pour la limite
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (roomCount) {
      query.roomCount = {
        gte: +roomCount
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate }
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate }
              }
            ]
          }
        }
      };
    }

    // Récupération des annonces avec pagination
    const [listings, totalCount] = await Promise.all([
      prisma.listing.findMany({
        where: query,
        orderBy: {
          createdAt: 'desc'
        },
        skip: (page - 1) * limit, // Calculer le décalage
        take: limit, // Limiter le nombre d'éléments récupérés
      }),
      prisma.listing.count({ where: query }) // Compter le nombre total d'annonces
    ]);

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    const totalPages = Math.ceil(totalCount / limit); // Calculer le nombre total de pages

    return { listings: safeListings, totalPages }; // Retourner les annonces et le nombre de pages
  } catch (error: any) {
    throw new Error(error);
  }
}
