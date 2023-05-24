import { Helmet } from "react-helmet-async";
import CoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/UseMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Order = () => {
    const categories= [ 'salad', 'pizza', 'soup', 'desserts', 'drinks']
    const {category}= useParams();
    const initialIndex= categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu]=useMenu();
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const soup = menu.filter(item=> item.category === 'soup')
    const desserts = menu.filter(item=> item.category === 'dessert')
    const drinks = menu.filter(item=> item.category === 'drinks')
    // const offered = menu.filter(item=> item.category === 'offered')

    
    return (
        <div>
            <Helmet>
             <title>Bistro Boss | Order Food</title></Helmet>
             <Cover img={CoverImg} title="Our Order"></Cover>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

        <TabList className='text-center my-10 uppercase font-bold'>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>

        </Tabs>
                
        </div>
    );
};

export default Order;