import { Feature } from "../types/feature";
import { FaTruck, FaGlobe, FaLeaf, FaSeedling, FaCertificate, FaHandsHelping } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaGlobe size={40} className="fill-current" />,
    title: "Global Reach",
    paragraph:
      "At International Fruit Hub, we have a robust global network that ensures our premium produce reaches markets worldwide. Our presence in Europe, the Middle East, and the Far East enables us to supply a diverse selection of fresh fruits and vegetables year-round, meeting the needs of our international clients.",
  },
  {
    id: 2,
    icon: <FaTruck size={40} className="fill-current" />,
    title: "Reliable Logistics",
    paragraph:
      "We pride ourselves on our reliable logistics, which guarantee that our produce arrives fresh and on time. Our experienced logistics team and state-of-the-art facilities ensure seamless operations from farm to table, maintaining the highest standards of quality and freshness throughout the supply chain.",
  },
  {
    id: 3,
    icon: <FaLeaf size={40} className="fill-current" />,
    title: "Sustainable Practices",
    paragraph:
      "Sustainability is at the core of our operations. We work closely with local farmers who share our commitment to environmentally friendly practices. By incorporating advanced agricultural techniques and sustainable farming methods, we ensure that our produce is not only of superior quality but also contributes to a healthier planet.",
  },
  {
    id: 4,
    icon: <FaSeedling size={40} className="fill-current" />,
    title: "High Quality Produce",
    paragraph:
      "Quality is paramount at International Fruit Hub. Our produce undergoes stringent quality checks at every stage, from cultivation to packaging. Adhering to international standards and certifications, we guarantee that our clients receive only the freshest and finest fruits and vegetables.",
  },
  {
    id: 5,
    icon: <FaCertificate size={40} className="fill-current" />,
    title: "Commitment to Excellence",
    paragraph:
      "Our commitment to excellence drives us to continuously enhance our products and services. We leverage technology and innovative practices to ensure that every project we undertake meets and exceeds our customer's expectations. Our dedication to superior quality and customer satisfaction is unwavering.",
  },
  {
    id: 6,
    icon: <FaHandsHelping size={40} className="fill-current" />,
    title: "Customer Support",
    paragraph:
      "At International Fruit Hub, we believe that our client's success is our success. Our dedicated customer support team is always ready to assist with any inquiries or concerns, providing personalized solutions tailored to each client's unique needs. We strive to build lasting relationships based on trust, reliability, and exceptional service.",
  },
];

export default featuresData;
