
/************************************************************** 
   Return a Randomly Shuffled version of a JavaScript 
   indexed array    that was inputted...

   2nd param is good for stuff like randomized messages.
   To make it impossible for the first item in the shuffled
   array to be the Same as the last item in the previously
   shuffled array!
 **************************************************************/
 function shuffleIndexedArray(inpArr,nStartPadding) {
    let wrkArr = [];
    let outArr = [];
    let nMax = inpArr.length;
    let nStart = 0;
    
    if (typeof nStartPadding === "number") {
        nStart = nStartPadding;
    } // end if

    for (let n=nStart;n<nMax;n++) {
        wrkArr.push(inpArr[n]);
    } // next n

    do {
        let idx = intRnd(wrkArr.length);
        outArr.push(wrkArr[idx]);
        wrkArr.splice(idx,1); // remove from wrkArr[] !
    } while(wrkArr.length > 0)

    if (nStart > 0) {
        let paddingArr = [];
        for (let n=0;n<nStart-1;n++) {
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