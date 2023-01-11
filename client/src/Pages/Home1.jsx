import React from 'react'
import Styles from "./Home1.module.css"
import {Link} from "react-router-dom"
import {  Box, Grid, GridItem, Text } from '@chakra-ui/layout'
import { Navbar } from '../Components/Navbar'
import { Image } from '@chakra-ui/image'
// import { Input } from '@chakra-ui/react'
// import {Flex,Spacer} from "@chakra-ui/layout"
// import {BsInstagram} from "react-icons/bs"
// import {FaFacebookF,FaPinterestSquare, FaTiktok} from "react-icons/fa"
// import { Button } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from '../Components/Footer'
// import {} 

export default function Home() {
  return (
    <div width="100%" margin="auto">
        <Box className={Styles.top}>
            <h5>FREE SHIPPING FOR ALL DOMESTIC AUSTRALIAN ORDERS OVER $250</h5>
        </Box>
        <Box height={"100%"} m={["9px auto 20px","0 auto 50px"]} width={"98%"}><Image width="100%" src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/carousel-black-friday-2022.jpg?t=1668994561"/></Box>
        
        <Box mb={"50px"}>
        <Grid gap="0px" templateColumns={['repeat(1,1fr)','repeat(4, 1fr)']} >
            <GridItem w={"100%"} pt={["0px"]} h={"95%"}  style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-1-black-friday-2022.jpg?t=1668994764)`}} className={Styles.grid_item} >
                <Text className={Styles.grid_child} pt={["320px","420px","520px"]} style={{ paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP WOMEN</Text>
            </GridItem>
            <GridItem w={"100%"} pt={["0px"]} h={"95%"} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-2-black-friday-2022.jpg?t=1668994796)`}} className={Styles.grid_item} >
                <Text  className={Styles.grid_child} pt={["320px","420px","520px"]} style={{paddingBottom:"20px" ,paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP DRESSES</Text>
            </GridItem>
            <GridItem w={"100%"} pt={["0px"]} h={"95%"} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-3-black-friday-2022.jpg?t=1668994879)`}} className={Styles.grid_item} >
                <Text  className={Styles.grid_child} pt={["320px","420px","520px"]} style={{ paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP EVENT WEAR</Text>
            </GridItem>
             <GridItem w={"100%"} pt={["0px"]} h={"95%"} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-4-black-friday-2022.jpg?t=1668994937)`}} className={Styles.grid_item} >
                <Text  className={Styles.grid_child} pt={["320px","420px","520px"]} style={{ paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP COLOUR BLOCK</Text>
            </GridItem>
        </Grid>
        </Box>
        <Box display={["flex","none","none","none"]} mb={"50px"} width="80%" margin="auto">
        
        <Carousel  showThumbs={false} height={"300px,400px,500px"}>
            {/* <Link> */}
                <Box>
                    <Image src={"https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2700/28115/ETCH-SIZING-TEMPLATE1_05__93596.1664256715.jpg?c=2"} height="100%" />
                    <Text ></Text>
                </Box>
            {/* </Link> */}
            {/* <Link> */}
                <Box>
                    <Image src={"https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2741/28290/ETCH-SIZING-TEMPLATE-4_05__25012.1666673530.jpg?c=2"} />
                    <Text ></Text>
                </Box>
            {/* </Link> */}
            {/* <Link> */}
                <Box>
                    <Image src={"https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2733/28259/ETCH-SIZING-TEMPLATE-4_02__27379.1666567155.jpg?c=2"} />
                    <Text ></Text>
                </Box>
            {/* </Link> */}
            {/* <Link> */}
                <Box>
                    <Image src={"https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2734/28444/ED---ETCH-SIZING-TEMPLATE-1_05__04645.1667076699.jpg?c=2"} />
                    <Text ></Text>
                </Box>
            {/* </Link> */}
                
            </Carousel>
        </Box>
        <Box width="100%" mb={['20px',"50px"]}>
            <Image width="100%"  src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/l-black-friday.jpg?t=1668994655"/>
        </Box>
        <Text mb={['20px',"50px"]} fontSize={['3xl','5xl']} fontWeight="300" textAlign="center"> Explore</Text>

        <Box mb={"100px"}>
            <Grid gap={1.5}  templateColumns = {['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}>
            <GridItem colStart={[1,1]} colEnd={[2,2]} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-5-black-friday-2022.jpg?t=1668994999)`}} className={Styles.grid_item} >
                <Text h={["350px","450px","550px"]}  paddingTop={["320px,420px,520px"]} className={Styles.grid_child}  padding={["8px,12px,20px"]} paddingLeft={["13px,20px,30px"]} style={{ fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP MINI</Text>
            </GridItem>
            <GridItem colStart={[2,2]} colEnd={[3,3]} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-6-black-friday-2022.jpg?t=1668995058)`}} className={Styles.grid_item} h={["350px","450px","550px"]} >
                <Text  className={Styles.grid_child}  pt={["320px,420px,520px"]} padding={["8px,12px,20px"]} paddingLeft={["13px,20px,30px"]} style={{ fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP SEPERATES</Text>
            </GridItem>
            <GridItem colStart={[1,3]} colEnd={[3,5]} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-7-black-friday-2022.jpg?t=1668995111)`}} className={Styles.grid_item} h={["350px","450px","550px"]} >
                <Text  className={Styles.grid_child}  pt={["320px,420px,520px"]} padding={["8px,12px,20px"]} paddingLeft={["13px,20px,30px"]} style={{ fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP TOPS</Text>
            </GridItem>
            </Grid>
        </Box>
        <Box mb={"50px"} padding={[2,5,20]} className={Styles.home_about_us}>
            <Grid gridTemplateColumns={['repeat(1,1fr)','repeat(2, 1fr)']}>
                <GridItem > <Text  className={Styles.home_about_us_child1} textAlign={['center','left']}  fontSize={['xl','3xl','4xl']} padding={[0,15]} fontWeight="300"> MADE FOR THE MODERN BOHEMIAN </Text></GridItem>
                <GridItem textAlign={['center','left']}  className={Styles.home_about_us_child2}>We blend classic, fashion forward pieces including elevated basics with bohemian detailing. Since our inception, our aim has been to provide size inclusive fashion basics for the modern bohemian. We seek to be an environmentally and socially responsible company; as such we work closely with our suppliers to ensure ethical conditions for workers. We are continually working towards providing the best clothing and accessories, with the least environmental and social harm possible.
                    <br />
                    <button  className={Styles.home_about_us_btn}>ABOUT US</button>
                </GridItem>
            </Grid>
        </Box>
        <Box>
            <Grid gridTemplateColumns={'repeat(6, 1fr)'}>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/323177744_562801109030760_2039089640286951123_n.webp?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_rLeEluC6BEAX87EzEy&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDwKADHXGES9j6ooTww1XKzh6kJ6ygLKi-wrx1PnIUczw&oe=63B919E4" alt='image1'/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/322965788_529787689213181_393587569308171845_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=EQYcw9rCaOMAX9wUDbZ&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCPBSEsfrCZ4LnvenUm2-YcG1Jhgs8tg9tU11HWchBUew&oe=63B8AE2A"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/323328499_1209864409950942_7349907760448526630_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=MJ4pT24KfkAAX-RCIsk&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAAaHCHuQpN00iEySp2IYfUx7zp6l7oYvdVjvV8UiV32w&oe=63B8417A"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/322760745_557325136265410_5650683442658006210_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ipqMLWcLnL8AX82Ffj2&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfA5t7Nw651QciEhxoAdDuM8lu2Zqy3BgLIYSanry0kplA&oe=63B7B34E"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/322209253_138440352366041_7131240000744748817_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8iXe3QGw1bgAX_vgLRm&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAMjmtQsRuYLPJJ4IPvIT_IxNBF5UdEsM9zlUAJLK9aXw&oe=63B827E5"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/321470690_1226462071632223_5342937574241478912_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4euMchtiposAX-l1W3X&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAbiV23-IjVCawHUGFuvBL8I0qwNbkxuElfnET8HDi8Mw&oe=63B90C87"/>
                </GridItem>
            </Grid>
        </Box>
    </div>
  )
}
