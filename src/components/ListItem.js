import React from 'react'
import { Card } from 'react-bootstrap'

export default function ListItem(props) {

    return (
        <div>
            <Card body className="m-1 mx-auto w-50">{props.itemName}</Card>
        </div>
    )
}
