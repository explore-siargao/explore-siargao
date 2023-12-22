/*
  Warnings:

  - You are about to drop the `_ListingToWishGroup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `listingId` to the `WishGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WishGroup` ADD COLUMN `listingId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_ListingToWishGroup`;

-- CreateIndex
CREATE INDEX `WishGroup_listingId_idx` ON `WishGroup`(`listingId`);
