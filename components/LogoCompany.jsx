import Image from 'next/image';
import { clients } from '../constants';

const LogoCompany = () => (
  <section className="flex justify-center items-center my-4">
    <div className="flex justify-center items-center flex-wrap w-full">
      {clients.map((client) => (
        <div key={client.id} className="flex-1 justify-center items-center sm:min-w-[192px] min-w-[120px] m-20">
          <Image
            src={client.logo}
            alt="client_logo"
            className=" sm:w-[192px] w-[200px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default LogoCompany;
