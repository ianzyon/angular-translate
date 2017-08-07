const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

// listen gera um server de http na porta informada
app.listen(port,
    () =>{
        console.log(`Server is up on port ${port}`);
    }
);


// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));