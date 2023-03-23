import React from "react";
import { Menu as MuiMenu, FacebookRounded, Instagram, LocationOn, CloseRounded, Phone, MailOutlineOutlined, ShoppingBag } from "@mui/icons-material";
import { Link } from "react-scroll";
import styles from "../../styles/Navbar.module.scss";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Button } from "@mui/material";
// import Header from "./Header";
// import YoutubeComponent from "../youtube-component/Youtube";
import { YouTube } from "@mui/icons-material";
import Header from "./Header";
interface StateTypes {
    isShow: boolean,
    scroll: number,
    showNav: boolean,
    showYoutube: boolean,
    cartConRef: any
}
const links = ["Home", "About", "Services", "Skills", "Education", "Experience", "Contact"];
export default class Navbar extends React.Component<{}, StateTypes>{
    private navRef: React.RefObject<HTMLDivElement>;
    // private youtubeRef: React.RefObject<HTMLDivElement> | undefined;
    private scrollIndicatorRef: React.RefObject<HTMLDivElement>;
    constructor(props: any) {
        super(props);
        this.state = {
            isShow: false,
            scroll: 0,
            showNav: true,
            showYoutube: false,
            cartConRef: React.createRef()
        }

        this.navRef = React.createRef();
        this.scrollIndicatorRef = React.createRef();
    }
    componentDidMount(): void {
        window.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            if (!this.navRef.current || !this.navRef.current.contains(target)) {
                this.setState({ isShow: false })
            }
        })

        let previousScroll = window.pageYOffset;
        window.addEventListener("scroll", () => {
            this.setState({
                scroll: window.pageYOffset
            })
            let currentScroll = window.pageYOffset;
            let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (windowScroll / height) * 100;
            if (this.scrollIndicatorRef.current !== null) {

                this.scrollIndicatorRef.current.style.width = `${scrolled}%`
            }
            if (previousScroll > currentScroll) {
                this.setState({ showNav: true })
            } else {
                this.setState({ showNav: false })
            }
            previousScroll = currentScroll
        })
    }
    toggleCart = () => {
        if (this.state.cartConRef.current.classList.contains("translate-x-full")) {
            this.state.cartConRef.current.classList.remove("translate-x-full");
            this.state.cartConRef.current.classList.add("translate-x-0");
        }
        else if (!this.state.cartConRef.current.classList.contains("translate-x-full")) {
            this.state.cartConRef.current.classList.remove("translate-x-0");
            this.state.cartConRef.current.classList.add("translate-x-full");


        }
        console.log(this.state.cartConRef.current.classList.contains("translate-x-full"))
    }
    render(): React.ReactNode {
        return (
            <>
                <Header />
                <nav className={styles.nav} ref={this.navRef} style={{
                    // position: this.state.scroll > 150 ? "fixed" : "sticky",
                    top: this.state.showNav ? "0" : "-135px",
                }}>

                    <div className={styles.logo}>
                        {/* <img src="/logo.png" alt="logo" width={200} height={150} /> */}
                        PT
                    </div>
                    <div className={`${styles.nav_content} ${this.state.isShow === true ? styles.active : ""} `}
                        style={{
                            // background: this.state.scroll > 50 ? "var(--bg-color)" : "none",
                            // color: this.state.scroll > 50 ? "var(--bg-color)" : "black",
                        }}
                    >

                        {this.state.isShow === true &&
                            <div className={styles.nav_header}>
                                <div className={styles.logo}>
                                    {/* <img src="/logo.png" alt="logo" /BTHouse> */}
                                    PT
                                </div>
                                <Button
                                    onClick={() => this.setState({ isShow: false })}
                                ><CloseRounded /></Button>
                            </div>

                        }
                        <div className={styles.links}>
                            {
                                links.map((link: string, ind: number) => {
                                    return (
                                        <Link style={{
                                            // color: this.state.scroll  === 0 ?  "var(--dark-blue)" : "white"
                                        }} activeClass={styles.active} href={`#${link}`} key={ind} to={link} duration={500} spy={true} smooth={true}>{link}</Link>
                                    )
                                })
                            }

                        </div>
                        <div className={styles.contact_container}>
                            <h1>Contact Info</h1>
                            <div className={styles.contact}>
                                <LocationOn />
                                <p>Kathmandu, Bagmati</p>
                            </div>
                            <a href={"tel:+9779816514719"} className={styles.contact}>
                                <Phone />
                                <div>9816514719</div>
                            </a>
                            <a target={"_blank"} href={"mailto: swarsankhadka0000@gmail.com"} className={styles.contact}>
                                <MailOutlineOutlined />
                                <div className="lowercase">swarsankhadka0000@gmail.com</div>

                            </a>
                        </div>
                        {/* <div className={styles.social_content}>
                            <h1>Follow us on social network</h1>
                            <div style={{
                                display: 'flex',
                                flexDirection: "row",
                                margin: ".3em 0"
                            }}>

                                <a rel="noopener noreferrer"  target="_blank" href="https://www.facebook.com/prashant7hapa" className={styles.facebook + " " + styles.icon}> <FacebookRounded />
                                </a>
                                <a rel="noopener noreferrer"  target="_blank" href="https://www.instagram.com/prshnt._.mgr/" className={styles.instagram + " " + styles.icon}><Instagram />
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.actions} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center'
                    }}>


                        <Button type="button" className={styles.menu} onClick={() => this.setState({ isShow: true })}><MuiMenu /></Button>
                    </div>
                    <div ref={this.scrollIndicatorRef} className={styles.scroll_indicator}></div>
                </nav>

                {/* <YoutubeComponent
                     onClose={() => {this.setState({showYoutube : false})}}
                    showYoutube ={this.state.showYoutube}

                /> */}

                <div onClick={() => {
                    if (typeof window !== "undefined") {
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0;
                    }
                }} className={` opacity-40 hover:opacity-100 transition-all z-50 fixed ${this.state.scroll > 300 ? "bottom-10" : "-bottom-20"} right-10 w-10 h-10 bg-black text-sky-300 rotate-45 flex justify-center items-center cursor-pointer hover:bg-gray-900`}>
                    <KeyboardDoubleArrowUpIcon className="-rotate-45" />
                </div>
            </>
        )
    }
}