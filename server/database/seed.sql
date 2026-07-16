-- ============================================
-- Smok&Co - Donnees de demonstration
-- ============================================

USE smok_co;

-- Vide la table avant de reinserer (evite les doublons si relance)
DELETE FROM produits;
ALTER TABLE produits AUTO_INCREMENT = 1;

-- ============================================
-- E-liquides Fighter Fuel (FF) et Petit Nuage (PN)
-- ============================================
INSERT INTO produits (nom, description, prix, image_url, stock, categorie) VALUES
('Uraken 10ml', 'Fraises des bois, grenade et kiwi, une touche de fraicheur glacee', 5.90, '/images/uraken.jpg', 40, 'e-liquide'),
('Seiryuto 50ml', 'Fraise, framboise, cassis et mure, un melange fruite riche et rafraichissant', 14.90, '/images/seiryuto.jpg', 30, 'e-liquide'),
('Katana 10ml', 'Cerise, fruits rouges et fruit du dragon, pour une vape fraiche et genereuse', 5.90, '/images/ff-katana.jpg', 40, 'e-liquide'),
('Yamakasi 50ml', 'Banane et fraise avec une pointe de fraicheur, gourmand et fruite', 14.90, '/images/ff-yamakasi.jpg', 30, 'e-liquide'),
('Dragone Lee 10ml', 'Fruit du dragon facon boisson energisante, punchy et original', 6.50, '/images/ff-dragone-lee.jpg', 35, 'e-liquide'),
('Grenade Pilee 50ml', 'Grenade pilee relevee d\'une touche acidulee, fraiche et fruitee', 13.90, '/images/pn-grenade-pilee.jpg', 30, 'e-liquide'),
('Flocon Presse 10ml', 'Recette mentholee, fraicheur nette et persistante', 5.50, '/images/pn-flocon-presse.jpg', 40, 'e-liquide'),
('La Petite Limo 50ml', 'Notes petillantes facon limonade, legere et desalterante', 13.90, '/images/pn-petite-limo.jpg', 30, 'e-liquide'),
('Grand Canyon 10ml', 'Melange classic tabac/caramel, rond et authentique', 5.50, '/images/pn-grand-canyon.jpg', 40, 'e-liquide'),
('Creme de la Reine 50ml', 'Creme anglaise gourmande, douce et enveloppante', 13.90, '/images/pn-creme-reine.jpg', 30, 'e-liquide');

-- ============================================
-- Box / mods (seuls, sans reservoir)
-- ============================================
INSERT INTO produits (nom, description, prix, image_url, stock, categorie) VALUES
('Box Aegis Solo 2', 'Box resistante et etanche 100W', 39.90, '/images/aegis-solo-2.jpg', 15, 'box'),
('Centaurus M100', 'Box mod 100W batterie 18650 externe, chipset Quest 2.0, ecran TFT 0.96 pouces', 64.90, '/images/centaurus-m100.jpg', 20, 'box'),
('Centaurus P200', 'Box mod 200W double batterie 18650, molette de puissance manuelle, compatible tous reservoirs 510', 79.90, '/images/centaurus-p200.jpg', 15, 'box'),
('Vaporesso GEN 200', 'Box mod double batterie 18650, 220W, chipset AXON 2.0, design compact', 84.90, '/images/vaporesso-gen200.jpg', 15, 'box');

-- ============================================
-- Kits complets (mod + reservoir inclus)
-- ============================================
INSERT INTO produits (nom, description, prix, image_url, stock, categorie) VALUES
('Kit Vuse ePod 2', 'Kit complet pret a l\'emploi, ideal debutant', 19.90, '/images/vuse-epod-2.jpg', 25, 'kit'),
('Centaurus N100', 'Kit complet mod + reservoir Sub Ohm, 100W max, ecran TFT, chipset Quest 2.0', 69.90, '/images/centaurus-n100.jpg', 20, 'kit'),
('Centaurus PM100', 'Pod mod 100W batterie integree 4500mAh, ecran couleur, double mode Boost/Eco', 74.90, '/images/centaurus-pm100.jpg', 18, 'kit'),
('Centaurus E40', 'Kit pod compact 40W, batterie integree 1400mAh, ecran retroeclaire, ideal usage nomade', 39.90, '/images/centaurus-e40.jpg', 25, 'kit'),
('Vaporesso XROS 6', 'Pod MTL/RDL compact, batterie 1800mAh, charge rapide, systeme anti-fuite', 34.90, '/images/vaporesso-xros6.jpg', 30, 'kit'),
('Vaporesso XROS PRO 2', 'Pod haut de gamme, batterie 2000mAh, mode Super Pulse pour une puissance stable', 44.90, '/images/vaporesso-xrospro2.jpg', 25, 'kit'),
('Vaporesso LUXE XR Max 2', 'Pod mod 80W batterie externe 18650/21700, compatible bobines GTX', 59.90, '/images/vaporesso-luxexrmax2.jpg', 20, 'kit'),
('Vaporesso ECO NANO PLUS', 'Pod debutant, reservoir 6ml grande capacite, batterie 1200mAh, tres simple d\'utilisation', 29.90, '/images/vaporesso-econanoplus.jpg', 30, 'kit');

-- ============================================
-- Clearomiseurs (reservoirs seuls)
-- ============================================
INSERT INTO produits (nom, description, prix, image_url, stock, categorie) VALUES
('Centaurus Sub Ohm Tank', 'Reservoir compatible avec les box et kits Centaurus, remplissage par le haut, systeme anti-fuite', 19.90, '/images/centaurus-subohm-tank.jpg', 25, 'clearomiseur'),
('Vaporesso iTank T', 'Reservoir compatible bobines GTi, pour Vaporesso GEN 200 et LUXE XR Max 2', 22.90, '/images/vaporesso-itank-t.jpg', 20, 'clearomiseur'),
('Vaporesso GTX Tank', 'Reservoir compatible bobines GTX, pour Vaporesso LUXE XR Max 2', 18.90, '/images/vaporesso-gtx-tank.jpg', 20, 'clearomiseur');

-- ============================================
-- Resistances de rechange
-- ============================================
INSERT INTO produits (nom, description, prix, image_url, stock, categorie) VALUES
('Resistance Mesh 0.15ohm (x5)', 'Pack de 5 resistances mesh basse resistance', 9.90, '/images/resistance-mesh.jpg', 30, 'resistance'),
('Resistances UB Max (x5)', 'Compatibles avec le Centaurus Sub Ohm Tank, plusieurs valeurs d\'ohms disponibles', 12.90, '/images/resistances-ub-max.jpg', 35, 'resistance'),
('Resistances UB Ultra V4 (x5)', 'Compatibles avec le Centaurus PM100, basse resistance pour un rendu en vapeur dense', 13.90, '/images/resistances-ub-ultra-v4.jpg', 30, 'resistance'),
('Resistances GTX (x5)', 'Compatibles avec le Vaporesso GTX Tank et la serie LUXE', 11.90, '/images/resistances-gtx.jpg', 35, 'resistance'),
('Resistances GTi (x5)', 'Compatibles avec le Vaporesso iTank T', 12.90, '/images/resistances-gti.jpg', 30, 'resistance');