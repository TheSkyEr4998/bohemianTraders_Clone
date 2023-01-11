import React, { useEffect, useState } from 'react';
import { Box, HStack, Button, Image, Radio, RadioGroup, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, useDisclosure, VStack, Grid } from '@chakra-ui/react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import { MoreProduct } from '../../Components/ProductDetailsCompo/MoreProduct';
import { PDdetails } from '../../Components/ProductDetailsCompo/PDdetails';
import { SendDataOnCart, SendDataOnWishList } from '../../Components/ProductDetailsCompo/SendData';
import PDImg1 from '../../Components/ProductDetailsCompo/PDImg1';
import { productsUrl, accountsUrl } from '../../Deployed-server-url/deployed-server-url';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import axios from 'axios';



function ProductDetail() {

  const navigate = useNavigate()
  let { id } = useParams();
  const [ID, setID] = useState(id)
  let [Index, setIndex] = useState(id)
  const [value, setValue] = useState(null)
  const [user, setUser] = useState([])
  const toast = useToast()
  const [data, setData] = useState(null);

  const handleAdd = async () => {

    const userId = localStorage.getItem('userId')
    const productId = id

    if (!value) {
      return alert('Please select a size')
    }
    try {
      const { data } = await axios.post('https://bohemian-backend.vercel.app/user/cart', {
        userId,
        productId
      })

      localStorage.setItem("user", JSON.stringify(data));
      toast({
        position: 'top',
        title: 'Item Added Successfully',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    }
    catch (error) {
      toast({
        position: 'top right',
        title: 'Item Already Added',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }

  }

  const handleWish = () => {

  }

  const fetchProductDetails = async () => {
    if (!id) return;
    try {
      const { data } = await axios.get('https://bohemian-backend.vercel.app/dummy/' + id)
      setData(data);
    } catch (error) {
      alert(error.message)
    }
  }

  console.log(data);


  useEffect(() => {
    fetchProductDetails()

  }, [id])


  if (!data) {
    return <>

      loading
    </>
  }


  // const OverlayOne = () => (
  //   <ModalOverlay
  //     bg='blackAlpha.300'
  //     backdropFilter='blur(10px) hue-rotate(90deg)'
  //   />
  // )
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [overlay, setOverlay] = React.useState(<OverlayOne />)

  // async function AddDATAinCart(productId) {
  // console.log('clicekd');
  // const {data} = await axios.post(`https://bohemian-backend.vercel.app/users`, {id: productId, userId: '63ab37edf26e17bf64853de4'})
  // return;

  //   if (value) {
  //     if (user.length > 0) {
  //       SendDataOnCart(data, value, user);
  //       setOverlay(<OverlayOne />)
  //       onOpen()

  //       toast({
  //         title: 'Product Added',
  //         description: "",
  //         status: 'success',
  //         duration: 4000,
  //         isClosable: true,
  //       })

  //     }
  //     else { navigate('/login') }
  //   }
  //   else {
  //     return toast({
  //       title: 'please select size',
  //       status: 'error',
  //       isClosable: true,
  //     })

  //   }
  // }
  // function AddDATAinWishList() {
  //   if (value) {
  //     if (user.length > 0) {
  //       SendDataOnWishList(data, value, user)
  //       toast({
  //         title: 'Product Added',
  //         description: "",
  //         status: 'success',
  //         duration: 2000,
  //         isClosable: true,
  //       })

  //     }
  //     else {
  //       navigate('/login')
  //     }
  //   }
  //   else {
  //     return toast({
  //       title: 'please select size',
  //       status: 'error',
  //       isClosable: true,
  //     })
  //   }
  // }



  return (
    <div >
      <>
        {/* <Modal size={'6xl'} isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>
              OK, ITEMS WERE ADDED TO YOUR CART. WHAT'S NEXT?
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack direction={['column', 'row']} >
                <Box >
                  <Image w={'50%'} ml={'10%'} src={data.img.model1} />
                </Box>
                <Box>
                  <Text>{data.name.toUpperCase()}</Text>
                  <Text>{data.brand.toUpperCase()}</Text>
                  <Text>${data.price}</Text>
                </Box>
                <Box w={'33%'}>
                  <VStack>
                    <Button w={'100%'}><Link to='/checkout'>PRODCEED TO CHECKOUT</Link></Button>
                    <Text>--or use--</Text>
                    <Button w={'100%'}>PayPal</Button>
                    <Button w={'100%'}>G Pay</Button>
                    <Text>Order subtotal</Text>
                    <Text>$US {data.price}</Text>
                    <Text>Your cart containe { } items</Text>
                    <Button w={'100%'} onClick={onClose} >CONTINUE SHOPPING</Button>
                    <Button w={'100%'} onClick={onClose} ><Link to='/cart' >VIEW OR EDIT YOUR CART</Link></Button>
                  </VStack>
                </Box>
              </Stack>
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </>
      <Text>Home/  DRESSES  / {data.brand}</Text>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={6}>

        <Box>
          <PDImg1 data={data} />
        </Box>
        <Box p={'10px'} >
          <Text id='PD_title'>{data.name}</Text>
          <Text>{data.brand}</Text>
          <Text>{data.price}</Text>
          <Text>Or pay 4 interest-free payments with Paytem</Text>
          <Box>
            <Image w={'100px'} src={''} />
          </Box>
          <Text>SIZE:</Text>
          <RadioGroup onChange={setValue} value={value}>
            <Stack m={'10px'} direction='row'>
              {data.sizes.map((el) => {
                return <Radio m={'15px'} value={el} key={el}>
                  {el}
                </Radio>
              })}
            </Stack>
          </RadioGroup>
          <Box>
            <Stack direction='column'>
              <Button colorScheme='teal' variant='solid' onClick={handleAdd}>Add to Cart</Button>
              <Button colorScheme='blue' onClick={handleWish}>ADD TO WISH LIST</Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
      <div style={{ height: "50px" }}></div>
      <PDdetails {...data} />
      <MoreProduct data={data} setID={setIndex} />
    </div>
  )
}


export default ProductDetail;