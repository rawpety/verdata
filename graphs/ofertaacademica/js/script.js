sparql(
    "SELECT DISTINCT ?carrera ?sede ?universidad ?arancel WHERE { GRAPH <http://verdata.cl/graphs/ofertaacademica> {?c <http://verdata.cl/graphs/ofertaacademica/carrera/nombreCarrera> ?carrera." +
"?c <http://verdata.cl/graphs/ofertaacademica/carrera/hasSede> ?s." +
"?s <http://verdata.cl/graphs/ofertaacademica/sede/nombreSede> ?sede." +
"?s <http://verdata.cl/graphs/ofertaacademica/sede/hasInstitucion> ?i." +
"?i <http://verdata.cl/graphs/ofertaacademica/institucion/nombreInstitucion> ?universidad." +
"?s <http://verdata.cl/graphs/ofertaacademica/sede/region> 'VII REGIÓN'@es." +
"?c <http://verdata.cl/graphs/ofertaacademica/carrera/valorArancel> ?arancel}} HAVING(?arancel > 0) ORDER BY ASC(?arancel) LIMIT 50",
	
     function(data) {
        $.each(data.results.bindings, function(index, value) {
            $('#data').append(
                $('<tr>')
                    .append($('<td>').text(value.carrera.value))
					.append($('<td>').text(value.universidad.value))
					.append($('<td>').text(value.sede.value))
					.append($('<td>').text('VII Región'))
					.append($('<td>').text(value.arancel.value))
            );
        });
    });