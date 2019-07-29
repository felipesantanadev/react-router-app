import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <section className="section is-hero">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-6 is-5-fullhd is-offset-1-fullhd">
                            <div className="section-header">
                                <h1 className="title is-spaced">
                                    React Router Sample
                                    <span className="is-hidden-touch"><br/></span>
                                    with Fortnite API
                                </h1>
                                <h2 className="subtitle is-3">Let's learn and have fun!</h2>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <Link className="button is-primary is-medium" to="/about">How does it work?</Link>
                                    </div>
                                    <div className="control">
                                        <a className="button is-light is-medium" href="https://docs.fortniteapi.com/?version=latest">Explore Library</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="section-media">
                                <img role="presentation" src="https://purepng.com/public/uploads/large/purepng.com-fortnite-clickfortnitefortnite-battle-royalebattle-royaleepic-gamesgames-12515254345056ybgz.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;