import React from 'react'
import "../css/Home.css"
import Carousel from "react-elastic-carousel"
import Item from './Item'
import Product from './Product'
import { faker } from "@faker-js/faker"

export default function Home() {
    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 4 }]
    return (
        <div className="home">
            {/* // <Carousel breakPoints={breakPoints}> */}
            <Carousel className='baner-carousel'>
                <Item className='baners'>
                    <img src="https://m.media-amazon.com/images/I/71AHUyOICAL._SX3000_.jpg" alt="img" />
                </Item>
                <Item className='baners'>
                    <img src="https://m.media-amazon.com/images/I/61njBDr9DgL._SX3000_.jpg" alt="img" />
                </Item>
                <Item className='baners'>
                    <img src="https://m.media-amazon.com/images/I/81fl-uN9kOL._SX3000_.jpg" alt="img" />
                </Item>
                <Item className='baners'>
                    <img src="https://m.media-amazon.com/images/I/71F75NHXTGL._SX3000_.jpg " alt="img" />
                </Item>
            </Carousel>

            {/* [ SAMPLE FOR FAKER DATA  {/* <Product id={faker.datatype.uuid()}  src={faker.image.food(150, 150, true)} title={faker.commerce.productName()} price={faker.random.numeric()}  rating={2}]  /> */}
            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today's Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/4123OnLZCFL._SX300_SY300_QL70_FMwebp_.jpg'
                            title='Noise ColorFit Pro 4 Alpha Bluetooth Calling Smart Watch with 1.78 AMOLED Display, (Black)'
                            price={49.2}
                            rating={4}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/41M4psgd+jL._SY300_SX300_.jpg'
                            title='Lenovo IdeaPad Gaming 3 AMD Ryzen 7 5800H 15.6" (39.62cm) /120Hz/Win 11/Office 2021adow Black/2.25Kg), 82K201UMIN'
                            price={956.65}
                            rating={4}
                        />

                    </div>
                </div>
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/71SiSQGW-hL._SX425_.jpg'
                            title='StatueStudio Meditating Sitting Buddha Statue for Home Decor Big Size Large Living ch, 460139-V'
                            price={16.5}
                            rating={3}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/61yKj3SE4uL._SY450_.jpg'
                            title='Tygot 10" Portable LED Ring Light with 3 Color Modes Dimmable Lighting | for YouTube Cameras'
                            price={8}
                            rating={4}
                        />

                    </div>
                </div>
            </div>

            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://images-eu.ssl-images-amazon.com/images/I/81opk3yvV8L._AC_UL160_SR160,160_.jpg'
                            title='Himalaya Total Care Baby Pants Diapers, Extra Large (12 - 17 kg), 74 Count'
                            price={11.65}
                            rating={4}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/41JrUgIbYOL._SX300_SY300_QL70_FMwebp_.jpg'
                            title='Preethi Blue Leaf Diamond MG-214 mixer grinder 750 watt (Blue/White), 3 jars & 2yr Guarantee & Lifelong Free Service'
                            price={44.17}
                            rating={4}
                        />

                    </div>
                </div>
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/61B2or7HiEL._AC_UL320_.jpg'
                            title='MAAJISA Women Printed Full Flair Anarkali Kurta, Light Blue Printed Flowerfor Ladies
'
                            price={11.66}
                            rating={3}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/61qI4gFoNAL._AC_UL320_.jpg'
                            title='EAT BETTER CO - Better Laddoos - Peanut & Chocolate | Dry Fruit Laddoos Made with Dates, Cashew, Peanuts, Cacao & Vanilla '
                            price={4.5}
                            rating={4}
                        />

                    </div>
                </div>
            </div>
            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/71+PLQPgQgL._SX522_.jpg'
                            title='RJKART Sheesham Wood Writing Study Table Office Desk for Living Room (Natural Finish Csonsole Table for Living Room and Study Room)'
                            price={185}
                            rating={3}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/314n1K4-YBL._SY445_SX342_QL70_FMwebp_.jpg'
                            title='PHILIPS Wiz Smart WI-Fi LED Bulb E27 9-Watt, 16 Million colors , Compatible with Amazon Alexa and Google Assistant, Pack of 1'
                            price={9.67}
                            rating={5}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/51lvUQrwU9L._SX300_SY300_QL70_FMwebp_.jpg'
                            title='Ferrero Rocher Premium Chocolates 24 Pieces, 300 g'
                            price={10.53}
                            rating={5}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/81e3IgZnUbL._UX575_.jpg'
                            title='Sparx Mens Sm-796 Running'
                            price={27.35}
                            rating={3}
                        />


                    </div>
                </div>
            </div>
            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today's Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/4123OnLZCFL._SX300_SY300_QL70_FMwebp_.jpg'
                            title='Noise ColorFit Pro 4 Alpha Bluetooth Calling Smart Watch with 1.78 AMOLED Display, (Black)'
                            price={49.2}
                            rating={4}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/41M4psgd+jL._SY300_SX300_.jpg'
                            title='Lenovo IdeaPad Gaming 3 AMD Ryzen 7 5800H 15.6" (39.62cm) /120Hz/Win 11/Office 2021adow Black/2.25Kg), 82K201UMIN'
                            price={956.65}
                            rating={4}
                        />

                    </div>
                </div>
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/71SiSQGW-hL._SX425_.jpg'
                            title='StatueStudio Meditating Sitting Buddha Statue for Home Decor Big Size Large Living ch, 460139-V'
                            price={16.5}
                            rating={3}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/61yKj3SE4uL._SY450_.jpg'
                            title='Tygot 10" Portable LED Ring Light with 3 Color Modes Dimmable Lighting | for YouTube Cameras'
                            price={8}
                            rating={4}
                        />

                    </div>
                </div>
            </div>

            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://images-eu.ssl-images-amazon.com/images/I/81opk3yvV8L._AC_UL160_SR160,160_.jpg'
                            title='Himalaya Total Care Baby Pants Diapers, Extra Large (12 - 17 kg), 74 Count'
                            price={11.65}
                            rating={4}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/41JrUgIbYOL._SX300_SY300_QL70_FMwebp_.jpg'
                            title='Preethi Blue Leaf Diamond MG-214 mixer grinder 750 watt (Blue/White), 3 jars & 2yr Guarantee & Lifelong Free Service'
                            price={44.17}
                            rating={4}
                        />

                    </div>
                </div>
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/61B2or7HiEL._AC_UL320_.jpg'
                            title='MAAJISA Women Printed Full Flair Anarkali Kurta, Light Blue Printed Flowerfor Ladies
'
                            price={11.66}
                            rating={3}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/61qI4gFoNAL._AC_UL320_.jpg'
                            title='EAT BETTER CO - Better Laddoos - Peanut & Chocolate | Dry Fruit Laddoos Made with Dates, Cashew, Peanuts, Cacao & Vanilla '
                            price={4.5}
                            rating={4}
                        />

                    </div>
                </div>
            </div>
            <div className="product-body">
                <div className="product-div">
                    <div className="category-name">
                        <h2>Today’s Deals </h2>
                    </div>
                    <div className="category">
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/71+PLQPgQgL._SX522_.jpg'
                            title='RJKART Sheesham Wood Writing Study Table Office Desk for Living Room (Natural Finish Csonsole Table for Living Room and Study Room)'
                            price={185}
                            rating={3}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/314n1K4-YBL._SY445_SX342_QL70_FMwebp_.jpg'
                            title='PHILIPS Wiz Smart WI-Fi LED Bulb E27 9-Watt, 16 Million colors , Compatible with Amazon Alexa and Google Assistant, Pack of 1'
                            price={9.67}
                            rating={5}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/51lvUQrwU9L._SX300_SY300_QL70_FMwebp_.jpg'
                            title='Ferrero Rocher Premium Chocolates 24 Pieces, 300 g'
                            price={10.53}
                            rating={5}
                        />
                        <Product
                            id={faker.datatype.uuid()}
                            src='https://m.media-amazon.com/images/I/81e3IgZnUbL._UX575_.jpg'
                            title='Sparx Mens Sm-796 Running'
                            price={27.35}
                            rating={3}
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}
