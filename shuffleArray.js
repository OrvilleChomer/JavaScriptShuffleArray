
/************************************************************** 
   Return a Randomly Shuffled version of a JavaScript 
   indexed array    that was inputted...

   The optional 2nd param is good for stuff like randomized messages.
   To make it impossible for the first item in the shuffled
   array to be the Same as the last item in the previously
   shuffled array!
 **************************************************************/
 function shuffleIndexedArray(inpArr,niStartPadding) {
    let wrkArr = [];
    let outArr = [];
    let nMax = inpArr.length;
    let nStartPadding = 0;
    
    if (typeof niStartPadding === "number") {
        nStartPadding = niStartPadding;
    } // end if

    // we don't modify the original input array...

    for (let n=0;n<nMax-nStartPadding;n++) {
        wrkArr.push(inpArr[n]);
    } // next n

    do {
        let idx = intRnd(wrkArr.length);
        outArr.push(wrkArr[idx]);
        wrkArr.splice(idx,1); // remove from wrkArr[] !
    } while(wrkArr.length > 0)

    if (nStartPadding > 0) {
        let paddingArr = [];
        for (let n=nMax-nStartPadding;n<nMax;n++) {
            paddingArr.push(inpArr[n])
        } // next n

        let shuffledPaddingArr = shuffleIndexedArray(paddingArr)
        outArr = outArr.concat(shuffledPaddingArr);
    } // end if (nStart > 0)

    return outArr; // return resulting array

    function intRnd(nMax2) {
        return Math.floor(Math.random() * nMax2);
    } // end of function intRnd()

 } // end of shuffleIndexedArray()
