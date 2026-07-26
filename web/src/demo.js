const fetcher = () => {
    fetch("http://localhost:5000/user")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.error(err));
};

fetcher();