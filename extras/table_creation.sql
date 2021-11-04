CREATE TABLE `Merchants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `MerchantName` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `MerchantMenu` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `merchant_id` INT NOT NULL,
  `item_name` VARCHAR(45) NOT NULL,
  `item_description` VARCHAR(45) NULL,
  `item_cost` DOUBLE NOT NULL,
  `qty_avail` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`merchant_id`) REFERENCES Merchants(`id`));

CREATE TABLE `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_fname` VARCHAR(45) NOT NULL,
  `user_lname` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `Transactions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `user_message` VARCHAR(45) NOT NULL,
  `merchant_id` INT NOT NULL,
  `item_id` INT NULL,
  `currency_amnt` INT NULL,
  `recipient_number` VARCHAR(45) NOT NULL,
  `recipient_name` VARCHAR(100) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES Users(`id`),
  FOREIGN KEY (`merchant_id`) REFERENCES Merchants(`id`),
  PRIMARY KEY (`id`));
