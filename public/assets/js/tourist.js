console.log(' Tourist Script Loaded')

function addPlace( data ){
   return  `
    <section>
        <a href="place.html#${data.place_id}" class="override">
            <div class="content" >
                <img src="${ (data.image)? data.image : 'https://placeimg.com/640/480/any' }" class="fullwidth"/>
                <br/>
                <h2> ${data.name} </h2>
            </div>
        </a>
    </section>
    `
}

function createPlaces( data ){
    // FOR LOOP SIYA PERO PARA LANG GD SIYA SA ARRAY
    var placeList = ''
    data.map( data => {
        placeList += addPlace( data )
    })
    return placeList
}

$.get('https://api.corvenik.com/api/places')
.done(data => {
  // WHEN SUCCESS
  console.log( data )
  $("#places").html(createPlaces( data ));
})
.fail(() => {
  // WHEN FAILED DO SOMETHING
  alert('Server Error')
})
