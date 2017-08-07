const port = process.env.PORT || 3000;

// listen gera um server de http na porta informada
app.listen(port,
    () =>{
        console.log(`Server is up on port ${port}`);
    }
);