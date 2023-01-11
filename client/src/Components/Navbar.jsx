
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Grid } from "@chakra-ui/layout";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css"
import { RiAccountCircleLine } from "react-icons/ri"
import { BsSearch } from "react-icons/bs"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { accountsUrl } from "../Deployed-server-url/deployed-server-url";
import { useDisclosure } from "@chakra-ui/react";


export const Navbar = () => {
    // const [User, setUser] = useState(false)
    // useEffect(() => {
    //     // fetch(`${accountsUrl}?login=true`).then((el) => {
    //     //     el.json().then((data) => {
    //     //         setUser(data[0])
    //     //     });
    //     // })
    // }, [])
    const navigate = useNavigate()
    const [display, changeDisplay] = useState("none");
    const [title, setTitle] = useState("");
    const [match, setMatch] = useState([])
    const [log_user_data, setLogUserData] = useState([])
    const [name, setName] = useState("")



    const getData = async () => {
        let id = localStorage.getItem('userId')

        try {
            const res = await fetch(`https://bohemian-backend.vercel.app/user/user/${id}`)
            const data = await res.json();
            console.log(data)
            console.log(data[0].name)
            setName(data[0].name);
        } catch (e) {
            console.log(e.message)
        }

    }
    const handleChange = async (e) => {
        setTitle(e.target.value)
        if (title !== "") {
            try {
                const res = await fetch(`https://bohemian-backend.vercel.app/dummy?search=${title}`)
                const data = await res.json();
                setMatch(data);
            } catch (e) {
                console.log(e.message)
            }
        }
    }

    console.log(match)
    useEffect(() => {
        getData();
    }, [])

    const handleClicked = () => {
        setTitle("")
        setMatch([])
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const empty=() => {
        setTitle("");
        onClose();
    }

    const login = sessionStorage.getItem('login');
    return (
        <Box width={["100%", "100%", "90%", "90%"]} m={["10px 0px 0px -15px", "auto", "auto", "auto"]} style={{ position: "sticky", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box style={{ textAlign: "center" }} className="top_flex_1" p={["0.5", "1", "1.5", '2']}>
                <Flex className="header_flex"
                    wrap={'wrap'}
                    display={["none", "none", "none", "flex"]}>
                    <Box id="dropDiv_1">
                        <Link>WHAT'S NEW</Link>
                        <Box id="drop_1">
                            <Box>
                                <Text><Link to="/products">NEW ARRIVALS</Link></Text>
                                <Text><Link to="/products">VIEW ALL</Link></Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box id="dropDiv_2">
                        <Link>WOMEN</Link>
                        <Box id="drop_2">
                            <Box>
                                <Text><Link to="/products">VIEW ALL</Link></Text>
                                <Text><Link to="/products">DRESSES</Link></Text>
                                <Text><Link to="/products">SEPARATES</Link></Text>
                                <Text><Link to="/products">TOPS</Link></Text>
                                <Text><Link to="/products">CO-ORS</Link></Text>
                                <Text><Link to="/products">BEST SELLERS</Link></Text>
                                <Text><Link to="/products">BACK IN STOCK</Link></Text>
                                <Text><Link to="/products">BOTTOMS</Link></Text>
                                <Text><Link to="/products">DENIM</Link></Text>
                                <Text><Link to="/products">JACKETS & KNITS</Link></Text>
                                <Text><Link to="/products">LOUNGEWEAR</Link></Text>
                                <Text><Link to="/products">PRINTS</Link></Text>
                                <Text><Link to="/products">COLOURBLOCK</Link></Text>
                                <Text><Link to="/products">BEACHWEAR</Link></Text>
                                <Text><Link to="/products">EVENT WEAR</Link></Text>
                                <Text><Link to="/products">ACCESSORIES</Link></Text>
                                <Text><Link to="/products">ITALIAN FLOOR</Link></Text>
                                <Text><Link to="/products">THE ANDI EDIT</Link></Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box id="dropDiv_3">
                        <Link>DRESSES</Link>
                        <Box id="drop_3">
                            <Box>
                                <Text><Link to="/products">VIEW ALL</Link></Text>
                                <Text><Link to="/products">MAXI</Link></Text>
                                <Text><Link to="/products">MADI</Link></Text>
                                <Text><Link to="/products">MINI</Link></Text>
                                <Text><Link to="/products">PRINTED</Link></Text>
                                <Text><Link to="/products">PRINTS</Link></Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box id="dropDiv_4">
                        <Link>ATHLETIC</Link>
                    </Box>
                    <Box id="dropDiv_5">
                        <Link>CURVES</Link>
                        <Box id="drop_5">
                            <Box>
                                <Text><Link to="/products">VIEW ALL</Link></Text>
                                <Text><Link to="/products">ACCESSORIES</Link></Text>
                                <Text><Link to="/products">BEACHWEAR</Link></Text>
                                <Text><Link to="/products">EVENT WEAR</Link></Text>
                                <Text><Link to="/products">DENIM</Link></Text>
                                <Text><Link to="/products">BEST SELLERS</Link></Text>
                                <Text><Link to="/products">BOTTOMS</Link></Text>
                                <Text><Link to="/products">JACKETS & KNITS</Link></Text>
                                <Text><Link to="/products">BACK IN STOCK</Link></Text>
                                <Text><Link to="/products">SEPARATES</Link></Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box id="dropDiv_6">
                        <Link>CLASSICS</Link>
                    </Box>
                    <Box id="dropDiv_7">
                        <Link>CAMAPIGN</Link>
                        <Box id="drop_7">
                            <Box>
                                <Text><Link to="/products">LUREX PARTY</Link></Text>
                                <Text><Link to="/products">MOON BAY</Link></Text>
                                <Text><Link to="/products">CROCHET</Link></Text>
                                <Text><Link to="/products">MADRAS DEL DUOMO</Link></Text>
                                <Text><Link to="/products">DAPLED LIGHT</Link></Text>
                                <Text><Link to="/products">LIGURIAN SKIES</Link></Text>
                                <Text><Link to="/products">TONAL ACTIVEWEAR</Link></Text>
                                <Text><Link to="/products">AL LAGO</Link></Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box id="dropDiv_8">
                        <Link>SUSTAINABLE</Link>
                    </Box>
                </Flex>
                <IconButton
                    arial-label="Open Menu"
                    size={["md", "lg"]}
                    icon={<HamburgerIcon />}
                    padding="5px"
                    display={["flex", "flex", "flex", "none"]}
                    onClick={() => changeDisplay('flex')}
                />
                <Flex w="100vw"
                    h={"100vh"}
                    zIndex={20}
                    pos="fixed"
                    top="0"
                    left="0"
                    overflow={"auto"}
                    flexDir="column"
                    display={display}
                    backgroundColor="transparent"
                >
                    <Flex justify={"flex-start"}>
                        <IconButton
                            mt={16}
                            ml={4}
                            arial-label="Close Menu"
                            size={["md", "lg"]}
                            icon={<CloseIcon />}
                            backgroundColor="white"
                            onClick={() => changeDisplay('none')}
                        />
                    </Flex>
                    <Flex
                        flexDir={"column"}
                        align="center"
                    >
                        <Box id="forSmall" >
                            <Box id="dropDiv_1s" >
                                <Link>WHAT'S NEW</Link>
                                <Box id="drop_1s">
                                    <Box>
                                        <Text><Link to="/products">NEW ARRIVALS</Link></Text>
                                        <Text><Link to="/products">VIEW ALL</Link></Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box id="dropDiv_2s">
                                <Link>WOMEN</Link>
                                <Box id="drop_2s">
                                    <Box>
                                        <Text><Link to="/products">VIEW ALL</Link></Text>
                                        <Text><Link to="/products">DRESSES</Link></Text>
                                        <Text><Link to="/products">SEPARATES</Link></Text>
                                        <Text><Link to="/products">TOPS</Link></Text>
                                        <Text><Link to="/products">CO-ORS</Link></Text>
                                        <Text><Link to="/products">BEST SELLERS</Link></Text>
                                        <Text><Link to="/products">BACK IN STOCK</Link></Text>
                                        <Text><Link to="/products">BOTTOMS</Link></Text>
                                        <Text><Link to="/products">DENIM</Link></Text>
                                        <Text><Link to="/products">JACKETS & KNITS</Link></Text>
                                        <Text><Link to="/products">LOUNGEWEAR</Link></Text>
                                        <Text><Link to="/products">PRINTS</Link></Text>
                                        <Text><Link to="/products">COLOURBLOCK</Link></Text>
                                        <Text><Link to="/products">BEACHWEAR</Link></Text>
                                        <Text><Link to="/products">EVENT WEAR</Link></Text>
                                        <Text><Link to="/products">ACCESSORIES</Link></Text>
                                        <Text><Link to="/products">ITALIAN FLOOR</Link></Text>
                                        <Text><Link to="/products">THE ANDI EDIT</Link></Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box id="dropDiv_3s">
                                <Link>DRESSES</Link>
                                <Box id="drop_3s">
                                    <Box>
                                        <Text><Link to="/products">VIEW ALL</Link></Text>
                                        <Text><Link to="/products">MAXI</Link></Text>
                                        <Text><Link to="/products">MADI</Link></Text>
                                        <Text><Link to="/products">MINI</Link></Text>
                                        <Text><Link to="/products">PRINTED</Link></Text>
                                        <Text><Link to="/products">PRINTS</Link></Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box id="dropDiv_4s">
                                <Link>ATHLETIC</Link>
                            </Box>
                            <Box id="dropDiv_5s">
                                <Link>CURVES</Link>
                                <Box id="drop_5s">
                                    <Box>
                                        <Text><Link to="/products">VIEW ALL</Link></Text>
                                        <Text><Link to="/products">ACCESSORIES</Link></Text>
                                        <Text><Link to="/products">BEACHWEAR</Link></Text>
                                        <Text><Link to="/products">EVENT WEAR</Link></Text>
                                        <Text><Link to="/products">DENIM</Link></Text>
                                        <Text><Link to="/products">BEST SELLERS</Link></Text>
                                        <Text><Link to="/products">BOTTOMS</Link></Text>
                                        <Text><Link to="/products">JACKETS & KNITS</Link></Text>
                                        <Text><Link to="/products">BACK IN STOCK</Link></Text>
                                        <Text><Link to="/products">SEPARATES</Link></Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box id="dropDiv_6s">
                                <Link>CLASSICS</Link>
                            </Box>
                            <Box id="dropDiv_7s">
                                <Link>CAMAPIGN</Link>
                                <Box id="drop_7s">
                                    <Box>
                                        <Text><Link to="/products">LUREX PARTY</Link></Text>
                                        <Text><Link to="/products">MOON BAY</Link></Text>
                                        <Text><Link to="/products">CROCHET</Link></Text>
                                        <Text><Link to="/products">MADRAS DEL DUOMO</Link></Text>
                                        <Text><Link to="/products">DAPLED LIGHT</Link></Text>
                                        <Text><Link to="/products">LIGURIAN SKIES</Link></Text>
                                        <Text><Link to="/products">TONAL ACTIVEWEAR</Link></Text>
                                        <Text><Link to="/products">AL LAGO</Link></Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box id="dropDiv_8s">
                                <Link>SUSTAINABLE</Link>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            {/* <Spacer /> */}
            <Box p='2px' mt={"10px"} ml={["-40%", "-13%"]} cursor='pointer' onClick={() => { navigate('/') }} >
                <Image w={["130px", "250px", "350px"]} src="https://cdn11.bigcommerce.com/s-9srn18to/stencil/565de430-5109-013b-39dd-52beef6de530/e/8e215d00-3d2b-013b-c3ef-3ea28820c29e/img/logo.gif" />
            </Box>
            <Box className="l_part" >
                <Box >
                    <select
                        variant={'unstyled'}
                        style={{
                            fontSize: "13px",
                            letterSpacing: "1px",
                            border: "none",
                            fontWeight: "600",
                            // marginTop:"10px",
                            paddingLeft: "2px",
                            paddingTop: "4px"
                        }}>
                        <option value="usa">USA</option>
                        <option value="nez">NEZ</option>
                        <option value="uae">UAE</option>
                    </select>
                </Box>
                <Box >
                    <BsSearch onClick={onOpen} fontSize={"17px"} />
                    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" h={700} >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalBody>
                                <Input value={title} onChange={handleChange} w={"90%"} mb={5} />
                                {
                                    match.map((ele) => {
                                        return <Box>
                                            {title!=""?<Box>
                                                <Link onClick={empty} to={`products/${ele._id}`}>
                                                    <Grid templateColumns='repeat(4, 1fr)' gap={6} alignItems="center" mb={2}>
                                                        <img src={ele.img.item2} alt="" h={100} />
                                                        <Text>{ele.name}</Text>
                                                        <Text>{ele.brand}</Text>
                                                        <Text>{ele.category}</Text>
                                                    </Grid>
                                                </Link>
                                            </Box>:null}
                                        </Box>
                                    })
                                }
                            </ModalBody>


                        </ModalContent>
                    </Modal>

                </Box>
                <Box display="flex" gap={2}>
                    {login ? <Link to="/account"><Text>{name}</Text></Link> : null}
                    <Link to="/login"><RiAccountCircleLine fontSize={"25px"} /></Link>

                </Box>
                <Box >
                    <Link to="/cart"><HiOutlineShoppingBag fontSize={"25px"} /></Link>
                </Box>
            </Box>
        </Box>
    )
}