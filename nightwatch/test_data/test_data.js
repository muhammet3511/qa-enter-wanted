module.exports = {
    goodData: {
        input: {
            
            hdr: '123456789',
            mke: 'MK',
            oai: 'CHI1234SI',
            nam: 'Har',
            sex: 'M',
            rac: 'W',
            hgt: '607',
            wgt: '200',
            hai: 'grey',
            off: 'Arson',
            dow: '11172017',
            dln: 'a',
            dlet: 'UT',
            lsp: '09102017',
            lc: '12345',
            ly: 'UT',
            dls: '2009',

            
        }, 
        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            textBlobText: '123456789.MK.CHI1234SI.Har.M.W.607.200.grey.Arson.11172017.a.UT.09102017.12345.UT.2009'
        }
    
    },
    badData: {
        //the 'key' for the fields should match the key of the selectors in css_selectors
        input: {
            hdr: '12345',
            mke: 'M',
            oai: 'CHI',
            nam: 'Ha',
            sex: '',
            rac: '',
            hgt: '07',
            wgt: '00',
            hai: 'wn',
            off: 'on',
            dow: '05',
            oln: '',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        }
    }
}