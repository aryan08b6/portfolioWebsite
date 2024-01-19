import { useEffect, useState } from "react";

function useResources() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/aryan08b6/portfolioWebsite/main/src/components/Resources/resources.json')
            .then(res => res.json())
            .then(json => {
                setItems(json)
            })
    }, []);

    return items

}

export default useResources;

