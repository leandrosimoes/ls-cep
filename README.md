# ls-cep
A little CEP (Brasil Postal Code) address search lib using Postmon and ViaCep WebServices

### Install

`bower install ls-cep --save`

### Methods

```javascript
// 'cep' is the postal code
// 'source' is the enum of the source api to search
//   valid sources are:
//      ls_cep.sources.posmon (default) AND ls_cep.sources.viacep
// 'callback' is the function to get the 'address' returned and do what you want
ls_cep.getAddress(cep, source, callback)
```

### Usage Sample

```javascript
//15057-220 is a valid CEP from Brazil
ls_cep.getAddress('15057-220', ls_cep.sources.postmon, function(address) { /* callback function */ })
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

