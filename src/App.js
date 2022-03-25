import Header from './components/Header';
import List from "./components/List";
import { useState } from 'react';
import Form from './components/form/Form';

function App() {
    const listData = [
        {
            'id': 1,
            'text': 'Test file first',
            'description': 'Test file description'
        },
        {
            'id': 2,
            'text': 'Test file second',
            'description': 'Test file description second'
        },
        {
            'id': 3,
            'text': 'Test file third',
            'description': 'Test file description third'
        }
    ];

    // State of component
    const [list, setList] = useState(listData);
    const [currentSelectedItem, setCurrentSelectedItem] = useState();
    const [cloningInitialised, setCloneInit] = useState(false);

    
    // Remove list item
    const deleteCurrentItem = (id) => {
        console.log(id);

        // we reset the value of the list when state changes
        setList(list.filter((item) => (
            item.id !== id
        )))
    }

    // storing a new list item into the list
    const storeNewListItem = (e) => {
        let newArrayList = [];
        let alreadyPresent = 0;

        list.map((item) => {
            if(item.text === e.text) {
                alreadyPresent++;
            }
            newArrayList.push(item);
        });

        // push the item as the first element on top of the list
        newArrayList.unshift(e);

        // add the new value to the list
        setList(alreadyPresent ? list : newArrayList);
    }

    // cloning the list item values
    const cloneCurrentItem = (id) => {
        setCurrentSelectedItem(list.filter((item) => (
            item.id === id
        )))
    }

    // checking if cloning initiliased
    const cloneInitMethod = (response) => {
        setCloneInit(response);
    }
    
    return (
        <>
            <Header listCount={list.length} />
            <Form store={storeNewListItem} 
                currentSelected={currentSelectedItem}
                cloningInitialised={cloningInitialised}
            />
            {/* pass deleteListItem() function to List component */}
            <List list={list} 
                currentSelected={cloneCurrentItem} 
                deleteListItem={deleteCurrentItem}
                cloningInitialised={cloneInitMethod}
            />
        </>
    )
}

export default App;