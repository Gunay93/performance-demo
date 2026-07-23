import { FaArrowDown } from "react-icons/fa6";
import "../assets/css/HeroBanner.css";

export default function HeroBanner() {
    const scrollToProducts = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    };
    return (
        <section className="hero">

            <div className="hero-overlay">

                <h1>
                    Möhtəşəm məhsulları kəşf edin
                </h1>

                <p>
                    Kosmetika, geyim və gündəlik ehtiyaclarınız üçün ən yaxşı məhsulları bir yerdə tapın
                </p>

                <button>
                    İndi kəşf et
                </button>
                <div
                    className="scroll-arrow"
                    onClick={scrollToProducts}
                >
                    <FaArrowDown />
                </div>
            </div>

        </section>
    );
}