;(function() { 
	JSON = JSON || {};

	JSON.tryParse = function(jsonString) {
		try {
		   return JSON.parse(jsonString);
		} catch(e) {
		   return undefined;
		}
	};
	
	function Address(cep, city, neighborhood, street, state, ibge) {
		return {
			cep: cep || '',
			city: city || '',
			neighborhood: neighborhood || '',
			street: street || '',
			state: state || '',
			ibge: ibge || ''
		};
	}
	
	function doRequest(url, source, callback) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", function () {
			var ret = JSON.tryParse(this.responseText),
				address = undefined;
			
			if(!ret || !!ret.error) {
				return address;
			}

			if(source === ls_cep.sources.postmon) {
				address = Address(ret.cep, 
							   	  ret.cidade, 
							   	  ret.bairro, 
								  ret.logradouro, 
							   	  ret.estado_info.nome, 
							   	  ret.estado_info.codigo_ibge);
			}
			
			if(source === ls_cep.sources.viacep) {
				address = Address(ret.cep, 
								  ret.localidade, 
							   	  ret.bairro, 
								  ret.logradouro, 
							   	  ret.uf, 
							   	  ret.ibge);
			}

			console.log(address);

			if(!!callback && typeof callback == 'function') callback(address);
		});
		oReq.open("GET", url);
		oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		oReq.send();
	}

	var ls_cep = {
		sources: {
			postmon: 'postmon',
			viacep: 'viacep'
		},
		isValid: function(cep) {
			return !!cep && cep.match(/^[0-9]{5}-?[0-9]{3}$/);
		},
		getAddress(cep, source, callback) {
			if(!ls_cep.isValid(cep)) {
				throw 'The CEP format is not valid (Valid CEP formats: 99999999 or 99999-999)'
			}
			
			cep = cep.replace('-', '')	
			
			source = source || ls_cep.sources.postmon;
			
			if(source !== ls_cep.sources.postmon && source !== ls_cep.sources.viacep) {
				throw 'The source is not valid (Valid sources: "' + ls_cep.sources.postmon + '" and "' + ls_cep.sources.viacep + '")';
			}
						
			if(source === ls_cep.sources.postmon) {
				doRequest('https://api.postmon.com.br/v1/cep/' + cep, ls_cep.sources.postmon, callback);
			}
			
			if(source === ls_cep.sources.viacep) {
				doRequest('https://viacep.com.br/ws/' + cep + '/json/', ls_cep.sources.viacep, callback);
			}
		}
	}

	window.ls_cep = ls_cep;
})();