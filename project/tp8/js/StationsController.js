angular.module('Tp8.controllers.Stations', [])

.controller('StationsController', function ($scope, $sce) {
    var self = this;
    self.stationOnMap = {
        station: '',
        mapUrl: ''
    };
    self.getStationOnMap = function (station) {
        self.stationOnMap.mapUrl = $sce.trustAsResourceUrl('https://maps.google.com/maps?q=' + station.LATITUDE + ',' + station.LONGITUDE + '&hl=es;z=14&amp&output=embed');
        self.stationOnMap.station = station.ESTACAO;
    };
    self.stationsList = [{
        "LATITUDE": "-22.91151930177184",
        "ESTACAO": "Antonio Carlos",
        "LONGITUDE": "-43.17207243892977"
    }, {
        "ESTACAO": "Camerino",
        "LATITUDE": "-22.90175448996652",
        "LONGITUDE": "-43.1844290853725"
    }, {
        "ESTACAO": "Candelária",
        "LONGITUDE": "-43.17877415196782",
        "LATITUDE": "-22.90178967827643"
    }, {
        "LATITUDE": "-22.90832188545775",
        "ESTACAO": "Carioca",
        "LONGITUDE": "-43.17653507937557"
    }, {
        "LATITUDE": "-22.90288995375862",
        "ESTACAO": "Central",
        "LONGITUDE": "-43.19317064103734"
    }, {
        "LATITUDE": "-22.89465870308822",
        "LONGITUDE": "-43.19788406113564",
        "ESTACAO": "Cidade do Samba"
    }, {
        "LATITUDE": "-22.91109273219366",
        "ESTACAO": "Cinelândia",
        "LONGITUDE": "-43.17551476531517"
    }, {
        "ESTACAO": "Cordeiro da Graça",
        "LATITUDE": "-22.89688340150024",
        "LONGITUDE": "-43.20394200390334"
    }, {
        "LATITUDE": "-22.89796720506928",
        "LONGITUDE": "-43.20514579710708",
        "ESTACAO": "Equador"
    }, {
        "ESTACAO": "Gamboa",
        "LONGITUDE": "-43.1995213755762",
        "LATITUDE": "-22.89805363641611"
    }, {
        "LONGITUDE": "-43.19127169595463",
        "LATITUDE": "-22.89569257504257",
        "ESTACAO": "Harmonia"
    }, {
        "ESTACAO": "Itamaraty",
        "LONGITUDE": "-43.18778342035339",
        "LATITUDE": "-22.90327475613017"
    }, {
        "LATITUDE": "-22.8962383406517",
        "LONGITUDE": "-43.19398557739049",
        "ESTACAO": "José Bonifácio"
    }, {
        "LONGITUDE": "-43.18174738391816",
        "LATITUDE": "-22.89605852472034",
        "ESTACAO": "Parada dos Museus"
    }, {
        "ESTACAO": "Parada dos Navios",
        "LATITUDE": "-22.89406608168376",
        "LONGITUDE": "-43.18731639252218"
    }, {
        "ESTACAO": "Pereira Reis",
        "LONGITUDE": "-43.20187863236369",
        "LATITUDE": "-22.896721434253"
    }, {
        "LATITUDE": "-22.90251965636226",
        "ESTACAO": "Praia Formosa",
        "LONGITUDE": "-43.2083258015693"
    }, {
        "LONGITUDE": "-43.17340107230366",
        "LATITUDE": "-22.90281189044674",
        "ESTACAO": "Praça XV"
    }, {
        "LATITUDE": "-22.89762233136527",
        "ESTACAO": "Providência",
        "LONGITUDE": "-43.19692019997132"
    }, {
        "LONGITUDE": "-43.1779556475428",
        "LATITUDE": "-22.90517633964357",
        "ESTACAO": "Rio Branco"
    }, {
        "ESTACAO": "Rodoviária1",
        "LONGITUDE": "-43.20750325225787",
        "LATITUDE": "-22.89906062221549"
    }, {
        "LATITUDE": "-22.89900466133007",
        "ESTACAO": "Rodoviária2",
        "LONGITUDE": "-43.20782297249529"
    }, {
        "LONGITUDE": "-43.18687555257358",
        "LATITUDE": "-22.90672516505393",
        "ESTACAO": "Saara"
    }, {
        "LONGITUDE": "-43.18145968265382",
        "LATITUDE": "-22.90029647803056",
        "ESTACAO": "Santa Rita"
    }, {
        "LATITUDE": "-22.89558754182875",
        "LONGITUDE": "-43.20042384585742",
        "ESTACAO": "Santo Cristo"
    }, {
        "LATITUDE": "-22.91224989254497",
        "ESTACAO": "Santos Dumont",
        "LONGITUDE": "-43.16747690117928"
    }, {
        "LATITUDE": "-22.90529611276829",
        "ESTACAO": "Sete de setembro",
        "LONGITUDE": "-43.17763978476273"
    }, {
        "LATITUDE": "-22.89944700512075",
        "ESTACAO": "São Bento",
        "LONGITUDE": "-43.17952784846975"
    }, {
        "ESTACAO": "São Diogo",
        "LATITUDE": "-22.90704425027637",
        "LONGITUDE": "-43.20862128248937"
    }, {
        "ESTACAO": "Tiradentes",
        "LATITUDE": "-22.90639088768824",
        "LONGITUDE": "-43.1828388760534"
    }, {
        "LATITUDE": "-22.8931413211055",
        "LONGITUDE": "-43.19039624848561",
        "ESTACAO": "Utopia"
    }, {
        "LATITUDE": "-22.89888348339497",
        "LONGITUDE": "-43.19963396639398",
        "ESTACAO": "Vila Olímpica"
    }];
});