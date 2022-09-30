function Produit(nom, quantite, prixAchatHT, prixVenteHT, type, degre) {
    this.nom = nom;
    this.quantite = Number(quantite);
    this.prixAchatHT = Number(prixAchatHT);
    this.prixVenteHT = Number(prixVenteHT);
    this.type = type;
    this.degre = degre
}

Produit.prototype.calculerMargeHT = function () {
    return this.prixVenteHT - this.prixAchatHT;
}

Produit.prototype.calculerPVTTC = function () {
    inputTVA19 = 19.5;
    return this.prixVenteHT / 1 + (inputTVA19);
}