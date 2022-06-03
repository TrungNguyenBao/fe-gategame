import { useHomePageContext } from "../../pages"
import { Title2 } from "../Common/Title"
import GameItemHorizontal from "../Items/GameHorizontalItem"

export const NewOnBoard: React.FC = () => {
    const { newOnBoardItems }: any = useHomePageContext()
    return (
        <div>
            <Title2 className="mb-4">New on Board</Title2>
            <div>
                {newOnBoardItems.map((item: any) => (
                    <GameItemHorizontal key={item.Id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export const TopReviewers: React.FC = () => {
    return (
        <div>
            <Title2 className="mb-4">Top Reviewers</Title2>
        </div>
    )
}


const NewOnBoardAndTopReviewers: React.FC = () => {
    return (
        <section className="mb-16">
            <div className='container flex justify-between gap-8'>
                <div className='w-1/2'>
                    <NewOnBoard />
                </div>
                <div className='w-1/2'>
                    <TopReviewers />
                </div>
            </div>
        </section>
    )
}


export default NewOnBoardAndTopReviewers;