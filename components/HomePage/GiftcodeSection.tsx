import { Title2 } from "../../components/Common/Title";
import { ButtonPrimary } from "../../components/Common/Button";
import { useHomePageContext } from "../../lib/providers/homepage";

const Giftcode: React.FC = () => {
  const { giftCodeItems } = useHomePageContext();

  return <section className="mb-16">
    <div className="rounded-xl overflow-hidden shadow-2xl">
      <div className="relative">
        <img className="w-full" src="/images/icon/updates2.png" />
        <div className="flex flex-col justify-center absolute left-0 top-0 h-full bg-red">
          <div className="pl-10">
            <h2 className="flex gap-4 items-center text-40 font-semibold mb-6">
              {giftCodeItems.Name}
              <img src="/images/icon/gift.svg" />
            </h2>
            <p className="text-white mb-4">
              {giftCodeItems.Content}
            </p>
            <form method="post">
              <div className="flex gap-2 items-center">
                <div className="flex-1">
                  <input type="email" name="EMAIL" className="form-control required email" id="mce-EMAIL" placeholder="Enter your email to be the first to know" />
                </div>
                <ButtonPrimary>
                  Submit
                </ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Giftcode;