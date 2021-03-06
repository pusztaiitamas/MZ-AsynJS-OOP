fetch("https://jsonplaceholder.typicode.com/userss")
    .then(response =>{
        response.json().then(data =>{
            console.log(data);
            if ( !response.ok ){
                throw Error("404 could not get the data")
            } else return data;

        })
    })
    .catch(error =>{
        console.log("Error", Error);
    })


