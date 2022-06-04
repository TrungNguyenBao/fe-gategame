import { useHomePageContext } from "../../lib/providers/homepage";
import { ButtonLinkPrimary } from "../../components/Common/Button";

const Update: React.FC = () => {
    const { slideWinterEventItems }: any = useHomePageContext()

    return <section className="mb-16">
        <div className="rounded-xl overflow-hidden">
            <div className="relative">
                <img className="w-full" src="/images/icon/updates.png" />
                <div className="flex flex-col justify-center absolute left-0 top-0 w-1/3 h-full bg-red">
                    <div className="pl-10">
                        <h2 className="text-[#0a85ed] text-40 font-semibold mb-6">{slideWinterEventItems.Name}</h2>
                        <p className="text-gray-700 mb-4">{slideWinterEventItems.Content}</p>
                        <ButtonLinkPrimary>Join now!</ButtonLinkPrimary>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default Update;