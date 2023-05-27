// FOR LOOP;
// Set counter to 1
// Break counter when it reached 30
// Increment counter by 1
for (let i = 1; i <= 30; i++) {
    if (i % 21 === 0) {
        console.log('SaveBonk');
    } else if (i % 3 === 0) {
        console.log('Save');
    } else if (i & 5 === 0) {
        console.log('Bonk');
    } else {
        console.log(i)
    }
}
    // IF number MOD 21 === 0
    // print 'SaveBonk'
    // ELSE IF number MOD 3 === 0
    // print 'Save'
    // ELSE IF number MOD 7 === 0
    // print 'Bonk'
    // ELSE
    // print number