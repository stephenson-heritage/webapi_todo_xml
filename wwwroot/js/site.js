window.onload = async () => {


    // http://localhost:5234/api/TodoItems/xml

    const response = await fetch("http://localhost:5234/api/TodoItems/xml");
    const data = await response.text();


    console.log(data);

}