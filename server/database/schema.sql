-- ============================================
-- Smok&Co - Schema de la base de donnees
-- ============================================

CREATE DATABASE IF NOT EXISTS smok_co CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE smok_co;

-- ============================================
-- Table utilisateurs
-- ============================================
CREATE TABLE IF NOT EXISTS utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  nom VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- Table produits
-- ============================================
CREATE TABLE IF NOT EXISTS produits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  description TEXT,
  prix DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(255),
  stock INT NOT NULL DEFAULT 0,
  categorie ENUM('e-liquide', 'box', 'resistance', 'kit', 'clearomiseur') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- Table panier_items
-- ============================================
CREATE TABLE IF NOT EXISTS panier_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  utilisateur_id INT NOT NULL,
  produit_id INT NOT NULL,
  quantite INT NOT NULL DEFAULT 1,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
  FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_produit (utilisateur_id, produit_id)
);

-- ============================================
-- Table commandes
-- ============================================
CREATE TABLE IF NOT EXISTS commandes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  utilisateur_id INT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
);

-- ============================================
-- Table commande_items
-- ============================================
-- Note : prix_unitaire fige le prix paye au moment de l'achat,
-- independamment d'une future evolution du prix catalogue (produits.prix)
CREATE TABLE IF NOT EXISTS commande_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  commande_id INT NOT NULL,
  produit_id INT NOT NULL,
  quantite INT NOT NULL,
  prix_unitaire DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (commande_id) REFERENCES commandes(id) ON DELETE CASCADE,
  FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE RESTRICT
);