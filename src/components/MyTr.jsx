import React from 'react';

function MyTr(props) {
    return (
        <tr>
                           <td>{props.item.val}</td>
                           <td>{props.item.reason}</td>
        </tr>
    );
}

export default MyTr;