import React, {useState, useEffect} from 'react';
import apikey from '../store/apikey';

const ItemDetail = ({match}) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const abort = new AbortController();
        fetchItem(abort);

        return function cleanUp(){
            abort.abort();
        }
    },[]);

    const fetchItem = async (abort) => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}&authorization=${apikey}`, {
            signal: abort.signal
        });

        const fetchedItem = await data.json();
        setItem(fetchedItem.data.item);
        console.log(fetchedItem.data.item);
    }
    
    if(!item) return <h1>Loading...</h1>;

    const style = {
        'marginTop': '5%'
    }

    return (
        <div className="container" style={style}>
            <h1 className="title">{item.name}</h1>
            <br />
            <div className="card">
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-128x128">
                            <img className="image is-128x128" src={item.images.information} />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <br/>
                                <strong>{item.name}</strong> is a(n) <small>{item.rarity}</small> item.
                                <br />
                                <strong>Type: </strong> <small>{item.type}</small>
                                <br/>
                                <strong>Description: </strong> <small>{item.description}</small>
                            </p>
                            <figure>
                                <img className="image" src={item.images.featured} />
                            </figure>
                        </div>
                    </div>
                    <div className="media-right">
                        <button className="delete" onClick={() => window.history.go(-1)}></button>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default ItemDetail;