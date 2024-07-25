-- CreateTable
CREATE TABLE `Colaborador` (
    `matricula` VARCHAR(8) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `cargo` VARCHAR(50) NOT NULL,
    `setor` VARCHAR(50) NOT NULL,
    `pin` VARCHAR(8) NOT NULL,

    PRIMARY KEY (`matricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Os` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(255) NOT NULL,
    `colaborador` VARCHAR(8) NOT NULL,
    `executor` VARCHAR(8) NULL,
    `abertura` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `encerramento` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `os` INTEGER NOT NULL,
    `colaborador` VARCHAR(8) NOT NULL,
    `comentario` VARCHAR(255) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Os` ADD CONSTRAINT `Os_colaborador_fkey` FOREIGN KEY (`colaborador`) REFERENCES `Colaborador`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Os` ADD CONSTRAINT `Os_executor_fkey` FOREIGN KEY (`executor`) REFERENCES `Colaborador`(`matricula`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_os_fkey` FOREIGN KEY (`os`) REFERENCES `Os`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_colaborador_fkey` FOREIGN KEY (`colaborador`) REFERENCES `Colaborador`(`matricula`) ON DELETE RESTRICT ON UPDATE CASCADE;
