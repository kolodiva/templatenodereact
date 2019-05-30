function getGeo() {

    // if (typeof(ymaps) === 'undefined') {$('#citiesListVitied').html('город не опред.'); return} 

	ymaps.ready(function() {

		let geolocation = ymaps.geolocation;

		geolocation.get( {provider: 'yandex',
							
                            apikey: 'AHrt3VkBAAAA8BlbBgIAZrCxDUN8-eQCHoslyWSOxn4f9BsAAAAAAAAAAAC8q4yumY24XBwVMQ3SeWvWgcbYnw=='

                        } ).then(function(res) { 

                                let nameCity    = res.geoObjects.get(0).properties.get('name');   
                                let descr       = res.geoObjects.get(0).properties.get('description');   

			     $('#yourCity').html(nameCity);

                    //В контроллере вызываетмя метод INDEX ибо  GET
                    $.ajax({
                        url: 'gregory/saveCity',
                        data: { id: nameCity + '/' + descr },
                        headers: {},
                        type: 'get',

                        /*success: (response, status, xhr) => {this.setState({ items: response }); localStorage.myHeader = xhr.getResponseHeader('myHeader'); },*/
                        success: (response, status, xhr) => { 

                            //let res = response.cities.map((rec) => { return('<p class="pl-3">' + rec.count + '/ ' + rec.city + '/ ' + rec.region + '</p>') });

                            //$('#citiesListVitied').html(res) 
 
                             //<div id='citiesListVitied'></div>

                        },

                        error: (error) => {}
                    });

		}, function(e) {

            $('#yourCity').html('');
			
			//console.log(e)

		}); 
	});

}

export default getGeo