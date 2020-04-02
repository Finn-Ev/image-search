import React, { useState } from 'react';
import './form.styles.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { setImageAmount } from '../../redux/searchImages/searchImages.actions';
import { connect } from 'react-redux';

const MyForm = ({ homepage, handleSubmit }) => {
    const [queryString, setQueryString] = useState("")

    const handleChange = e => {
        setQueryString(e.target.value);
    };
    const handleSelect = e => {
        setImageAmount(e.target.value);

    };

    return (
        <div className="search-area">
            <div className="form-wrapper">
                {homepage ? <h3>Beeindruckende lizenzfreie Bilder</h3> : <h3>Weitere Bilder suchen</h3>}
                <Form
                    onSubmit={(e)=>handleSubmit(e, queryString)}
                    className="form"
                >
                    <Form.Group>
                        <Form.Control
                            className="mb-3"
                            required
                            aria-label="search images"
                            onChange={handleChange}
                            type="text"
                            name="queryString"
                            placeholder="Schlagwort eingeben..."
                        />
                        <div className="image-amount-wrapper">
                            <Form.Label>Anzahl Bilder:&nbsp; </Form.Label>

                            <div className="select-wrapper">
                                <select aria-label="select image amount" name="imageAmount" onInput={handleSelect} className="mb-3">
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                            </div>
                        </div>

                        <Button type="submit" variant="success">
                            Suchen
					</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setImageAmount: amount => dispatch(setImageAmount(amount)),
  
});


export default connect(null, mapDispatchToProps)(MyForm);
