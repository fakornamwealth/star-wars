//Import the Link API to support client-side navigation
import Layout from '../components/MyLayout'
import { useState, useEffect } from 'react';
import Link from 'next/link';


async function getData() {
	let url = 'https://swapi.dev/api/people';
	const res = await fetch(url);
	let data = await res.json();
	return data;
}

const itemStyle = {
	backgroundColor: 'gray',
	margin: '1em 0',
	padding: '1em',
	color: '#fff',
	cursor: 'pointer',
	display: 'block'
}

export default () => {

	const [data, setData] = useState([])

	useEffect(() => {
		getData().then(newData => {
			//console.log(newData.results)
			setData(newData.results);
		})
	}, []);

	function itemClickHandler() {
		console.log('Item click...');
		redirect('/details');
	}
	
	return (
		<Layout>
			{data.map((item, index) => {
				//console.log(item.name)
				let id = index + 1
				return (
					<Link key={index} style={itemStyle} className="item" href={`/details/?id=${id}`}>
						{item.name}
					</Link>
				)
			})}
		</Layout>
	)
}