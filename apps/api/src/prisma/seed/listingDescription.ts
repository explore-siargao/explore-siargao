import { prisma } from '@/common/helpers/prismaClient'

export const listingDescription = async () => {
  const getListings = await prisma.listing.findMany({
    where: {
      deletedAt: null,
    },
  })
  const createListingDescriptions = await prisma.listingDescription.createMany({
    data: [
      {
        generalDescription: 'general description',
        aboutGuestAccess: 'about guest access',
        aboutSpace: 'About space',
        listingId: getListings[0]?.id,
      },
      {
        generalDescription:
          'Open the complimentary wine and listen to music via retro Marshall speakers. Here custom wood furniture meets textured concrete walls, plush Persian carpets, classic vintage pieces and 60s pop art accents. A refined fusion of industrial and retro features ultimately lends this loft its unique, special character. Perfect for a photogenic boutique art hotel vibe.',
        otherThingsNote:
          'CHECK IN REQUIREMENTS **- Govt ID (passport, drivers license etc)- Covid vaccination card- Required for all adults and children',
        aboutSpace:
          'ALTO RETRO is designed and conceptualized by the owner, all inspired from New York City loft apartments. Highly sought after with features in Spotph, DiscoverMNL, Real Living Magazine and ClicktheCitycom.',
        listingId: getListings[1]?.id,
      },
      {
        generalDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        aboutGuestAccess:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        aboutSpace:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum',
        otherThingsNote: 'other things need to know',
        listingId: getListings[2]?.id,
      },
      {
        generalDescription:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        listingId: getListings[3]?.id,
      },
      {
        generalDescription:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        aboutGuestAccess:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        listingId: getListings[4]?.id,
      },
    ],
  })
  console.log({ createListingDescriptions })
}