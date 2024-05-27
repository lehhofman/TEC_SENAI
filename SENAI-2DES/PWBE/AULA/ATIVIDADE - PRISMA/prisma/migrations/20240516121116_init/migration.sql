-- CreateTable
CREATE TABLE `Destino` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `destino` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PontosTuristico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ponto` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `destinoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hotel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hotel` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `avaliacao` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `site` VARCHAR(191) NOT NULL,
    `destinoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HotelToPontosTuristico` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_HotelToPontosTuristico_AB_unique`(`A`, `B`),
    INDEX `_HotelToPontosTuristico_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PontosTuristico` ADD CONSTRAINT `PontosTuristico_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HotelToPontosTuristico` ADD CONSTRAINT `_HotelToPontosTuristico_A_fkey` FOREIGN KEY (`A`) REFERENCES `Hotel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HotelToPontosTuristico` ADD CONSTRAINT `_HotelToPontosTuristico_B_fkey` FOREIGN KEY (`B`) REFERENCES `PontosTuristico`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
