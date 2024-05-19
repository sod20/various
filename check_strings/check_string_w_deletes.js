function removeHash(text) {
    let arr = text.split('');
    for(let i=0 ; i < arr.length ; i++){
        if(arr[i] == '#') {
            if (i-1 >= 0) arr[i-1] = '';
            arr[i] = '';
        }
    }
    return arr.join('');
}

// Test
console.log( removeHash('hew#llo') == removeHash('helk#lo') );