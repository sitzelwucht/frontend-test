import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

export default function List(props) {

    const [shownData, setShownData] = useState(props.data)

    // set shown data to be whichever array was updated last
    useEffect(() => {
        setShownData(props.data)
    }, [props.data])

    useEffect(() => {
        setShownData(props.filteredData)
    }, [props.filteredData])


    return (
        <div>
            {
                !shownData ? 
                <div className="mx-auto w-50">loading...</div> : 
                shownData.map((item, i) => {
                    return <ListItem key={i} itemName={item} />
                }) 
             } 
        </div>
    )
}
