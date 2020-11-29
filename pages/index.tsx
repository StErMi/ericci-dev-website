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
    <div className="grid h-screen grid-cols-7 bg-primary">
      <div className="col-span-4">
        <div className="relative w-full h-full">
          <Image className="object-cover" src="/cover.jpeg" layout="fill" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-3 align-middle">
        <div className="px-32 text-center text-primary">
          <div className="font-black font-mulish text-7xl">Emanuele Ricci</div>
          <div className="py-10 text-2xl font-light">
            Full Stack Deloper @{' '}
            <a className="font-bold underline" href="https://soplaya.com/">
              Soplaya
            </a>{' '}
            / Alexa & Google Assistant Developer
          </div>
          <div className="flex flex-row justify-center pt-10 space-x-8">
            <a href="https://twitter.com/StErMi">
              <div className="flex items-center justify-center w-20 h-20 border rounded-full bg-primary border-primary hover:border-button hover:text-button">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/emanuelericci">
              <div className="flex items-center justify-center w-20 h-20 border rounded-full bg-primary border-primary hover:border-button hover:text-button">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
              </div>
            </a>

            <a href="https://github.com/StErMi">
              <div className="flex items-center justify-center w-20 h-20 border rounded-full bg-primary border-primary hover:border-button hover:text-button">
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </div>
            </a>

            <a href="https://www.instagram.com/ericci87">
              <div className="flex items-center justify-center w-20 h-20 border rounded-full bg-primary border-primary hover:border-button hover:text-button">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
