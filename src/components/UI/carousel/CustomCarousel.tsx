import * as React from "react"
import { useSwipeable } from "react-swipeable";

import styles from "../../../styles/Carousel.module.scss"
interface PropsTypes {
    children: React.ReactNode,
    width?: number
}
export const CarouselItem: React.FC<PropsTypes> = ({ children, width }) => {
    return (
        <div className={styles.slide} style={{ width: width }}>
            {children}
        </div>
    )
}

const Carousel: React.FC<PropsTypes> = ({ children } ,props) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(0);
    const [pause, setPause] = React.useState<boolean>(false);
    const updateActive = (currentActive: number) => {
        if (currentActive < 0) {
            currentActive = React.Children.count(children) - 1;
        } else if (currentActive >= React.Children.count(children)) {
            currentActive = 0;
        }
        setActiveIndex(currentActive);
    }
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {

                updateActive(activeIndex + 1)
            }
        }, 4000);
        return () => {
            if (interval) {
                clearInterval(interval)

            }
        }
    });
    const handlers = useSwipeable({
        onSwipedRight: () => updateActive(activeIndex - 1),
        onSwipedLeft: () => updateActive(activeIndex + 1)
    })
    return (
        <>
            <div className={styles.carousel_container}>

                <div className={styles.carousel}
                    {...handlers}
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                >

                    <div className={styles.inner} style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                        transition:".3s ease-in-out "
                    }}>
                        {
                            React.Children.map(children, (child: any, index) => {
                                return React.cloneElement(child, { width: "100%" });
                            })
                        }
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={() => {
                            updateActive(activeIndex - 1)
                        }}>&#8249;</button>

                        <button
                            onClick={() => {
                                updateActive(activeIndex + 1)
                            }}
                        >&#8250;</button>

                    </div>
                    <div className={styles.paginate_nav}>

                        <div className={styles.buttons}>
                        {
                            React.Children.map(children, (child, index) => {
                                return (
                                    <>

                                    <button
                                        className={`${activeIndex === index ? styles.active : ""}`}
                                        onClick={() => {
                                            updateActive(index)
                                        }}>
                                            <span></span>
                                    </button>
                                        </>
                                )
                            })
                        }
                        </div>
                        <div className={styles.imgs}>
                        {
                            React.Children.map(children, (child, index) => {
                                return (

                                    <div 
                                        className={`${styles.img} ${activeIndex === index ? styles.active : " "}`}
                                        onClick={() => {
                                            updateActive(index)
                                        }}
                                        >
                                        {child}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;