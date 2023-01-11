import { Box, Button, Flex, Input, Spacer } from '@chakra-ui/react'
import React from 'react'
import "./Login.css"
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { UnorderedList, ListItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import { accountsUrl } from '../Deployed-server-url/deployed-server-url'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'



export default function Login() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [logedInUser, setLogedInUser] = useState({})
  
  console.log("logedInUser-->", logedInUser)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  console.log(formData)

  const handleSubmit = async (e) => {

    try {
      const res = await fetch(`${accountsUrl}/login`, {
        method: "POST",
        body: JSON.stringify({ email: formData.email, password: formData.password }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json();
      console.log(data)
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId",data.users._id);
      sessionStorage.setItem("login",true)
      logedInUser.id=localStorage.getItem("userId");
      // localStorage.setItem('user', JSON.stringify(data.users));
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }
  let id = logedInUser.id



  return (
    <div>
      <Box>
        <Box w="90%" m="auto">
          <p className="heading">SIGN IN</p>
          <Flex m={"0 auto 25px"} justifyContent={"space-between"}>
            <Box mt={"40px"}>
              <FormControl>
                <FormLabel letterSpacing={"1.25px"} color={"grey"} fontSize={"13px"} fontWeight="500">EMAIL ADDRESS:</FormLabel>
                <Input border={"1px solid grey"}
                  padding="8px" width={650} fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='email' name='email' onChange={(e) => { handleChange(e) }} />
                <FormLabel mt={8} letterSpacing={"1.25px"} color={"grey"} fontSize={"13px"} fontWeight="500">PASSWORD:</FormLabel>
                <Input border={"1px solid grey"}
                  padding="8px" width={650} fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='password' name='password' onChange={(e) => { handleChange(e) }} />
                <br />
                <Button id="btn2" fontSize={"13px"} letterSpacing={"1.25px"} fontWeight={"400"} borderRadius={0} color={"white"} backgroundColor={"black"} mt={7}
                  onClick={handleSubmit}
                >SIGN IN</Button>
              </FormControl>
            </Box >
            <Spacer />
            <Box textAlign={'left'} mt={"54px"} backgroundColor={"RGBA(0, 0, 0, 0.04)"} padding="20px" width={"100%"} ml={"30px"}>
              <p className="heading_2">NEW CUSTOMER?</p>
              <p className="login_ul"> Create an account with us and you'll be able to:</p>
              <UnorderedList className='login_ul' ml={"40px"}>
                <ListItem>Check out faster</ListItem>
                <ListItem>Save multiple shipping addresses</ListItem>
                <ListItem>Access your order history</ListItem>
                <ListItem>Track new orders</ListItem>
                <ListItem>Save items to your wish list</ListItem>
              </UnorderedList>
              <Link to="/signUp"> <Button id="btn" fontSize={"13px"} letterSpacing={"1.25px"} fontWeight={"400"} borderRadius={0} color={"white"} backgroundColor={"black"} mt={7}>CREATE ACCOUNT</Button> </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  )
}
