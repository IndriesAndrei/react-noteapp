import { useState, useEffect } from 'react';

export default function Form({store, currentSelected, cloningInitialised}) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [isInputChange, setInputChange] = useState(false);
    const [cloneInitFields, setCloneInitFields] = useState(true);

    // getting title from the form
    const getTitleFromInput = (e) => {
        // get the value of the input box
        console.log(e.currentTarget.value);
        if (e.currentTarget.value !== null && e.currentTarget.value !== '') {
            setInputChange(true);
            setTitle(e.currentTarget.value)
        }
    }

    // getting description from the form
    const getDescriptionFromForm = (e) => {
        console.log(e.currentTarget.value);
        if (e.currentTarget.value !== null && e.currentTarget.value !== '') {
            setInputChange(true);
            setDescription(e.currentTarget.value)
        }
    }

    // process the form
    const processForm = (e) => {
        e.preventDefault();
        store({
            id: Date.now(),
            text: title,
            description: description
        });

        setInputChange(false);
        setCloneInitFields(true);
    }

    useEffect(() => {
        // if user makes changes in input check
        if (isInputChange && !cloningInitialised && !cloneInitFields) {
            return;
        }
        
        // if user clicks on clone button then select the selected item
        if (currentSelected !== null 
            && currentSelected !== '' 
            && currentSelected
            && cloneInitFields) {
            let text = currentSelected[0].text;
            let description = currentSelected[0].description;

            setTitle(text);
            setDescription(description);
        }
    })

    // making cloning to disable when user types
    const setCloneToDisable = () => {
        setCloneInitFields(false);
    }

    return (
        <>
            <hr />
            <div className="col-md-8 offset-2 mt-5">
                <form onSubmit={processForm}>
                    <div className="form-group">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" 
                            className="form-control" 
                            id="title" 
                            aria-describedby="title" 
                            placeholder="Enter title" 
                            onChange={getTitleFromInput}
                            value={title || ''}
                            onClick={setCloneToDisable}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="1"
                            value={description || ''}
                            onChange={getDescriptionFromForm}
                            onClick={setCloneToDisable}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
            <hr />
        </>
    )
}