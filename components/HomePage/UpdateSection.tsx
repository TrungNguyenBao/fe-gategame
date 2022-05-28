const Update: React.FC = () => {
    return <section className="mb-16">
        <div className="rounded-xl overflow-hidden">
            <div className="relative">
                <img className="w-full" src="/images/icon/updates.png" />
                <div className="flex flex-col justify-center absolute left-0 top-0 w-1/3 h-full bg-red">
                    <div className="pl-10">
                        <h2 className="text-[#0a85ed] text-40 font-semibold mb-6">Winter Event, Soldiers!</h2>
                        <p className="text-gray-700 mb-4">Feel the thrill of the chase and the rush of escape behind the wheels of the world’s hottest high-performance cars</p>
                        <a href="#" className="inline-block w-auto bg-[#0a85ed] hover:bg-blue-600 transition-all py-2 px-10 rounded-md font-semibold">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default Update;