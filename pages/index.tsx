import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image';

const IndexPage = () => (
  <Layout title="Home | Emanuele Ricci ~ Full Stack Developer">
    <div className="grid grid-cols-7 h-screen bg-primary">
      <div className="col-span-4">
        <div className="w-full h-full relative">
          <Image className="object-cover" src="/cover.jpeg" layout="fill" />
        </div>
      </div>
      <div className="col-span-3 flex flex-col justify-center align-middle items-center">
        <div className="px-32 text-center text-primary">
          <div className="font-mulish font-black text-7xl">Emanuele Ricci</div>
          <div className="py-10 text-2xl font-light">
            Full Stack Deloper @{' '}
            <a className="font-bold underline" href="https://soplaya.com/">
              Soplaya
            </a>{' '}
            / Alexa & Google Assistant Developer
          </div>
          <div className="pt-10 space-x-8 flex flex-row justify-center">
            <div className="flex items-center bg-primary hover:border rounded-full p-5 hover:border-button hover:text-button">
              <a href="https://twitter.com/StErMi">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
              </a>
            </div>
            <div className="flex items-center bg-primary hover:border rounded-full p-5 hover:border-button hover:text-button">
              <a href="https://www.linkedin.com/in/emanuelericci/">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
              </a>
            </div>
            <div className="flex items-center bg-primary hover:border rounded-full p-5 hover:border-button hover:text-button">
              <a href="https://github.com/StErMi">
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </a>
            </div>
            <div className="flex items-center bg-primary hover:border rounded-full p-5 hover:border-button hover:text-button">
              <a href="https://www.instagram.com/ericci87">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
