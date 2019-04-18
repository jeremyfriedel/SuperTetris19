const piecesNames = ['S piece', 'Z piece', 'Square', 'T piece', 'J piece', 'L piece', 'Line piece'];

export const colors = ['#349E00', '#EC003F', '#FEDE1B', '#A737FA', '#2131F8', '#FB700A', '#03E5FF'];
export const dropColors = ['#194204', '#38000A', '#3D3107', '#27003B', '#04003C', '#3B1103', '#05383A'];


export const resetPieceQueue = function () {
    this.pieceQueue = [Math.floor(Math.random() * this.pieces.length),
        Math.floor(Math.random() * this.pieces.length)
    ];
};

export const piecesArr = [
    [0, 1, 1, 0,
        1, 1
    ],
    [1, 1, 0, 0,
        0, 1, 1
    ],
    [1, 1, 0, 0,
        1, 1
    ],

    [0, 1, 0, 0,
        1, 1, 1
    ],
    [1, 1, 1, 0,
        0, 0, 1
    ],
    [1, 1, 1, 0,
        1
    ],
    [1, 1, 1, 1]

];
export const previewArrays = [
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [0, 0, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

];


export const randomPiece = function (givenPiece, givenId) {
    if (givenPiece === undefined) {
        this.pieceType = this.pieceQueue.shift();
        this.pieceQueue.push(Math.floor(Math.random() * this.pieces.length));
        this.piece = this.pieces[this.pieceType];
        this.renderNextPiece(this.pieceQueue[0], this.pieceQueue[0]);
    } else {
        this.pieceType = givenId;
        this.piece = givenPiece;
    }






    for (let yInd = 0; yInd < this.sizeOfPiece; yInd++) {
        this.activePiece[yInd] = [];
        for (let xInd = 0; xInd < this.sizeOfPiece; xInd++) {
            let ind = 4 * yInd + xInd;
            if (this.piece[ind] !== undefined && this.piece[ind]) {
                this.activePiece[yInd][xInd] = this.pieceType + 1;
            } else {
                this.activePiece[yInd][xInd] = 0;
            }
        }

    }

    this.notFalling = false;
    this.activeX = 5;
    this.activeY = 0;

    this.preDrop = this.activePiece;
    this.dropX = this.activeX;
    this.dropY = this.activeY;



};