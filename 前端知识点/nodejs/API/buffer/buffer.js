function main(){
    var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
    var dup = new Buffer(bin.length);
    bin.copy(dup);
    dup[0]= 0x48;
    console.log(bin);
    console.log(dup);
    console.log(bin.toString('utf-8'));
    console.log(bin[0]);
}


module.exports = main;