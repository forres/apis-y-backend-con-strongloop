'use strict';
angular.module('ngLocale', [], ['$provide', function($provide) {
    var PLURAL_CATEGORY = {
        ZERO: 'zero',
        ONE: 'one',
        TWO: 'two',
        FEW: 'few',
        MANY: 'many',
        OTHER: 'other'
    };
    $provide.value('$locale', {
        'DATETIME_FORMATS': {
            'AMPMS': [
                'a. m',
                'p. m'
            ],
            'DAY': [
                'domingo',
                'lunes',
                'martes',
                'mi\u00e9rcoles',
                'jueves',
                'viernes',
                's\u00e1bado'
            ],
            'MONTH': [
                'enero',
                'febrero',
                'marzo',
                'abril',
                'mayo',
                'junio',
                'julio',
                'agosto',
                'septiembre',
                'octubre',
                'noviembre',
                'diciembre'
            ],
            'SHORTDAY': [
                'dom',
                'lun',
                'mar',
                'mi\u00e9',
                'jue',
                'vie',
                's\u00e1b'
            ],
            'SHORTMONTH': [
                'ENE',
                'FEB',
                'MAR',
                'ABR',
                'MAY',
                'JUN',
                'JUL',
                'AGO',
                'SEPT',
                'OCT',
                'NOV',
                'DIC'
            ],
            "fullDate": "EEEE, d 'de' MMMM 'de' y",
            "longDate": "d 'de' MMMM 'de' y",
            "medium": "dd-MM-y H:mm:ss",
            "mediumDate": "dd-MM-y",
            "mediumTime": "H:mm:ss",
            "short": "dd-MM-yy H:mm",
            "shortDate": "dd-MM-yy",
            "shortTime": "H:mm"
        },
        'NUMBER_FORMATS': {
            'CURRENCY_SYM': '$',
            'DECIMAL_SEP': ',',
            'GROUP_SEP': '.',
            'PATTERNS': [{
                'gSize': 3,
                'lgSize': 3,
                'maxFrac': 3,
                'minFrac': 0,
                'minInt': 1,
                'negPre': '-',
                'negSuf': '',
                'posPre': '',
                'posSuf': ''
            }, {
                'gSize': 3,
                'lgSize': 3,
                'maxFrac': 2,
                'minFrac': 2,
                'minInt': 1,
                'negPre': '\u00a4-',
                'negSuf': '',
                'posPre': '\u00a4',
                'posSuf': ''
            }]
        },
        'id': 'es-cl',
        'pluralCat': function(n, opt_precision) {
            if (n === 1) {
                return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
        }
    });
}]);
