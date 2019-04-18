export const handleSavePiece = function() {
    if (this.savedPiece) {
        this.oldPiece = this.piece;
        this.oldPieceType = this.pieceType;
        this.randomPiece(this.savedPiece, this.savedId);
        this.savedPiece = this.oldPiece;
        this.savedId = this.oldPieceType;

    } else {
        this.savedPiece = this.piece;
        this.savedId = this.pieceType;
        this.randomPiece();

    }

    this.renderSavedPiece(this.savedId, this.savedId);

};
