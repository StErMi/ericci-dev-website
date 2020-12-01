import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const IndexPage = () => {
  const socialButtons = [
    {
      key: 'twitter',
      icon: faTwitter,
      url: 'https://twitter.com/StErMi',
    },
    {
      key: 'linkedin',
      icon: faLinkedinIn,
      url: 'https://www.linkedin.com/in/emanuelericci',
    },
    {
      key: 'github',
      icon: faGithub,
      url: 'https://github.com/StErMi',
    },
    {
      key: 'instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/ericci87',
    },
  ];

  return (
    <Layout title="Home | Emanuele Ricci ~ Full Stack Developer">
      <div className="w-full h-full lg:flex ">
        <div className="lg:w-7/12 lg:h-screen">
          <img className="object-cover w-full lg:h-full" src="/cover.jpeg" />
        </div>
        <div className="lg:w-5/12">
          <div className="flex flex-col items-center justify-center h-full px-10 mt-10 space-y-10 text-center align-middle lg:mt-0 text-primary font-mulish">
            <div className="text-6xl font-black">Emanuele Ricci</div>
            <div className="text-2xl font-light leading">
              Full Stack Deloper @{' '}
              <a
                className="font-bold underline"
                href="https://soplaya.com/"
                target="black"
              >
                Soplaya
              </a>{' '}
              / Alexa & Google Assistant Developer
            </div>
            <div>
              <div className="flex flex-row justify-center space-x-8">
                {socialButtons.map((button) => (
                  <a href={button.url} target="black" key={button.key}>
                    <div className="flex items-center justify-center w-20 h-20 border border-white rounded-full hover:border-button hover:text-button">
                      <FontAwesomeIcon
                        icon={button.icon}
                        className="text-3xl"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
