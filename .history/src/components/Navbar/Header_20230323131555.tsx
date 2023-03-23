import { EmailOutlined, LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.scss";
export default class Header extends React.Component {
    render(): React.ReactNode {


        return (
            <div className={styles.header}
                style={{
                    // height: this.state.scroll === 0 ? "75px" : "0",
                    // top: this.state.scroll === 0 ? "-305px" : "0"
                }}
            >
                <div className={styles.logo}>
                    {/* <img src="/logo.png" alt="logo" width={200} height={150} /> */}
                    <Link href={"/"}>
                        <h1>SK</h1>
                    </Link>
                </div>
                <div className={styles.contact_container}>
                    <div className={styles.contact}>
                        <LocationOnOutlined />
                        <div className="info">
                            <h1>Address</h1>
                            <p>Gwarko Lalitpur</p>
                        </div>
                    </div>
                    <Link  className={styles.contact} href={"tel:+9779816514719"}>

                        <PhoneOutlined />
                        <div className="info">
                            <h1>Phone</h1>
                    <div>
                            9813179737
                        </div>
                    </div>
                    </Link>
                    <Link rel="noopener noreferrer" target="_blank" href={"mailto: prashant.thapa62758@gmail.com"} className={styles.contact}>
                        <EmailOutlined />
                        <div className="info">
                            <h1>Email</h1>
                            <div className={""}>
                            swarsankhadka0000@gmail.com
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}