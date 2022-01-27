let api_link = 'https://kitsu.io/api/edge/anime';

fetch(api_link)
    .then(
        function(response) {
            if (!response.ok) {
                console.log('ERROR' + response.status);
                return;
            }

            response.json().then(function(json) {
                console.log(json);
                
                for(let i = 0; i < 4; i++) {
                    let title = 'title' + (i+1);
                    let synopsis = 'synopsis' + (i+1);
                    let banner = 'banner' + (i+1);

                    document.getElementById(title).innerHTML = json.data[i].attributes.canonicalTitle;
                    document.getElementById(synopsis).innerHTML = json.data[i].attributes.synopsis;
                    document.getElementById(banner).src = json.data[i].attributes.coverImage.original;
                }

            });
    })
    .catch(
        function(error) {
            console.log('ERROR 404');
        }
    );