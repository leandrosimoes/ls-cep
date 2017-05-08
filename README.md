# ls-cep
A little CEP (Brasil Postal Code) address search lib using Postmon and ViaCep WebServices

### Install

`bower install ls-cep --save`

### Methods

```javascript
// 'cep' is the postal code
// 'source' is the enum of the source api to search
//   valid sources are:
//      ls_cep.sources.postmon (default) AND ls_cep.sources.viacep
// 'callback' is the function to get the 'address' returned and do what you want
ls_cep.getAddress({
    cep: '15057-220', 
    source: ls_cep.sources.postmon, 
    callback: function(result) { console.log(result); }
});
```

```javascript
// 'cep' is the postal code to be validated
// return 'true' or 'false'
ls_cep.isValid(cep)
```

```javascript
// 'apikey' is your Google Maps Embed Api Key
// 'persist' true or false for save the apikey in localStorage
ls_cep.setUpApiKey(apikey, persist)
```

```javascript
// 'containerId' is the ID of the container of the iframe
// 'mapIframeId' is the ID to be set in iframe
ls_cep.setUpMap(containerId, mapIframeId)
```

```javascript
// 'cep' cep to show the location in the iframe map
// 'mapIframeId' is the ID of the iframe map
ls_cep.setMapCep(mapIframeId, cep)
```

### Usage Sample

```javascript
//15057-220 is a valid CEP from Brazil
ls_cep.getAddress('15057-220', ls_cep.sources.postmon, function(address) { 
    /* callback function */ 
    /* You can use here the setMapCep for example */
    ls_cep.setMapCep('#myIframeMapId', address.cep);
})
```

### Returned Address Object Sample
```javascript
{
    cep: "15057220",
    city: "São José do Rio Preto",
    ibge: "35",
    neighborhood: "Conjunto Habitacional São Deocleciano",
    state: "São Paulo",
    stateInitials: "SP",
    street: "Rua Elizeu Elias de Godoy"
}
```

