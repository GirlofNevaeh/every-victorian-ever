export type SiteImage = { src: string; width: number; height: number }

export const siteImages: SiteImage[] = [
  { src: '/art/castle.jpg', width: 1200, height: 675 },
  { src: '/art/homes.jpg', width: 1200, height: 675 },
  { src: '/art/inventions.jpg', width: 1200, height: 1200 },
  { src: '/art/lamps.jpg', width: 1200, height: 675 },
  { src: '/art/palace.jpg', width: 1200, height: 675 },
  { src: '/art/school.jpg', width: 1200, height: 675 },
  { src: '/art/ships.jpg', width: 1200, height: 675 },
  { src: '/art/train.jpg', width: 1200, height: 675 },
  { src: '/photos/balmoral.jpg', width: 1200, height: 793 },
  { src: '/photos/belfast.jpg', width: 960, height: 698 },
  { src: '/photos/cardiff.jpg', width: 960, height: 632 },
  { src: '/photos/dublin.jpg', width: 960, height: 712 },
  { src: '/photos/edinburgh.jpg', width: 607, height: 800 },
  { src: '/photos/glasgow.jpg', width: 960, height: 571 },
  { src: '/photos/london.jpg', width: 861, height: 574 },
  { src: '/photos/palace.jpg', width: 960, height: 519 },
  { src: '/photos/quarry.jpg', width: 960, height: 733 },
  ...Array.from({ length: 20 }, (_, index) => ({
    src: `/faces/${String(index + 1).padStart(2, '0')}.jpg`,
    width: 280,
    height: 280,
  })),
]

export const imageBySrc = Object.fromEntries(siteImages.map((image) => [image.src, image])) as Record<string, SiteImage>
