
const ItemTags: React.FC<{ tags: Array<string> }> = ({ tags }) => {
    return (
        <ul className="">
            {tags.map((tag) => (
                <li className="inline-block px-2 py-1 font-semibold leading-none text-12 rounded border-[#6cb6f4] text-[#6cb6f4] border-0.5 mr-2 hover:bg-[#6cb6f4] hover:text-[#fff]">
                    <a href="#">{tag}</a>
                    </li>
            ))}

            {/* <li className="-more">
                <a href="#" className="" >
                    More
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="">
                    <li className=""><a href="#">multiverse</a></li>
                    <li className=""><a href="#">play2earn</a></li>
                    <li><a href="#">win2earn</a></li>
                </ul>
            </li> */}
        </ul>
    )
}

export default ItemTags;