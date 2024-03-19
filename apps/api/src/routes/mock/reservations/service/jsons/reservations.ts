export const reservations = [
    {
        id: 1,
        propertyId: 1,
        mainGuestId: 1,
        status: "not_confirmed",
        startDate: "2024-03-19 03:09:52.697",
        endDate: "2024-03-20 03:09:52.697",
        guestList: [
            {
                id: 2,
                firstName: "Caitlyn",
                lastName: " Kiramman",
            },
            {
                id: 3,
                firstName: "Sky",
                lastName: "Young",
            },
        ],
        bookedUnits: [
            {
                id: 1,
                hostId: 5,
            },
            {
                id: 2,
                hostId: 6,
            },
        ],
    },
    {
        id: 2,
        propertyId: 2,
        mainGuestId: 4,
        status: "confirmed",
        startDate: "2024-03-19 03:09:52.697",
        endDate: "2024-03-20 03:09:52.697",
        guestList: [
            {
                id: 5,
                firstName: "Jayce",
                lastName: "Talis",
            },
            {
                id: 6,
                firstName: "Ella",
                lastName: "Purnell",
            },
        ],
        bookedUnits: [
            {
                id: 1,
                hostId: 3,
            },
            {
                id: 2,
                hostId: 4,
            },
        ],
    },
    {
        id: 3,
        propertyId: 3,
        mainGuestId: 7,
        status: "canceled",
        startDate: "2024-03-19 03:09:52.697",
        endDate: "2024-03-20 03:09:52.697",
        guestList: [
            {
                id: 8,
                firstName: "Kevin",
                lastName: "Alejandro",
            },
            {
                id: 9,
                firstName: "Hailee",
                lastName: "Steinfeld",
            },
        ],
        bookedUnits: [
            {
                id: 1,
                hostId: 1,
            },
            {
                id: 2,
                hostId: 2,
            },
        ],
    },
]