import React from 'react'
import CatageoryCard from './CatageoryCard'

const Catageory = () => {
    let catageories = [
        {
            name: "Men",
            season: "New Arrivals",
            image: require("./men-categeory.webp"),
            id: "bc-1",
            menId1: "men-content-1",
            menId2: "men-content-2",
            buttonId: "men-button"
        },

        {
            name: "Women",
            season: "Spring 2023",
            image: require("./women-catageory.webp"),
            id: "bc-2",
            menId1: "women-content-1",
            menId2: "women-content-2",
            buttonId: "women-button"
        },
        {
            name: "Accessories",
            season: "New Trend",
            image: require("./accessories.webp"),
            id: "bc-3",
            menId1: "acess-content-1",
            menId2: "acess-content-2",
            buttonId: "acess-button"
        }
    ]

    const renderedCatagories = catageories.map((catageory) => {
        return <CatageoryCard catageory={catageory} key={catageory.id} />
    })

    return (
        <section className="catageories">
            <div className="catageory-container flex-box">
                {renderedCatagories}
            </div>
        </section>
    )
}

export default Catageory