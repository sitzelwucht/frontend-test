import React from 'react'
import ListItem from './ListItem'

export default function List(props) {

    // if filtered data array is not empty, show filtered data, otherwise show all data
    return (
        <div>
           { (!props.data && !props.data) ? <div className="mx-auto w-50">loading...</div> : 
                !props.filteredData ? props.data.map((item, index) => {
                    return <ListItem key={index} itemName={item} />
                }) : 
                props.filteredData.map((item, index) => {
                    return <ListItem key={index} itemName={item} />
                })
             } 
        </div>
    )
}
