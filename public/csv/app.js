angular
    .module('myApp',['ngSanitize', 'ngCsv'])
    .controller('getData', getData);

function getData($scope) {
    var gen = generate();
    for (var d in gen){
        gen[d].date = gen[d].date.toISOString().slice(0, 10);
        gen[d].tango = gen[d].data.tango;
        gen[d].india = gen[d].data.india;
        gen[d].victor = gen[d].data.victor;
        gen[d].oscar = gen[d].data.oscar;
    }
    //console.log(gen);
    $scope.data = gen;
}

function generate() {
    //console.log("In generate");
    var data = [];

    var names = ['Robert','Orange','Volt','Ink'];

    for(var x = 0; x < (1234); x++) {

        var y = Math.floor(Math.random()*3);

        var z = new Date();

        Math.floor(Math.random() * 2 + 1) == 1 ? z.setDate(x + 1) : '';

        z.setDate(x + 1);

        data.push({

            date : z,

            name : names[ Math.floor(Math.random() * 4) ],

            active : ( (Math.floor(Math.random() * 2 + 1) == 1) ? true : false),

            length : y == 1 ? 60 : y == 2 ? 30 : 15,

            data : {

                tango : Math.random()*20,

                india : Math.random(),

                victor : (Math.random()*20).toFixed(2),

                oscar : Math.floor(Math.random() * (100000 - 5000)) + 5000

            }

        });

    }

    return data;

}