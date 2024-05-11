function stringChop(str, size) {
    let output = [];
    let i = 0;
    let arr = str.split("");

    while (i < arr.length) {
        let chunk = "";
        for (let j = 0; j < size && i < arr.length; j++) {
            chunk += arr[i++];
        }
        output.push(chunk);
    }

    return output;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
