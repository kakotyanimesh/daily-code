/*
  Warnings:

  - Added the required column `membersId` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "membersId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Rooms" ADD CONSTRAINT "Rooms_membersId_fkey" FOREIGN KEY ("membersId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
