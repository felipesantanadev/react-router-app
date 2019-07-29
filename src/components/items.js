import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Items = () => {
    const apiKey = 'ed93852d45c7f57ba6fed0245beba3be';
    const [items, setItems] = useState([]);

    useEffect(() => {
        const abort = new AbortController();
        fetchItems(abort);

        return function cleanUp(){
            abort.abort();
        }
    },[]);

    const fetchItems = async (abort) => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get?authorization=${apiKey}`, {
            signal: abort.signal
        });
        const items = await data.json();
        setItems(items.data);
    }

    const style = {
        'marginTop': '5%'
    }

    return (
        <div className="container" style={style}>
            <h1 className="title">Upcoming items</h1>
            <div className="columns is-multiline">
                {items.map(object => (
                    <div className="column is-one-quarter" key={object.itemId}>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by">
                                    <img src={object.item.images.background} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{object.item.name}</p>
                                        <p className="subtitle is-6">{`Rarity: ${object.item.rarity}`}</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <Link to={`/items/${object.itemId}`} className="button is-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Items;