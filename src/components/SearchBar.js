import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export default function SearchBar(props) {

    return (
        <div>
            <InputGroup className="m-5 w-50 mx-auto" >
                <FormControl
                placeholder="search"
                aria-label="search"
                style={{fontSize: '2em'}}
                onChange={props.onSearch} />
    
                <Button 
                style={{fontSize: '2em'}} 
                variant="info" 
                type="submit" 
                onClick={props.onAdd}>+</Button>
            
            </InputGroup>
        </div>
    )
}
