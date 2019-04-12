const KeyHashing = (keyEvent) => {
    const keyHash = {
        37: 'left',
        65: 'left',
        39: 'right',
        68: 'right',
        40: 'down',
        83: 'down',
        38: 'rotate',
        87: 'rotate',
        32: 'drop'
    };
    if (keyHash[ keyEvent.keyCode ] !== undefined ) {
        console.log(keyHash[keyEvent.keyCode]);
        // keyPress(keyHash[keyEvent.keyCode] );
        // render();
    }
};

export default KeyHashing;

