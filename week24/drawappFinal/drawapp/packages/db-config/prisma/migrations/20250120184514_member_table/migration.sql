/*
  Warnings:

  - You are about to drop the `_RoomToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_B_fkey";

-- DropTable
DROP TABLE "_RoomToUser";

-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "membersId" TEXT NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_membersId_fkey" FOREIGN KEY ("membersId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
