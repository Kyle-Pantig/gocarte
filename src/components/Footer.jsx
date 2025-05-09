import Center from "./Center";
import Facebook from "./Icons/FollowUs/Facebook";
import Instagram from "./Icons/FollowUs/Instagram";
import Telegram from "./Icons/FollowUs/Telegram";
import Twitter from "./Icons/FollowUs/Twitter";
import WhatsApp from "./Icons/FollowUs/WhatsApp";
import AustraliaPost from "./Icons/LogisticsPartner/AustraliaPost";
import FedEX from "./Icons/LogisticsPartner/FedEX";
import TNTExpress from "./Icons/LogisticsPartner/TNTExpress";
import USPortalService from "./Icons/LogisticsPartner/USPortalService";
import Alipay from "./Icons/PaymentMethod/Alipay";
import Bitcoin from "./Icons/PaymentMethod/Bitcoin";
import BitcoinCash from "./Icons/PaymentMethod/BitcoinCash";
import GooglePay from "./Icons/PaymentMethod/GooglePay";
import MasterCard from "./Icons/PaymentMethod/MasterCard";
import Payoneer from "./Icons/PaymentMethod/Payoneer";
import PayPal from "./Icons/PaymentMethod/PayPal";
import StripeIcon from "./Icons/PaymentMethod/StripeIcon";
import UnionPay from "./Icons/PaymentMethod/UnionPay";
import VisaIcon from "./Icons/PaymentMethod/VisaIcon";

const Footer = () => {
  return (
    <div className="py-4 bg-[#F3F3F3]">
      <Center>
        <div className="flex justify-between pt-10 pb-12">
          <div>
            <h1 className="font-bold text-center py-4 pb-8 text-xl">Payment Method</h1>
            <div className="grid grid-cols-4 gap-3">
              <VisaIcon />
              <MasterCard />
              <StripeIcon />
              <Alipay />
              <Payoneer />
              <Bitcoin />
              <PayPal />
              <GooglePay />
              <BitcoinCash />
              <UnionPay />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-center py-4 pb-8 text-xl">Logistics Partner</h1>
            <div className="grid grid-rows-4 gap-2">
              <FedEX/>
              <TNTExpress/>
              <AustraliaPost/>
              <USPortalService/>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-center py-4 pb-8 text-xl">Follow Us</h1>
            <div className="grid grid-cols-5 gap-3">
              <WhatsApp/>
              <Twitter/>
              <Telegram/>
              <Instagram/>
              <Facebook/>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-24">
          <div>
            <h1 className="font-bold py-4 pb-8 text-xl">Product</h1>
            <div className="flex flex-col gap-4 text-sm">
              <p>Landing Page</p>
              <p>Popup Builder</p>
              <p>Web Design</p>
              <p>Content</p>
              <p>Integrations</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold py-4 pb-8 text-xl">Resources</h1>
            <div className="flex flex-col gap-4 text-sm">
              <p>Academy</p>
              <p>Blog</p>
              <p>Themes</p>
              <p>Hosting</p>
              <p>Developers</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold py-4 pb-8 text-xl">Get to Know Us</h1>
            <div className="flex flex-col gap-4 text-sm">
              <p>Careers</p>
              <p>Blog</p>
              <p>About Go Carte</p>
              <p>Investor Relations</p>
              <p>Go Carte Devices</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold py-4 pb-8 text-xl">Go Carte Payment Products</h1>
            <div className="flex flex-col gap-4 text-sm">
              <p>Go Carte Business Card</p>
              <p>Shop with Points</p>
              <p>Reload Your Balance</p>
              <p>Go Carte Currency Converter</p>
            </div>
          </div>
        </div>
        <div className="py-2">
          <h2 className="text-center text-xs text-gray-500">© 2024 Go Carte. All rights reserved.</h2>
        </div>
      </Center>
    </div>
  );
};

export default Footer;
