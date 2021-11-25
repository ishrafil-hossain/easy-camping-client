import React from 'react';
import { Link } from 'react-router-dom';

const File = (props) => {
    const { name, id } = props.data;
    return (
        <div>
            <ol className="d-flex m-5">
                <h3 className="me-5">{name}</h3>

                <Link to={`/single-file/${id}`}>
                    <button className='btn btn-primary'>More</button>
                </Link>
            </ol>
        </div>
    );
};

export default File;