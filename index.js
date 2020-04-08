let data = [];
axios.get('http://localhost:3000/myData')
    .then(response => {
        const listHTML = document.querySelector('#listData')
        data = response.data;
        console.log(data);

        data.forEach(item => {
            const {
                id,
                name,
                address,
                email,
                phone,
                company
            } = item;
            const itemHTML = `
            <div class = "col-md-3">
                <div class = "card" style= "width:18rem;">
                    <div class = "card-body">
                        <img class = "circularsquare" src="./assets/2.jpg"
                            <style = "width : 100px; height : 100px;">
                        <div class = "center"
                            <li>
                            Name : ${name}
                            <br>
                            Address : ${address}
                            <br>
                            Email : ${email}
                            <br>
                            Phone : ${phone}
                            <br>
                            Company : ${company}
                            <br>
                                <button onclick = "ubah(${id})"<i class="fa fa-edit">Edit</i></button>
                                <button onclick = "hapus(${id})" <i class="fa fa-trash">Remove</i></button>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            `;
            listHTML.innerHTML += itemHTML;
        })
    })
    .catch((pesanError) => {
        console.error(pesanError);
    })

document.getElementById('addData').addEventListener('submit', function (event) {

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;

    axios.post('http://localhost:3000/myData', {
            name,
            address,
            email,
            phone,
            company
        })
        .then(response => {
            console.log(response);
            window.alert('Berhasil menambah data');
        })
        .catch(pesanError => {
            console.error(pesanError);
        })
})

const hapus = id => {
    axios.delete(`http://localhost:3000/myData/${id}`)
}

const ubah = id => {
    const form = data.find(item => {
        return item.id === id
    })

    if (form) {
        const name = window.prompt('Name', form.name);
        const address = window.prompt('Address', form.address);
        const email = window.prompt('Email', form.email);
        const phone = window.prompt('Phone', form.phone);
        const company = window.prompt('Company', form.company);

        axios.put(`http://localhost:3000/myData/${id}`, {
            name,
            address,
            email,
            phone,
            company
        });
    }
}