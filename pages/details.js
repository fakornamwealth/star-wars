import Layout from '../components/MyLayout'
import { useState, useEffect } from 'react';

async function getData(id = false) {
	let url = 'https://swapi.dev/api/people';
	if(id !== false) { 
		url += `/${id}`;
	}
	const res = await fetch(url);
	let data = await res.json();
	return data;
}

export default () => {

    const [data, setData] = useState([])

    
    useEffect(() => {
        const params = new URL(window.location.href);
        
        const id = params.searchParams.get('id');
        
		getData(id).then(newData => {
			console.log(newData)
			setData(newData);
		})
	}, []);


    return (
        <Layout>
            <h1>{data.name}</h1>
            <hr />
            <p><b>Height:</b> {data.height}cm</p>
            <p><b>Eyes:</b> {data.eye_color}</p>
            <p><b>Hair:</b> {data.hair_color}</p>
            <p><b>Birth:</b> {data.birth_year}</p>
        </Layout>
    )
}