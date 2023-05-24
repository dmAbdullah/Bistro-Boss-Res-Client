import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/UseMenu";
import ShopCard from "./ShopCard";
import ShopTab from "./ShopTab";

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu]=useMenu();
    const desserts = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const drinks = menu.filter(item=> item.category === 'drinks')
    
    return (
        <div>
            <Helmet>
             <title>Bistro Boss | Shop</title></Helmet>
             <Cover img={orderCoverImg} title="Our Shop"></Cover>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

        <TabList className='text-center my-10 uppercase font-bold'>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
            <ShopTab items={salad}></ShopTab>
        </TabPanel>
        <TabPanel>
            <ShopTab items={pizza}></ShopTab>
        </TabPanel>
        <TabPanel>
            <ShopTab items={soup}></ShopTab>
        </TabPanel>
        <TabPanel>
            <ShopTab items={desserts}></ShopTab>
        </TabPanel>
        <TabPanel>
            <ShopTab items={drinks}></ShopTab>

        </TabPanel>

        </Tabs>
                
        </div>
    );
};

export default Shop;