import React from 'react'
import ListItem from './ListItem'

export default function List(props) {

    return (
        <>
            { !props.data ? 
                <div>loading...</div> : 
                props.data.map((item, index) => {
                    return <ListItem key={index} itemName={item} />
                })
            
             }
        </>
    )
}
