/*
  Warnings:

  - You are about to drop the column `membersId` on the `Rooms` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rooms" DROP CONSTRAINT "Rooms_membersId_fkey";

-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "membersId";
