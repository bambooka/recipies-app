import React from 'react';

export default class Search extends React.Component {
    render() {
        const {handleChange, handleSubmit, search} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 text-center">
                        <h1 className="text-slanted text-capitalize">
                            search recipes with {" "}
                            <strong className="text-orange">Food2Fork</strong>
                        </h1>
                        <label htmlFor="search" className="text-capitalize">
                            types recipes separated by comma
                        </label>

                        <div className="input-group">
                            <input type="text"
                                   className="form-control"
                                   name="search"
                                   placeholder="chicken, onion, carrot"
                                   value={search}
                                   onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <button
                                    className="input-group-text bg-primary text-white"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}