/*
  Warnings:

  - You are about to alter the column `latitude` on the `listing` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to alter the column `longitude` on the `listing` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `listing` MODIFY `latitude` DECIMAL NULL,
    MODIFY `longitude` DECIMAL NULL;
