export type CigaretteElectronique = {
  id: string;
  imgsrc ?: string;
  modele: string;
  marque: string;
  type: "Pod" | "MTL" | "DTL" | "Box mod";
  puissance: number;
  resistance: string;
  batterie: string;
  contenance: number | null;
  prix: number;
  niveau: "Débutant" | "Intermédiaire" | "Avancé" | "Expert";
};



export const cigarettesElectroniques: CigaretteElectronique[] = [
  {id:"1", imgsrc: "https://gtvape.co.za/wp-content/uploads/2022/07/vuse-epod-2-device-kit_PNG.png", modele: "Vuse ePod 2",           marque: "Vuse",       type: "Pod",     puissance: 12,  resistance: "1.8",       batterie: "650 mAh",  contenance: 1.9, prix: 9.90,  niveau: "Débutant" },
  {id:"2", imgsrc: "innokin-eq-fltr.jpg", modele: "Innokin EQ FLTR",        marque: "Innokin",    type: "MTL",     puissance: 13,  resistance: "0.9 - 1.2", batterie: "1000 mAh", contenance: 4,   prix: 29.90, niveau: "Débutant" },
  {id:"3", imgsrc: "aspire-pocketx.jpg", modele: "Aspire PocketX",         marque: "Aspire",     type: "MTL",     puissance: 18,  resistance: "1.2",       batterie: "1500 mAh", contenance: 4,   prix: 34.90, niveau: "Débutant" },
  {id:"4", imgsrc: "uwell-caliburn-g3.jpg", modele: "Uwell Caliburn G3",      marque: "Uwell",      type: "Pod",     puissance: 25,  resistance: "0.9 - 1.2", batterie: "900 mAh",  contenance: 2.5, prix: 27.90, niveau: "Débutant" },
  {id:"5", imgsrc: "innokin-kroma-z.jpg", modele: "Innokin Kroma-Z",        marque: "Innokin",    type: "DTL",     puissance: 40,  resistance: "0.35 - 0.5",batterie: "2000 mAh", contenance: 4.5, prix: 44.90, niveau: "Intermédiaire" },
  {id:"6", imgsrc: "smok-nord-5.jpg", modele: "SMOK Nord 5",            marque: "SMOK",       type: "Pod",     puissance: 80,  resistance: "0.3 - 0.6", batterie: "2000 mAh", contenance: 5,   prix: 39.90, niveau: "Intermédiaire" },
  {id:"7", imgsrc: "voopoo-drag-s-pro.jpg", modele: "Voopoo Drag S Pro",      marque: "Voopoo",     type: "Pod",     puissance: 80,  resistance: "0.15 - 0.3",batterie: "2600 mAh", contenance: 6.5, prix: 49.90, niveau: "Intermédiaire" },
  {id:"8", imgsrc: "aspire-nautilus-prime-x.jpg", modele: "Aspire Nautilus Prime X",marque: "Aspire",     type: "MTL",     puissance: 30,  resistance: "0.6 - 1",   batterie: "2000 mAh", contenance: 4,   prix: 52.90, niveau: "Intermédiaire" },
  {id:"9", imgsrc: "vaporesso-gen-200.jpg", modele: "Vaporesso GEN 200",      marque: "Vaporesso",  type: "Box mod", puissance: 200, resistance: "0.03 - 5",  batterie: "2×21700",  contenance: null,prix: 59.90, niveau: "Avancé" },
  {id:"10", imgsrc: "geekvape-aegis-x.jpg", modele: "GeekVape Aegis X",       marque: "GeekVape",   type: "Box mod", puissance: 200, resistance: "0.1 - 3.5", batterie: "2×18650",  contenance: null,prix: 64.90, niveau: "Avancé" },
  {id:"11", imgsrc: "smok-morph-3.jpg", modele: "SMOK Morph 3",           marque: "SMOK",       type: "Box mod", puissance: 230, resistance: "0.1 - 2.5", batterie: "2×18650",  contenance: null,prix: 74.90, niveau: "Expert" },
  {id:"12", imgsrc: "lost-vape-ursa-quest.jpg", modele: "Lost Vape Ursa Quest",   marque: "Lost Vape",  type: "DTL",     puissance: 100, resistance: "0.13 - 0.5",batterie: "2×18650",  contenance: 5,   prix: 79.90, niveau: "Avancé" },
];